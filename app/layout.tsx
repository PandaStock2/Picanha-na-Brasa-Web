import type React from "react"
import type { Metadata } from "next"
import { Poppins, Bebas_Neue } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
})

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Picanha na Brasa - Churrascaria Estudantil",
  description:
    "Venha saborear nossos deliciosos espetinhos no dia 25 de outubro. Projeto da Feira Gastronômica do Colégio Talentos.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
