import type { Metadata } from "next";
import { Playfair_Display, } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header";

const playflair = Playfair_Display({subsets:["latin"]})
export const metadata: Metadata = {
  title: "Akanksha Gajankar",
  description: "Akanksha Gajankar is a UI/UX professional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={playflair.className+" "+" bg-blue-900 text-blue-100"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
