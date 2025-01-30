import { Star } from "lucide-react";

export const CardFeedback = () => {
  return (
    <div className="w-full bg-secondary-foreground p-5 text-secondary rounded-xl">
      <div>
        <p className="font-semibold p-3">
          The food here is absolutely amazing!I keep coming back for more.
          Highly recommended!
        </p>

        <div className="flex items-center justify-between p-3">
          <div className="flex items-center gap-2">
            <p className="w-16 h-16 rounded-full bg-secondary"></p>
            <div>
              <p className="font-bold">Renato Willon</p>
              <p className="font-semibold">Front-End</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <p className="font-semibold">5.0</p>
            <div className="flex text-orange-500">
              {""}
              <Star /> <Star /> <Star /> <Star /> <Star />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
