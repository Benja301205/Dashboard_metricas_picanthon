import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Alertly - Dashboard Picanthon',
  description: 'Análisis inteligente de feedback con IA - Dashboards de Picanthon 2024 y 2025',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
