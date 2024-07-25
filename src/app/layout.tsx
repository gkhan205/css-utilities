import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CSS Utility Generator",
  description: "CSS Utility Generator by Ghazi Khan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(poppins.className)}>
        <Header />
        <main className="container min-h-screen bg-slate-50 dark:bg-gray-800 pt-5">
          {children}
        </main>
      </body>
    </html>
  );
}
