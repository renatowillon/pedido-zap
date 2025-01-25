"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { Map } from "lucide-react";

type CardEnderecoProps = {
  nome: string;
  descricao: string;
  conteudo: string;
  rotaName: string;
  rotaLink: string;
  cardapioLink: string;
};

export const CardEndereco = ({
  nome,
  conteudo,
  descricao,
  rotaName,
  rotaLink,
  cardapioLink,
}: CardEnderecoProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-5 items-center">
          <div>
            <Map className="text-primary" size={30} />
          </div>
          <div>
            <CardTitle>{nome}</CardTitle>
            <CardDescription>{descricao}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>{conteudo}</p>
      </CardContent>
      <CardFooter>
        <div className="flex w-full gap-5">
          <Button>
            <Link target="_blank" href={rotaLink}>
              {rotaName}
            </Link>
          </Button>
          <Button>
            <Link target="_blank" href={cardapioLink}>
              Confira o Cardápio
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
