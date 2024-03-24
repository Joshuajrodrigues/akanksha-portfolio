import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/footer";

const imbPlexSans = IBM_Plex_Sans({
  weight: ["400", "100", "500"],
  subsets: ["latin"]
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
      <body className={imbPlexSans.className + " " + " dark:text-white dark:bg-blue-950 bg-lighBg text-lighTextPrimary "}>

        {children}

      </body>
    </html>
  );
}
