import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Canvo - Fix Canvas & Stop Forgetting Assignments",
  description:
    "Canvo pulls your entire Canvas account into a simple task system. Stop forgetting assignments and start getting things done.",
  openGraph: {
    title: "Canvo - Fix Canvas & Stop Forgetting Assignments",
    description: "One app to replace the 10 different systems you're using to track assignments.",
    images: [{ url: "/images/app-icon.png" }],
  },
  icons: {
    icon: [
      { url: "/images/app-icon.png" },
    ],
    apple: [
      { url: "/images/app-icon.png" },
    ],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
