import type { Metadata } from "next";

import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";



export const metadata: Metadata = {
  title: "AdGrades - Transform Your Digital Presence",
  description: "Creative marketing agency helping startups and businesses build powerful digital strategies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased selection:bg-blue-primary selection:text-white`}>
        <SmoothScroll>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
