import type React from "react"
import type { Metadata, Viewport } from "next"
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1A1A1A",
}

export const metadata: Metadata = {
  title: "Picanha na Brasa - Churrascaria Estudantil | 25 de Outubro",
  description:
    "Venha saborear nossos deliciosos espetinhos no dia 25 de outubro das 9h às 13h. Projeto da Feira Gastronômica do Colégio Talentos em Uberlândia. Espetinhos de Contra Filé, Franbacon e Coração a partir de R$10. Apoie nossa formatura 2025!",
  generator: "v0.app",
  keywords: [
    "churrasco",
    "espetinhos",
    "Uberlândia",
    "Colégio Talentos",
    "feira gastronômica",
    "formatura 2025",
    "picanha na brasa",
  ],
  authors: [{ name: "Turma 9º Ano - Colégio Talentos" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://picanha-na-brasa.vercel.app",
    siteName: "Picanha na Brasa",
    title: "Picanha na Brasa - Churrascaria Estudantil | 25 de Outubro",
    description:
      "Deliciosos espetinhos preparados pela turma do Colégio Talentos. Venha nos visitar dia 25 de outubro das 9h às 13h na Av. Constelação, 1175. Apoie nossa formatura 2025!",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Picanha%20na%20Brasa-uA5Q6GNzrhnE7oiyTvb38b76cPwWHG.jpg",
        width: 1200,
        height: 630,
        alt: "Picanha na Brasa - Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Picanha na Brasa - Churrascaria Estudantil",
    description:
      "Espetinhos deliciosos no dia 25 de outubro! Projeto estudantil do Colégio Talentos. Apoie nossa formatura 2025!",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Picanha%20na%20Brasa-uA5Q6GNzrhnE7oiyTvb38b76cPwWHG.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
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
