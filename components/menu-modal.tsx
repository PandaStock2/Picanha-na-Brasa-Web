"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface MenuModalProps {
  isOpen: boolean
  onClose: () => void
}

export function MenuModal({ isOpen, onClose }: MenuModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A1A1A]/98 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#D62828] text-white shadow-2xl transition-all hover:bg-[#F77F00] hover:scale-110 active:scale-95"
        aria-label="Fechar cardápio"
      >
        <X className="h-8 w-8" />
      </button>

      <div
        className="relative max-h-[95vh] max-w-[95vw] overflow-auto p-4 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#D62828] via-[#F77F00] to-[#D62828] rounded-3xl blur-3xl opacity-50" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2D4WBBhZpUum64PV7jm42utQcfaFyt.png"
            alt="Cardápio Completo - Picanha na Brasa"
            width={1200}
            height={800}
            className="relative h-auto w-full rounded-2xl shadow-2xl"
            priority
          />
        </div>
      </div>
    </div>
  )
}
