import type { Metadata } from "next";
import { Playfair_Display,Allerta } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/header";

const playflair = Allerta({
  weight:["400"],
  subsets:["latin"]
})
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
      <body className={playflair.className+" "+" text-blue-100"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
