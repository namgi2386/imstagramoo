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
        queryKey: QUERY_KEYS.todo.detail(updatedTodo.id),
      });
      // 낙관적 업데이트
      const prevTodo = queryClient.getQueryData<Todo>(
        QUERY_KEYS.todo.detail(updatedTodo.id)
      )
      queryClient.setQueryData<Todo>(QUERY_KEYS.todo.detail(updatedTodo.id),(prevTodo) => {
        if(!prevTodo) return ;
        return {
          ...prevTodo,
          ...updatedTodo
        }
      } );
      return {
        prevTodo
      }
    },
    // context: onMutate반환값
    onError: (error, variable, context) => {
      // 캐시데이터 되돌리기
      if(context && context.prevTodo){
        queryClient.setQueryData<Todo>(
          QUERY_KEYS.todo.detail(context.prevTodo.id),
          context.prevTodo
        )
      }
    },
  });
}