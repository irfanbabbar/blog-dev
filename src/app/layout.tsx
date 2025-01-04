import type { Metadata } from "next";
import Footer from "./component/footer";
import "./globals.css";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })




  


export const metadata: Metadata = {
  title: "Irfan BlogDev",
  description: "This is a blog website for Innovation in Technology",
  icons: {
    icon: "/humo.png",  
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} antialiased`}
      > 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
