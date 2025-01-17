import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const CardSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <RocketIcon className="mr-2" />
          <p>Carrinho</p>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrinho</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-5 my-3">...</div>
        <Separator className="mt-4" />
        <div className="flex justify-between items-center text-xs">
          <div>SubTotal:</div>
          <div>0,00</div>
        </div>
        <Separator className="mt-4" />
        <div className="text-center">
          <Button>Finalizar Compra</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
