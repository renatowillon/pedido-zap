"use client";
import { ChevronsDown, Heart } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Endereco } from "./endereco";

export const BannerSite = () => {
  return (
    <div className="h-[750px] bg-[url(/images/background/Background2.png)] bg-cover ">
      <div className="p-10">
        <h1 className="md:text-8xl text-5xl font-bold text-white">
          GOURMET FOOD
        </h1>
        <h1 className="md:text-8xl text-4xl font-bold text-primary">
          Entregamos em
        </h1>
        <h1 className="md:text-8xl text-4xl font-bold text-white">sua casa</h1>
        <p className="text-2xl mt-5 text-primary-foreground">
          Experimente os sabores dos nossos pratos exclusivos, feitos com amor
          <br></br>e ingredientes frescos, sem sair de sua casa
        </p>
        <div className="flex md:flex-row flex-col gap-5 pt-24">
          <Button className="px-14 py-7 border border-primary">
            <Link href="/pedido">Fazer Pedido</Link>
          </Button>
          <Endereco />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ChevronsDown
          size={70}
          className="animate-pulse hover:scale-110 transition-all pt-5"
        />
      </div>
    </div>
  );
};
