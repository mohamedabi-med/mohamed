import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../pages/navbar";
import Footer from "../pages/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WorldWeb Solutions",
  description: "Where The World is Yours",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >

      <body className={inter.className}>  
      <Header/>
      {children}
      <Footer/></body>
      
    </html>
  );
}
