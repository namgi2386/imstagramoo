// src/pages/counter-page.tsx
import Controller from "@/components/counter/controller";
import Viewer from "@/components/counter/viewer";

export default function Counterpage() {
  return (
    <div>
      <h1>Counterpage</h1>
      <Viewer />
      <Controller />
    </div>
  );
}
