"use-client";

import "./globals.css";
import {Navbar} from "@/components/Navbar";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";


export const metadata: Metadata = {
  title: "TO-Do App",
  description: "A To-Do list app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en" suppressHydrationWarning>
      <body>
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            {children}
          </ThemeProvider>
  
          
      </body>
    </html>
    </>
  );
}

