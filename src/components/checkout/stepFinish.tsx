import { useCheckoutStore } from "@/store/checkout-store";
import { Button } from "../ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";
import { use, useEffect } from "react";

const refresh = () => {
  setTimeout(() => {
    window.location.reload();
  }, 2000);
};

export const StepFinish = () => {
  const { name } = useCheckoutStore((state) => state);
  const message = generateMessage();
  const linkZap = `https://wa.me//${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}`;

  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido ao nosso Whatsapp para concluir. Nosso atendente
        irá te guiar sobre o andamento do pedido.
      </p>
      <Button onClick={refresh}>
        <Link target="_blank" href={linkZap}>
          Enviar Para o Whatsapp
        </Link>
      </Button>
    </div>
  );
};
