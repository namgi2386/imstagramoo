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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Bug } from "lucide-react";

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
      <Dialog>
        <DialogTrigger asChild>
          <div className="m-20 flex h-20 w-20 flex-col items-center justify-center space-y-2 bg-gray-500">
            <div className="text-lg text-white">Open</div>
            <Bug className="h-10 w-10 fill-blue-600" />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Bug className="h-10 w-10 fill-green-600" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => console.log("no")}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => console.log("ok")}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default App;
