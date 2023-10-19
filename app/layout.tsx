import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "My Landing Page",
  description: "Created by Suhaimi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative flex flex-col text-white bg-slate-50'>
        <video autoPlay muted loop className='fixed h-full w-full object-cover'>
          <source src='Background.mp4' type='video/mp4' />
        </video>
        <div className='relative space-y-8'>
          <Navbar />
          <div className='h-full w-full flex relative'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
