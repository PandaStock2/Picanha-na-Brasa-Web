"use client"

import { Home, UtensilsCrossed, Heart, Phone } from "lucide-react"
import { useEffect, useState } from "react"

export function MobileNav() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A] to-transparent pb-safe">
        <div className="mx-4 mb-4 rounded-2xl border-2 border-[#F77F00]/30 bg-[#0a0a0a]/95 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-4 gap-1 p-2">
            <button
              onClick={() => scrollToSection("home")}
              className="flex flex-col items-center gap-1 rounded-xl p-3 transition-all active:scale-95 hover:bg-[#D62828]/20"
            >
              <Home className="h-6 w-6 text-[#F77F00]" />
              <span className="text-xs font-bold text-white">Início</span>
            </button>

            <button
              onClick={() => scrollToSection("cardapio")}
              className="flex flex-col items-center gap-1 rounded-xl p-3 transition-all active:scale-95 hover:bg-[#D62828]/20"
            >
              <UtensilsCrossed className="h-6 w-6 text-[#F77F00]" />
              <span className="text-xs font-bold text-white">Cardápio</span>
            </button>

            <button
              onClick={() => scrollToSection("pix")}
              className="flex flex-col items-center gap-1 rounded-xl p-3 transition-all active:scale-95 hover:bg-[#D62828]/20"
            >
              <Heart className="h-6 w-6 text-[#F77F00]" />
              <span className="text-xs font-bold text-white">PIX</span>
            </button>

            <button
              onClick={() => scrollToSection("contato")}
              className="flex flex-col items-center gap-1 rounded-xl p-3 transition-all active:scale-95 hover:bg-[#D62828]/20"
            >
              <Phone className="h-6 w-6 text-[#F77F00]" />
              <span className="text-xs font-bold text-white">Contato</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
