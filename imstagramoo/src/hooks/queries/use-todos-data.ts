import { fetchTodos } from "@/api/fetch-todos";
import { QUERY_KEYS } from "@/lib/utils";
import type { Todo } from "@/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useTodosData() {
  const queryClient = useQueryClient();
  return useQuery({
    queryFn: async () => {
      // 전부다 가져와서
      const todos = await fetchTodos();
      // 개별 item은 각각 저장하자
      todos.forEach((t) => {
        queryClient.setQueryData<Todo>(QUERY_KEYS.todo.detail(t.id), t);
      });
      //id만 저장하도록 수정하자.
      return todos.map((t) => t.id);
    },
    queryKey: QUERY_KEYS.todo.list,
    retry: 1,
  });
}
