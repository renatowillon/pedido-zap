import { createNumberGenerator } from "@/services/numPedido";
import { useCartStore } from "@/store/cart-store";
import { useCheckoutStore } from "@/store/checkout-store";

export const generateMessage = () => {
  const { name, address } = useCheckoutStore((state) => state);
  const { cart } = useCartStore((state) => state);
  let orderProdutts = [];
  for (let item of cart) {
    orderProdutts.push(`${item.quantity} x ${item.product.name}`);
  }
  const numPedido = createNumberGenerator();

  return `*Dados do Cliente:*
Nome: ${name}
Endereço: ${address.logradouro}, ${address.numero}, (${address.complemento})
${address.bairro}, ${address.localidade}/${address.uf}
------
*Pedido:*
${orderProdutts.join("\n")}`;
};
