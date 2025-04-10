import { createNumberGenerator } from "@/services/numPedido";
import { useCartStore } from "@/store/cart-store";
import { useCheckoutStore } from "@/store/checkout-store";

export const generateMessage = () => {
  const { name, address } = useCheckoutStore((state) => state);
  const { cart } = useCartStore((state) => state);
  let orderProdutts = [];
  let subtotal = 0;
  for (let item of cart) {
    let totalItem = item.quantity * item.product.price;
    orderProdutts.push(
      `${item.product.name} - ${item.quantity} x R$${item.product.price.toFixed(
        2
      )} = R$${totalItem.toFixed(2)}`
    );
  }
  for (let item of cart) {
    subtotal += item.quantity * item.product.price;
  }

  const numPedido = createNumberGenerator();

  return `*Dados do Cliente:*
Nome: ${name}
Endereço: ${address.logradouro}, ${address.numero}, ${address.complemento}
${address.bairro}, ${address.localidade}/${address.uf}
------
*Pedido:*
${orderProdutts.join("\n")}

*Total: R$${subtotal.toFixed(2)}*
`;
};
