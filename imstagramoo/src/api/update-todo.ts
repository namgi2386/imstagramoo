import { API_URL } from "@/lib/contants";
import type { Todo } from "@/types";

// Partial<Todo>: 모든 요소를 .? 상태로
// & 인터섹션 타입 정의 (id는 필수요소로 지정)
export async function updateTodo(todo: Partial<Todo> & { id: string }) {
  const response = await fetch(`${API_URL}/todos/${todo.id}`, {
    method: "PATCH",
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error("update todo failed");
  const data: Todo = await response.json();
  return data;
}
