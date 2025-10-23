import "./App.css";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
      <Popover>
        <PopoverTrigger asChild>
          <Button>Open</Button>
        </PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover>
      <Carousel className="m-20">
        <CarouselContent>
          <CarouselItem className="basis-1/2 bg-rose-100">
            contentA
          </CarouselItem>
          <CarouselItem className="basis-1/2 bg-rose-200">
            contentB
          </CarouselItem>
          <CarouselItem className="basis-1/2 bg-rose-300">
            contentC
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-primary bg-muted border-destructive border-2">
        css-test
      </div>
    </>
  );
}

export default App;
