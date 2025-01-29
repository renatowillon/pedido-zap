"use client";

import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex  gap-3 text-xl">
      Pedido <p className="font-bold">ZAP</p>
    </Link>
  );
};
