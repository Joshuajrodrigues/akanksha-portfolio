import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });
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
