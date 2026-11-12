import { Raleway } from "next/font/google"
import type { Metadata } from "next";

import "./globals.css"

const fontRaleway = Raleway({
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Fern's Silly Site",
  description: "Welcome to Fern's Silly Website!",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={fontRaleway.className}
    >
      <body>
        {children}
      </body>
    </html>
  )
}
