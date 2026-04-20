import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Main/Sidebar";
import Navbar from "@/components/Main/Navbar";
import Footer from "@/components/Main/Footer";
import MobileTabbar from "@/components/Main/BottomBar";
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
  title: "Advertising LED Display Manufacturer| Newtech Video Systems",
  description: "Newtech Video Systems Pvt. Ltd. is a leading manufacturer of advertising LED displays, outdoor LED screens, commercial LED video walls & industrial LED display systems for high-impact visual communication solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-gray-100 min-h-screen flex overflow-x-hidden">
        <Sidebar className="hidden md:block" />

        <div className="flex flex-col flex-1 w-full max-w-full">
          <Navbar />

          <main className="flex-1 w-full">
            {children}
          </main>
          <Toaster position="top-center" />
          <Footer />
        </div>

        <MobileTabbar />
      </body>
    </html>
  );
}
