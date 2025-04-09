"use client";

import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 text-xl">
      <img src="/images/site/logo/logo.png" className="w-20" />
      <div className="md:flex items-center gap-1 hidden">
        Meu <p className="font-bold">Restaurante</p>
      </div>
    </Link>
  );
};
