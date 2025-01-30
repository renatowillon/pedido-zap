import { Star } from "lucide-react";

type Props = {
  descricao: string;
  foto: string;
  name: string;
  jobs: string;
  avaliacao: number;
};

export const CardFeedback = ({
  avaliacao,
  descricao,
  foto,
  jobs,
  name,
}: Props) => {
  return (
    <div className="w-full bg-secondary-foreground p-5 text-secondary rounded-xl">
      <div>
        <p className="font-semibold p-3">{descricao}</p>

        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <img className="w-16 rounded-full" src={foto} />
            <div>
              <p className="font-bold">{name}</p>
              <p className="font-semibold">{jobs}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <p className="font-semibold">{avaliacao.toFixed(1)}</p>
          <div className="flex text-orange-500">
            {""}
            <Star /> <Star /> <Star /> <Star /> <Star />
          </div>
        </div>
      </div>
    </div>
  );
};
