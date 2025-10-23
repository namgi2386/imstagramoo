import { Route, Routes } from "react-router";
import "./App.css";
import Indexpage from "@/pages/index-page";
import SignInPage from "@/pages/sign-in-page";
import SignUpPage from "@/pages/sign-up-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Indexpage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
