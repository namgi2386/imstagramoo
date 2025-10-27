import { Button } from "@/components/ui/button";
import { useDeleteTodoMutation } from "@/hooks/mutations/use-delete-todo-mutation";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import { useTodoDataById } from "@/hooks/queries/use-todo-data-by-id";
import { Link } from "react-router";

export default function TodoItem({ id }: { id: string }) {
  const { data: todo } = useTodoDataById(id, "LIST");
  if (!todo) throw new Error("todo data undefined");
  const { content, isDone } = todo;
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
