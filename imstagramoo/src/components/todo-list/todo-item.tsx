import { Button } from "@/components/ui/button";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import type { Todo } from "@/types";
import { Link } from "react-router";

export default function TodoItem({ id, content, isDone }: Todo) {
  const { mutate: deleteTodo, isPending: isDeleteTodoPending } =
    useDeleteTodoMutation();
  const { mutate: updateTodo } = useUpdateTodoMutation();
  const handleDelteClick = () => {
    deleteTodo(id);
  };
  const handleCheckBocClick = () => {
    updateTodo({
      id,
      isDone: !isDone,
    });
  };
  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          type={"checkbox"}
          disabled={isDeleteTodoPending}
          checked={isDone}
          onClick={handleCheckBocClick}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button
        variant={"destructive"}
        disabled={isDeleteTodoPending}
        onClick={handleDelteClick}
      >
        삭제
      </Button>
    </div>
  );
}
