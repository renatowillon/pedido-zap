"use client";
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
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <RocketIcon className="mr-2" />
          <p>Carrinho</p>
          {cart.length > 0 && (
            <div className="absolute size-4 bg-red-600 rounded-full -right-1 -top-1"></div>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent>
        <ScrollArea className="h-full w-full">
          <SheetHeader>
            <SheetTitle>Carrinho</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-5 my-3">
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
          <Separator className="mt-4" />
          <div className="flex justify-between items-center text-xs mt-4">
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
