import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart-context";
import Navbar from "@/components/navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CeramicLab — Premium Car Care & Ceramic Coating",
  description: "Professionele car care producten voor detailing liefhebbers. Ceramic coating, reinigers, microfiber en complete DIY kits.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-neutral-950 text-white">
        <CartProvider>
          <Navbar />
          <div className="pt-16 flex-1 flex flex-col">{children}</div>
        </CartProvider>
      </body>
    </html>
  );
}
