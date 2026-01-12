import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Generador de Contenido Viral IA - 30k Seguidores en 1 Mes',
  description: 'Crea imágenes y prompts virales estilo cyberpunk para Instagram. Genera contenido de herramientas de IA que detiene el scroll.',
  keywords: 'IA, Instagram, viral, cyberpunk, prompts, Midjourney, DALL-E, contenido viral',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="bg-cyber-darker text-white antialiased">{children}</body>
    </html>
  )
}
