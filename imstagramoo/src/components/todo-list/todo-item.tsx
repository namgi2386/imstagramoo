import { Button } from "@/components/ui/button";
import { useUpdateTodoMutation } from "@/hooks/mutations/use-update-todo-mutation";
import type { Todo } from "@/types";
import { Link } from "react-router";

export default function TodoItem({ id, content, isDone }: Todo) {
  const { mutate } = useUpdateTodoMutation();
  const handleDelteClick = () => {};
  const handleCheckBocClick = () => {
    mutate({
      id,
      isDone: !isDone,
    });
  };
  return (
    <div className="flex items-center justify-between border p-2">
      <div className="flex gap-5">
        <input
          type={"checkbox"}
          checked={isDone}
          onClick={handleCheckBocClick}
        />
        <Link to={`/todolist/${id}`}>{content}</Link>
      </div>
      <Button variant={"destructive"} onClick={handleDelteClick}>
        삭제
      </Button>
    </div>
  );
}
