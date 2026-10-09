import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/Main/Sidebar";
import Navbar from "@/components/Main/Navbar";
import MobileTabbar from "@/components/Main/BottomBar";
import StickyButton from "@/components/Main/StickyButtons";
import LayoutFooter from "@/components/Main/LayoutFooter";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "No. #1 Trusted Advertising LED Display Supplier in India | Newtech Video Systems",
  description:
    "Newtech is a trusted Indoor Advertising LED Display Supplier in India, offering Outdoor Advertising LED Display Screens in Delhi, LED Displays, LED Video Wall Supplier in India, etc",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://nvsledindia.com/"></link>
      </head>

      <body className="bg-gray-100 min-h-screen flex overflow-x-hidden">
        {/* <Sidebar className="hidden md:block shrink-0" /> */}

        <div className="flex flex-col flex-1 min-w-0 w-full">
          <Navbar />

          <main className="flex-1 w-full min-w-0">
            {children}
            <StickyButton />
          </main>

          <Toaster position="top-center" />

          <LayoutFooter />
        </div>

        <MobileTabbar />
      </body>
    </html>
  );
}