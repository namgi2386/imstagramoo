import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/utils";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTodoMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTodo,
    onMutate: async (updatedTodo) => {
      // 조회 취소
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.todo.list,
      });
      // 낙관적 업데이트
      const prevTodos = queryClient.getQueryData<Todo[]>(QUERY_KEYS.todo.list);
      queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list, (prevTodos) => {
        if (!prevTodos) return [];
        return prevTodos.map((prevTodo) =>
          prevTodo.id === updatedTodo.id
            ? { ...prevTodo, ...updatedTodo }
            : prevTodo,
        );
      });
      return {
        prevTodos,
      };
    },
    // context: onMutate반환값
    onError: (error, variable, context) => {
      // 캐시데이터 되돌리기
      if (context && context.prevTodos) {
        queryClient.setQueryData<Todo[]>(
          QUERY_KEYS.todo.list,
          context.prevTodos,
        );
      }
    },
    // 완료 후 쿼리상태 검증
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.todo.list,
      });
    },
  });
}
