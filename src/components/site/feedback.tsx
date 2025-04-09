import { User } from "lucide-react";
import { Separator } from "../ui/separator";
import { CardFeedback } from "./cardFeedback";

export const Feedback = () => {
  return (
    <div>
      <div className="bg-secondary-foreground p-5">
        <h1 className="text-primary text-5xl font-bold text-center">
          O que os clientes <span className="text-secondary">dizem</span>
        </h1>
        <p className="text-center text-secondary font-semibold p-5">
          Leia depoimentos de nossos clientes satisfeitos
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-10">
        <div className="">
          <CardFeedback
            descricao="Atendimento incrivel, comida deliciosa, ambiente agradável. Recomendo!"
            name="Julio Cesar"
            jobs="Médico"
            foto="/images/site/avatar2.png"
            avaliacao={5}
          />
        </div>
        <div className="">
          <CardFeedback
            descricao="Tempero na medida certa, pratos bem servidos, atendimento rápido e eficiente. Recomendo!"
            name="Sergio Lopes"
            jobs="Engenheiro"
            foto="/images/site/avatar1.png"
            avaliacao={5}
          />
        </div>
        <div className="">
          <CardFeedback
            descricao="Comida muito saborosa, atendimento excelente, ambiente agradável. Recomendo!"
            name="Sabrina Silva"
            jobs="Administradora"
            foto="/images/site/avatar3.png"
            avaliacao={5}
          />
        </div>
      </div>
    </div>
  );
};
