import TodoEditor from "@/components/todo-list/todo-editor";
import TodoItem from "@/components/todo-list/todo-item";
import { useTodos } from "@/store/todos";

export default function TodoListPage() {
  const todos = useTodos();
  return (
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-2xl">todo</h1>
      <TodoEditor />
      {todos.map((t) => (
        <TodoItem key={t.id} {...t} />
      ))}
    </div>
  );
}
