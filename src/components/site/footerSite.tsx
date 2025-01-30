import { Facebook, Heart, Instagram, Link2, Twitch, X } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { Endereco } from "./endereco";

export const Footer = () => {
  return (
    <div>
      <Separator />
      <div className="p-10 grid gap-3 grid-cols-1 md:grid-cols-4">
        <div className="flex gap-2 items-center justify-center md:col-span-2 text-3xl">
          <img src="images/site/logo/logo.png" className="w-36" />
          Pedido <p className="font-bold text-4xl">ZAP</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Button className="border w-48 h-14 bg-primary border-primary">
            <Link href="/pedido">Fazer Pedido</Link>
          </Button>

          <Endereco />

          <Button className="border w-48 h-14 bg-primary border-primary">
            <Link href="https://wa.me/5583988332659" target="_blank">
              Chama no ZAP
            </Link>
          </Button>
        </div>
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-2xl font-bold">Redes Sociais</h1>
          <div className="flex gap-5">
            <Link
              href="#"
              className="hover:scale-125 transition-all"
              target="_blank"
            >
              <Instagram />
            </Link>
            <Link
              href="#"
              className="hover:scale-125 transition-all"
              target="_blank"
            >
              <Twitch />
            </Link>
            <Link
              href="#"
              className="hover:scale-125 transition-all"
              target="_blank"
            >
              <Facebook />
            </Link>
          </div>
        </div>
      </div>
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
    </div>
  );
};
