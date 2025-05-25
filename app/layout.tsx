import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased w-screen h-full overflow-x-hidden`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
          
            <Navbar />
          <NextTopLoader showSpinner={false} color="green" />
          <div className="border-2 border-red-400">
            {children}
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
