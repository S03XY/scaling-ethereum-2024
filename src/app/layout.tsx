import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

import "./globals.css";
import { ReduxProvider } from "@/modules/providers/reduxProvider";
import { WalletProvider } from "@/modules/providers/walletProvider";
import { ToastModule } from "@/modules/toastModule";

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "Adlink",
  description: "Adlink Cooperation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin_sans.variable} mx-auto shadow-lg fixed h-[100vh] left-0 right-0 font-josefin-sans`}
      >
        <ReduxProvider>
          <WalletProvider>{children}</WalletProvider>
          <ToastModule />
        </ReduxProvider>
      </body>
    </html>
  );
}
