import { Cart } from "@/types/cart";
import { CartItemQuantity } from "./item-quantity";

type Props = {
  item: Cart;
};
export const CartItem = ({ item }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-16 h-16 overflow-hidden rounded-md">
        <img src={item.product.image} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <p className="text-md">{item.product.name}</p>
        <p className="text-sm opacity-50">R$ {item.product.price.toFixed(2)}</p>
      </div>
      <div className="">
        <CartItemQuantity cartItem={item} />
      </div>
    </div>
  );
};
