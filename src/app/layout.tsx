import type { Metadata } from "next";
import { suisseIntl, suisseScreen } from "../fonts";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Bernard Whimp - Professional Stock Picker",
  description:
    "Share market investor and founder of Chance Voight Investment Corporation, Bernard Whimp is redefining the financial landscape with building New Zealand's ASX Hedge Fund",
  keywords:
    "Experienced Investor, Investment Opportunities, Investment Seminar, Wealth Management, Investment, Stocks, Shares, Share Market, Entrepreneur, Chance Voight Investment Partners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`
        ${suisseIntl.black.variable} 
        ${suisseIntl.bold.variable} 
        ${suisseIntl.semiBold.variable}
        ${suisseScreen.light.variable}
        ${suisseScreen.medium.variable}
        ${suisseScreen.regular.variable}
        ${suisseScreen.thin.variable}
      `}
    >
      <body>
        {/* <div > */}
        <Navbar />
        <main className='min-h-screen flex flex-col'>{children}</main>
        {/* </div> */}
      </body>
    </html>
  );
}
