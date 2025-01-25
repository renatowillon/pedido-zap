import { ChevronsDown, Heart } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Endereco } from "./endereco";

export const BannerSite = () => {
  return (
    <div className="h-[750px] relative">
      <img
        src="/images/background/Background2.png"
        alt="banner"
        className="w-full h-full object-cover relative pointer-events-none"
      />
      <div className="absolute top-10 left-10">
        <h1 className="text-8xl font-bold">GOURMET FOOD</h1>
        <h1 className="text-8xl font-bold text-red-600">Entregamos em</h1>
        <h1 className="text-8xl font-bold">sua casa</h1>
        <p className="text-2xl mt-5 text-primary-foreground">
          Experimente os sabores dos nossos pratos exclusivos, feitos com amor
          <br></br>e ingredientes frescos, sem sair de sua casa
        </p>
        <div className="flex gap-5 ml-20 mt-24">
          <Button className="px-14 py-7">
            <Link href="/pedido">Fazer Pedido</Link>
          </Button>
          <Endereco />
        </div>
      </div>
      <ChevronsDown
        size={70}
        className="animate-pulse absolute bottom-0 left-1/2 hover:scale-110 transition-all"
      />
    </div>
  );
};
