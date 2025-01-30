import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="mt-5">
      <Separator />
      <div className="flex justify-center items-center gap-2 my-5 text-center text-sm opacity-50">
        feito com <Heart fill="white" size={20} className="animate-pulse" />
        <Link
          href="https://renatowillon.vercel.app/"
          target="_blank"
          className="font-bold"
        >
          wDev
        </Link>
      </div>
    </footer>
  );
};
