"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { CardEndereco } from "./cardEndereco";

export const Endereco = () => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="bg-transparent border px-14 py-7 border-primary hover:bg-primary/10">
          Nosso Endereço
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Nossas Unidades</DrawerTitle>
          <DrawerDescription>
            confira nossos endereços para nos visitar.
          </DrawerDescription>
        </DrawerHeader>
        <div className="md:grid-cols-3 px-10 grid grid-cols-1 gap-5">
          <CardEndereco
            nome="Unidade 1"
            descricao="Av. General Edson Ramalho 696, Manaira, João Pessoa/PB"
            conteudo="Nosso restaurante voltado em comidas gumetizadas e com um ambiente agradável, estamos pronto para te receber."
            rotaName="Ver no Mapa"
            rotaLink="https://www.google.com/maps/dir//Av.+Gen.+Edson+Ramalho,+696+-+Mana%C3%ADra,+Jo%C3%A3o+Pessoa+-+PB,+58038-100/@-7.1032332,-34.9144011,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7acdd17291c7a43:0xda3840762c8d38a1!2m2!1d-34.8319992!2d-7.1032405?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
            cardapioLink="/pedido"
          />
          <CardEndereco
            nome="Unidade 2"
            descricao="Av. General Edson Ramalho 696, Manaira, João Pessoa/PB"
            conteudo="Nosso restaurante voltado em comidas gumetizadas e com um ambiente agradável, estamos pronto para te receber."
            rotaName="Ver no Mapa"
            rotaLink="https://www.google.com/maps/dir//Av.+Gen.+Edson+Ramalho,+696+-+Mana%C3%ADra,+Jo%C3%A3o+Pessoa+-+PB,+58038-100/@-7.1032332,-34.9144011,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7acdd17291c7a43:0xda3840762c8d38a1!2m2!1d-34.8319992!2d-7.1032405?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
            cardapioLink="/pedido"
          />
          <CardEndereco
            nome="Unidade 2"
            descricao="Av. General Edson Ramalho 696, Manaira, João Pessoa/PB"
            conteudo="Nosso restaurante voltado em comidas gumetizadas e com um ambiente agradável, estamos pronto para te receber."
            rotaName="Ver no Mapa"
            rotaLink="https://www.google.com/maps/dir//Av.+Gen.+Edson+Ramalho,+696+-+Mana%C3%ADra,+Jo%C3%A3o+Pessoa+-+PB,+58038-100/@-7.1032332,-34.9144011,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x7acdd17291c7a43:0xda3840762c8d38a1!2m2!1d-34.8319992!2d-7.1032405?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
            cardapioLink="/pedido"
          />
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="default" className="">
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
