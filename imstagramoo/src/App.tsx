import "./App.css";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

function App() {
  return (
    <>
      <Toaster />
      <div className="bg-rose-300 text-2xl">tailwindcss-init</div>
      <Button
        variant={"destructive"}
        onClick={() => toast("toast-test", { position: "top-center" })}
      >
        shadcn-button-init
      </Button>
      <div className="text-primary bg-muted border-destructive border-2">
        css-test
      </div>
    </>
  );
}

export default App;
