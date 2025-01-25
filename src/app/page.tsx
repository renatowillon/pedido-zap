import { BannerSite } from "@/components/site/banner";
import { HeaderSite } from "@/components/site/headerSite";
import { ProdutoDestaque } from "@/components/site/produtoDestaque";

const Page = () => {
  return (
    <div className="">
      <div className="">
        <HeaderSite />
        <BannerSite />
        <ProdutoDestaque />
      </div>
    </div>
  );
};
export default Page;
