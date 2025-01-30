import { BannerSite } from "@/components/site/banner";
import { Feedback } from "@/components/site/feedback";
import { Footer } from "@/components/site/footerSite";
import { HeaderSite } from "@/components/site/headerSite";
import { ProdutoDestaque } from "@/components/site/produtoDestaque";
import { QuemSomos } from "@/components/site/quemSomos";

const Page = () => {
  return (
    <div className="w-full h-full">
      <div className="">
        <HeaderSite />
        <BannerSite />
        <ProdutoDestaque />
        <QuemSomos />
        <Feedback />
        <Footer />
      </div>
    </div>
  );
};
export default Page;
