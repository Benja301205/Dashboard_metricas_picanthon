'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Topbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <header className="topbar">
        <Link href="/" className="brand">
          <img
            src="https://raw.githubusercontent.com/Benja301205/Encuesta-Picanthon-2-/main/public/chili.png"
            alt=""
            aria-hidden
            className="brand-mark-png"
            draggable={false}
          />
          <span className="brand-name">Picanthon</span>
        </Link>
        <div />
        <button className="hamburger" onClick={() => setOpen(true)} aria-label="Abrir ediciones">
          <span /><span /><span />
        </button>
      </header>

      {open && <div className="sidebar-overlay" onClick={close} />}

      <div className={`sidebar${open ? ' sidebar-open' : ''}`}>
        <button className="sidebar-close" onClick={close}>✕</button>
        <p className="sidebar-label">Ediciones</p>
        <nav className="sidebar-nav">
          <Link
            href="/picanthon/edicion-1"
            className={active === 'ed1' ? 'active' : ''}
            onClick={close}
          >
            <span className="sn-num">01</span>
            <span className="sn-lbl">Argentina 🇦🇷</span>
          </Link>
          <Link
            href="/picanthon/edicion-2"
            className={active === 'ed2' ? 'active' : ''}
            onClick={close}
          >
            <span className="sn-num">02</span>
            <span className="sn-lbl">Uruguay 🇺🇾</span>
          </Link>
          <Link
            href="/picanthon/edicion-3"
            className={active === 'ed3' ? 'active' : ''}
            onClick={close}
          >
            <span className="sn-num">03</span>
            <span className="sn-lbl">Argentina 🇦🇷</span>
          </Link>
        </nav>
        <Link href="/" className="sidebar-home" onClick={close}>← Dashboard</Link>
      </div>
    </>
  )
}
