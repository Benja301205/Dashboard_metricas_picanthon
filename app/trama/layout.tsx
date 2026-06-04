import type { ReactNode } from 'react'

export const metadata = {
  title: 'BootCamp Emprendedores · Trama ITBA',
}

export default function TramaLayout({ children }: { children: ReactNode }) {
  return <div className="trama-theme">{children}</div>
}
