import { API_URL } from "@/lib/contants";
import type { Todo } from "@/types";

export async function createTodo(content: string) {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    body: JSON.stringify({
      // id는 자동생성
      content,
      isDone: false,
    }),
  });
  if (!response.ok) throw new Error("Create Todo Failed");
  const data: Todo = await response.json();
  return data;
}
