import { Urbanist } from "next/font/google";

import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";

import "./globals.css";
const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Shiply Driver App",
  description: "Driver App for Shiply",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
