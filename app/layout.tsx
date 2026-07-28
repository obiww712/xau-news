import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  metadataBase: new URL('https://xau-news-5dm7.vercel.app'),

title: 'XAUNEWS - Gold, Forex & Market News', 
description: 'Latest gold, forex, interest rate and market analysis.',

icons: { icon: '/favicon.ico', apple: '/favicon.ico', },
openGraph: {
  title: 'XAUNEWS - Gold, Forex & Market News',
  description: 'Latest gold, forex, interest rate and market analysis.',
  url: 'https://xau-news-5dm7.vercel.app',
  siteName: 'XAUNEWS',
  images: ['/images/gold.jpg'],
  locale: 'en_US',
  type: 'website',
},
twitter: {
  card: 'summary_large_image',
  title: 'XAUNEWS - Gold, Forex & Market News',
  description: 'Latest gold, forex, interest rate and market analysis.',
  images: ['/images/gold.jpg'],
},
}


export default function RootLayout({

  children,

}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-screen flex flex-col">


        <Navbar />


        <main className="flex-1">

          {children}

        </main>


        <Footer />


      </body>

    </html>

  );

}