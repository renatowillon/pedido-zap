import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProduct } from "@/services/product";
import { Product } from "@/types/product";
import { TabsContent } from "@radix-ui/react-tabs";
import { ProductEmpty } from "./empty";
import { ProductItem } from "./item";
type Tab = {
  title: string;
  value: string;
  products: Product[];
};
export const ProductsTab = async () => {
  const products = await getAllProduct();
  const tabs: Tab[] = [
    {
      title: "Sushi",
      value: "sushi",
      products: products.filter((item) => item.category === "sushi"),
    },
    {
      title: "Hambúrguer",
      value: "hamburguer",
      products: products.filter((item) => item.category === "hamburguer"),
    },
    {
      title: "Pizza",
      value: "pizza",
      products: products.filter((item) => item.category === "pizza"),
    },
    {
      title: "Pastel",
      value: "pastel",
      products: products.filter((item) => item.category === "pastel"),
    },
    {
      title: "Bebidas",
      value: "bebidas",
      products: products.filter((item) => item.category === "bebidas"),
    },
    {
      title: "Sanduíches",
      value: "sanduiches",
      products: products.filter((item) => item.category === "sanduiches"),
    },
    {
      title: "Saladas",
      value: "salada",
      products: products.filter((item) => item.category === "salada"),
    },
    // {
    //   title: "Promoções",
    //   value: "promocoes",
    //   products: products.filter((item) => item.category === "promocoes"),
    // },
    // {
    //   title: "Mais Pedidos",
    //   value: "mais_pedidos",
    //   products: products.filter((item) => item.category === "mais_pedidos"),
    // },
  ];
  return (
    <Tabs defaultValue="sushi" className="w-full">
      <div className="w-full h-[50px] top-0 z-10">
        <div className="w-full flex items-start cursor-grab">
          <TabsList className="w-full overflow-x-scroll h-[50px] scrollbar-hide">
            {tabs.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                className="flex-1 space-x-4 px-4 min-w-max"
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
      </div>

      {tabs.map((item) => (
        <TabsContent value={item.value} key={item.value} className="mt-6">
          {item.products.length > 0 && (
            <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {item.products.map((products) => (
                <ProductItem key={products.id} item={products} />
              ))}
            </div>
          )}
          {item.products.length == 0 && <ProductEmpty />}
        </TabsContent>
      ))}
    </Tabs>
  );
};
