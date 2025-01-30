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
          Explore Our Delicious
        </h1>
        <h1 className="md:text-5xl text-3xl font-bold text-red-700">
          Menu Selections
        </h1>
      </div>
      <p className="text-center pb-3">
        At our restaurant, we offer a variety of services to cater to your
        dining preferences. Whether you prefer to dine-in,<br></br> takeout, or
        have your food delivered, we have you covered.
      </p>
      <Separator />
      <div className="grid md:grid-cols-3 grid-cols-1 py-5 md:px-44 px-5 gap-5">
        <Card className="p-5 gap-5 flex flex-col items-center hover:scale-105 transition-all">
          <img
            src="/images/destaque/dest1.png"
            alt="food"
            className="object-cover"
          />
          <h1 className="text-3xl font-bold text-center">Vegetable Steaks</h1>
          <p className="text-center">
            Our vegetable steak is a hearty blend of<br></br> grilled veggies,
            seasoned to perfection and<br></br> served with a savory sauce.
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
          <h1 className="text-3xl font-bold text-center">Fried Potatoes</h1>
          <p className="text-center">
            Our Crispy and golden, our fried potatoes<br></br> are a perfect
            blend of crunch and flavor.
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
          <h1 className="text-3xl font-bold text-center">Hamburger Delux</h1>
          <p className="text-center">
            Our Juicy and savory, our hamburger<br></br> features a perfectly
            grilled patty topped<br></br> with fresh ingredients.
          </p>
          <Button>
            <Link href="/pedido">Fazer Pedido</Link>
          </Button>
        </Card>
      </div>
    </div>
  );
};
