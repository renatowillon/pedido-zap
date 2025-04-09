import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu Restaurante",
  description: "O Melhor restaurante de sua região",
  keywords: [
    "Meu Restaurante",
    "Restaurante",
    "Comida",
    "Delivery",
    "Adquira já!",
  ],
  authors: [{ name: "Renato Willon", url: "https://renatowillon.vercel.app/" }],
  creator: "Renato Willon",
  publisher: "Renato Willon",
  openGraph: {
    title: "Pedido Zap",
    description: "O Melhor restaurante de sua região",
    images: [
      {
        url: "https://pedido-zap.vercel.app/images/site/homePage.png",
        width: 1200,
        height: 630,
        alt: "Home Page Meu Restaurante",
      },
    ],
    url: "https://pedido-zap.vercel.app",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/android-chrome-192x192.png",
  },
  //themeColor: "#ffffff",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased min-h-screen bg-background font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
