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

      <div className="flex items-center justify-center p-10 gap-10">
        <div className="w-1/4">
          <CardFeedback />
        </div>
        <div className="w-1/4">
          <CardFeedback />
        </div>
        <div className="w-1/4">
          <CardFeedback />
        </div>
      </div>
    </div>
  );
};
