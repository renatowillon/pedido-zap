import { BannerSite } from "@/components/site/banner";
import { HeaderSite } from "@/components/site/headerSite";
import { ProdutoDestaque } from "@/components/site/produtoDestaque";

const Page = () => {
  return (
    <div className="w-full h-full">
      <div className="">
        <HeaderSite />
        <BannerSite />
        <ProdutoDestaque />
      </div>
    </div>
  );
};
export default Page;
