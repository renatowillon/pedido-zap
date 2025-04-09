import { useCheckoutStore } from "@/store/checkout-store";
import { Button } from "../ui/button";
import Link from "next/link";
import { generateMessage } from "@/lib/generate-message";
import { useState } from "react";
import { CheckCheck } from "lucide-react";

const refresh = () => {
  setTimeout(() => {
    window.location.reload();
  }, 2000);
};

export const StepFinish = () => {
  const [contatoZap, setContatoZap] = useState("");
  const { name } = useCheckoutStore((state) => state);
  const message = generateMessage();
  const linkZap = `https://wa.me//${contatoZap}?text=${encodeURI(message)}`;

  return (
    <div className="text-center flex flex-col gap-5">
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido ao nosso Whatsapp para concluir. Nosso atendente
        irá te guiar sobre o andamento do pedido.
      </p>
      <div className="flex gap-5 items-center justify-center">
        <input
          className="py-2 px-5 w-full rounded-lg border text-center font-bold"
          type="text"
          inputMode="numeric"
          value={contatoZap}
          onChange={(e) => {
            const apenasNumero = e.target.value.replace(/[^0-9]/g, "");
            setContatoZap(apenasNumero);
          }}
          name="telefone"
          id=""
          placeholder="digite seu contato para simular"
        />
        {/* <Button onClick={setarNumeroZap}>
          <CheckCheck />
        </Button> */}
      </div>
      <Button onClick={refresh}>
        <Link target="_blank" href={linkZap}>
          Enviar Para o Whatsapp
        </Link>
      </Button>
    </div>
  );
};
