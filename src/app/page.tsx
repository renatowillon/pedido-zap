import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="p-10">
      <ThemeToggle />
      <Button>Clique Aqui</Button>
    </div>
  );
};
export default Page;
