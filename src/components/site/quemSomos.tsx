import { TagQuemSomos } from "./tagQuemSomos";

export const QuemSomos = () => {
  return (
    <div className="p-10 grid md:grid-cols-2 grid-cols-1 gap-5 bg-secondary-foreground">
      <div className="flex flex-col">
        <h1 className="text-4xl text-secondary font-bold">Quem somos &</h1>
        <h1 className="text-5xl text-primary font-bold">O que fazemos</h1>
        <p className="py-5 text-secondary font-semibold">
          Na Red Gourmet Kitchen, colocamos muito amor e carinho em cada receita
          para oferecer a você a melhor culinária gourmet de Abuja. Todos os
          nossos ingredientes são provenientes de agricultores e mercados
          locais. Ótimos produtos, ótima comida, ótimas vibrações.
        </p>
        <div className="flex flex-col gap-5">
          <TagQuemSomos
            titulo="Recém Cultivados"
            descricao="Todos os nossos ingredientes são provenientes de agricultores e mercados locais. Ótimos produtos, ótima comida, ótimas vibrações."
            imagem="/images/site/recem-cultivados.png"
          />
          <TagQuemSomos
            titulo="Facilidade e Conforto"
            descricao="Saboreie nossos deliciosos pratos no conforto da sua casa com nosso serviço de entrega rápido e confiável."
            imagem="/images/site/conforto.png"
          />
          <TagQuemSomos
            titulo="Fresco e saboroso"
            descricao="Garantimos que cada refeição chegue quente e fresca, preservando a qualidade e o sabor que você adora."
            imagem="/images/site/vegetais-fresco.png"
          />
        </div>
      </div>

      <div className="grid-cols-2 hidden md:grid gap-2 pointer-events-none">
        <img
          src="/images/site/hamburguer.png"
          alt="hamburguer"
          className="w-96 h-96 rounded-full"
        />
        <img
          src="/images/site/carnes.png"
          alt="carne"
          className="w-96 h-96 rounded-full"
        />
        <img
          src="/images/site/pao.png"
          alt="pao"
          className="w-96 h-96 rounded-full"
        />
        <img
          src="/images/site/hamburguer.png"
          alt="hamburguer"
          className="w-96 h-96 rounded-full"
        />
      </div>
    </div>
  );
};
