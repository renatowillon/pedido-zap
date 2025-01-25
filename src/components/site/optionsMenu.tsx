import Link from "next/link";
import { Button } from "../ui/button";

export const OptionsMenu = () => {
  return (
    <div>
      <Button>
        <Link href="/pedido">Faça seu pedido</Link>
      </Button>
    </div>
  );
};
