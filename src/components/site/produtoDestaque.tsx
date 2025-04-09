"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Separator } from "../ui/separator";

export const ProdutoDestaque = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center py-3 gap-2 px-3">
        <h1 className="md:text-5xl text-3xl font-bold">
          Explore nossos sabores
        </h1>
        <h1 className="md:text-5xl text-3xl font-bold text-red-700">
          Seleção de Destaques
        </h1>
      </div>
      <p className="text-center pb-3">
        O nosso restaurante, oferecemos uma variedade de serviços para atender
        às suas preferências gastronômicas.<br></br> Se você prefere jantar no
        local, para viagem ou peça para entregar sua comida, nós temos tudo o
        que você precisa.
      </p>
      <Separator />
      <div className="grid md:grid-cols-3 grid-cols-1 py-5 md:px-44 px-5 gap-5">
        <Card className="p-5 gap-5 flex flex-col items-center hover:scale-105 transition-all">
          <img
            src="/images/destaque/dest1.png"
            alt="food"
            className="object-cover"
          />
          <h1 className="text-3xl font-bold text-center">Bifes de Legumes</h1>
          <p className="text-center">
            Nosso bife de vegetais é uma mistura saudável de vegetais grelhados,
            temperados com perfeição e servido com um molho saboroso.
          </p>
          <Button>
            <Link href="/pedido">Fazer Pedido</Link>
          </Button>
        </Card>

        <Card className="p-5 gap-5 flex flex-col items-center hover:scale-105 transition-all">
          <img
            src="/images/destaque/dest2.png"
            alt="food"
            className="object-cover"
          />
          <h1 className="text-3xl font-bold text-center">Batata Frita</h1>
          <p className="text-center">
            Nossas Crocantes e douradas, nossas batatas fritas são uma mistura
            perfeita de crocância e sabor.
          </p>
          <Button>
            <Link href="/pedido">Fazer Pedido</Link>
          </Button>
        </Card>

        <Card className="p-5 gap-5 flex flex-col items-center hover:scale-105 transition-all">
          <img
            src="/images/destaque/dest3.png"
            alt="food"
            className="object-cover"
          />
          <h1 className="text-3xl font-bold text-center">Hambúrguer</h1>
          <p className="text-center">
            Nosso suculento e salgado, nosso hambúrguer apresenta um hambúrguer
            perfeitamente grelhado coberto com ingredientes frescos.
          </p>
          <Button>
            <Link href="/pedido">Fazer Pedido</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};
