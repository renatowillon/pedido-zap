"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RocketIcon, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/store/cart-store";
import { CartItem } from "./item";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { useState } from "react";
import { DialogCheckout } from "../checkout/dialog";

export const CardSidebar = () => {
  const [CheckoutOpen, setCheckoutOpen] = useState(false);
  const { cart } = useCartStore((state) => state);
  let subtotal = 0;
  for (let item of cart) {
    subtotal += item.quantity * item.product.price;
  }

  let quantidadeItem = 0;
  for (let qtd of cart) {
    quantidadeItem += qtd.quantity;
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <RocketIcon className="mr-2" />
          <p>Carrinho</p>
          {cart.length > 0 && (
            <div className="absolute size-6 bg-red-600  border-2 border-bg-secondary rounded-full shadow-md -right-2 -top-2 flex items-center justify-center">
              <p className="text-xs">{quantidadeItem}</p>
            </div>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent>
        <ScrollArea className="h-full w-full">
          <SheetHeader className="flex flex-row items-center justify-between p-3">
            <SheetTitle>Carrinho</SheetTitle>
            <SheetClose className="opacity-75">
              <X className="h-4 w-4" />
            </SheetClose>
          </SheetHeader>
          <div className="flex flex-col gap-5 my-3">
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
          <Separator className="mt-4" />
          <div className="flex justify-evenly items-center text-xs mt-4">
            <div>SubTotal:</div>
            <div>R$ {subtotal.toFixed(2)}</div>
          </div>
          <Separator className="mt-4" />
          <div className="text-center mt-4">
            <Button
              onClick={() => setCheckoutOpen(true)}
              disabled={cart.length === 0}
            >
              Finalizar Compra
            </Button>
          </div>
        </ScrollArea>
        <DialogCheckout open={CheckoutOpen} onOpenChange={setCheckoutOpen} />
      </SheetContent>
    </Sheet>
  );
};
