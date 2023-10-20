import type { Metadata } from "next";
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
      <body className='h-screen flex flex-col text-white bg-slate-50'>
        <video
          autoPlay
          muted
          loop
          className='absolute h-full w-full object-cover z-0'
        >
          <source src='Background.mp4' type='video/mp4' />
        </video>
        <Navbar />
        <div className='relative h-full z-10'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
