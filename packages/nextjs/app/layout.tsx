import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "~~/styles/globals.css"
import Navigation from "../components/Layout/Navigation"
import Footer from "../components/Layout/Footer"
import { ThemeProvider } from "../components/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gas Aid - Empowering Communities Through Gas Assistance",
  description: "Decentralized gas assistance platform built on Ethereum. Transparent, secure, and accessible to everyone who needs help.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
