import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllProduct } from "@/services/product";
import { TabsContent } from "@radix-ui/react-tabs";

export const ProductsTab = async () => {
  const products = await getAllProduct();

  return (
    <Tabs defaultValue="tab1">
      <TabsList className="flex">
        <TabsTrigger value="tab1" className="flex-1">
          TAB 1
        </TabsTrigger>
        <TabsTrigger value="tab2" className="flex-1">
          TAB 2
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="mt-6">
        Conteúdo Tab 1
      </TabsContent>
      <TabsContent value="tab2" className="mt-6">
        Conteúdo Tab 2
      </TabsContent>
    </Tabs>
  );
};
