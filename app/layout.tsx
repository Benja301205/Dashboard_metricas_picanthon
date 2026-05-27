import type { Metadata } from 'next'
import { Instrument_Serif, Space_Grotesk, JetBrains_Mono, Bebas_Neue } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-condensed',
})

export const metadata: Metadata = {
  title: 'Picanthon — Dashboard de Métricas',
  description: 'Dashboard interno de métricas para organizadores de la Picanthon',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${
        instrumentSerif.variable
      } ${
        spaceGrotesk.variable
      } ${
        jetbrainsMono.variable
      } ${
        bebasNeue.variable
      }`}
    >
      <body>{children}</body>
    </html>
  )
}
