import { Button } from "@/components/ui/button";
import { useDeleteTodo } from "@/store/todos";
import type { Todo } from "@/types";
import { Link } from "react-router";

export default function TodoItem({ id, content }: Todo) {
  const deleteTodo = useDeleteTodo();
  const handleDelteClick = () => {
    deleteTodo(id);
  };
  return (
    <div className="flex items-center justify-between border p-2">
      <Link to={`/todolist/${id}`}>{content}</Link>
      <Button variant={"destructive"} onClick={handleDelteClick}>
        삭제
      </Button>
    </div>
  );
}
