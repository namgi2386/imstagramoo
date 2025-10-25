import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodosData } from "@/hooks/queries/use-todos.data";

export default function TodoListPage() {
  const { data: todos, isLoading, error } = useTodosData();

  if (error) return <div>오류발생</div>;
  if (isLoading) return <div>로딩중</div>;

  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl">todo</h1>
      <TodoEditor />
      {todos?.map((t) => (
        <TodoItem key={t.id} {...t} />
      ))}
    </div>
  );
}
