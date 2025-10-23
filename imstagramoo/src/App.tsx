import "./App.css";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <>
      <div className="bg-rose-300 text-2xl">tailwindcss-init</div>
      <Button>shadcn-button-init</Button>
      <div className="text-primary bg-muted border-destructive border-2">
        css-test
      </div>
    </>
  );
}

export default App;
