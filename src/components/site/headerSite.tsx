import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";
import { OptionsMenu } from "./optionsMenu";

export const HeaderSite = () => {
  return (
    <header className="flex justify-between items-center px-24 py-5">
      <div className="flex items-center gap-3">
        <Logo />
      </div>
      <div className="flex gap-2 items-center">
        <OptionsMenu />
        <ThemeToggle />
      </div>
    </header>
  );
};
