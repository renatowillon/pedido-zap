import { ChevronRight } from "lucide-react";

type Props = {
  titulo: string;
  descricao: string;
  imagem: string;
};
export const TagQuemSomos = ({ titulo, descricao, imagem }: Props) => {
  return (
    <div className="flex gap-5 max-w-xl items-center justify-center bg-primary rounded-2xl p-3 hover:shadow-xl transition-all hover:scale-105">
      <div className="p-3 hidden md:flex">
        <img src={imagem} alt={titulo} className="w-56 h-4w-56" />
      </div>
      <div>
        <h1 className="text-2xl font-bold py-3">{titulo}</h1>
        <p className="pb-3 pl-6">{descricao}</p>
      </div>
      <div className="rounded-full bg-white p-3 hover:scale-105 transition-all">
        <ChevronRight className="text-primary" />
      </div>
    </div>
  );
};
