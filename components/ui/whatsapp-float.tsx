// components/ui/whatsapp-float.tsx
'use client'

import { MessageCircle } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/config/site"

export function WhatsAppFloat() {
  // Construimos la URL de WhatsApp basándonos en la configuración
  const waUrl = `https://wa.me/${siteConfig.whatsapp.phone}?text=${encodeURIComponent(siteConfig.whatsapp.message)}`

  return (
    <Link
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:-translate-y-1 hover:scale-110 hover:bg-green-600 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      
      {/* Indicador de pulso animado con Tailwind */}
      <span className="absolute -right-1 -top-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex h-4 w-4 rounded-full bg-red-500"></span>
      </span>
    </Link>
  )
}