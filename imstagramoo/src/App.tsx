import { Outlet, Route, Routes } from "react-router";
import "./App.css";
import Indexpage from "@/pages/index-page";
import SignInPage from "@/pages/sign-in-page";
import SignUpPage from "@/pages/sign-up-page";
import Counterpage from "@/pages/counter-page";
import TodoListPage from "@/pages/todo-list-page";

function AuthLayout() {
  return (
    <div>
      <header>인증</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Indexpage />} />
      <Route path="/counter" element={<Counterpage />} />
      <Route path="/todolist" element={<TodoListPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
}

export default App;
