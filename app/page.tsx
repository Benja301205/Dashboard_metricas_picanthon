import Link from 'next/link'

// ─── Datos comparativa ────────────────────────────────────────────────────────

const EDITIONS = [
  {
    num: '01',
    nombre: 'Picanthon Argentina',
    pais: 'Argentina 🇦🇷',
    fecha: '14 Jun 2025',
    total_respuestas: 29,
    nps: 4.93,
    slug: 'edicion-1',
    current: false,
    pending: false,
    metricas: {
      mentores: 4.86,
      lugar: 4.72,
      consigna: 4.31,
      comida: 4.21,
      jueces: 4.17,
      pitch: 4.03,
      minigames: 3.17,
    },
  },
  {
    num: '02',
    nombre: 'Picanthon Uruguay',
    pais: 'Uruguay 🇺🇾',
    fecha: '18 Oct 2025',
    total_respuestas: 18,
    nps: 4.56,
    slug: 'edicion-2',
    current: true,
    pending: false,
    metricas: {
      mentores: 4.89,
      lugar: 4.33,
      consigna: 4.56,
      comida: 4.28,
      jueces: 3.83,
      pitch: 4.06,
      minigames: 3.94,
    },
  },
  {
    num: '03',
    nombre: 'Picanthon 03',
    pais: '—',
    fecha: 'Mayo 2026',
    total_respuestas: null,
    nps: null,
    slug: 'edicion-3',
    current: false,
    pending: true,
    metricas: {
      mentores: null,
      lugar: null,
      consigna: null,
      comida: null,
      jueces: null,
      pitch: null,
      minigames: null,
    },
  },
]

const ULTIMA = EDITIONS[1] // Ed02 es la última con datos

const METRICAS_COMP = [
  { key: 'nps',       label: 'Probabilidad de volver (NPS)',  ed1: 4.93, ed2: 4.56 },
  { key: 'mentores',  label: 'Calidad de mentores',           ed1: 4.86, ed2: 4.89 },
  { key: 'lugar',     label: 'Calidad del lugar',             ed1: 4.72, ed2: 4.33 },
  { key: 'consigna',  label: 'Consigna y output esperado',    ed1: 4.31, ed2: 4.56 },
  { key: 'comida',    label: 'Calidad de la comida',          ed1: 4.21, ed2: 4.28 },
  { key: 'pitch',     label: 'Dinámica del pitch',            ed1: 4.03, ed2: 4.06 },
  { key: 'jueces',    label: 'Decisión de los jueces',        ed1: 4.17, ed2: 3.83 },
  { key: 'minigames', label: 'MiniGames',                    ed1: 3.17, ed2: 3.94 },
]

function fmt(n: number) { return n.toFixed(2) }
function delta(a: number, b: number) {
  const d = b - a
  const sign = d > 0 ? '+' : ''
  return { text: `${sign}${d.toFixed(2)}`, up: d > 0 }
}

function Topbar({ active }: { active: string }) {
  return (
    <header className="topbar">
      <a href="/" className="brand">
        <img
          src="https://raw.githubusercontent.com/Benja301205/Encuesta-Picanthon-2-/main/public/chili.png"
          alt=""
          aria-hidden
          className="brand-mark-png"
          draggable={false}
        />
        <span className="brand-name">Picanthon</span>
      </a>
      <nav className="nav">
        <Link href="/" className={active === 'home' ? 'active' : ''}>Dashboard</Link>
        <Link href="/picanthon/edicion-1" className={active === 'ed1' ? 'active' : ''}>Ed 01</Link>
        <Link href="/picanthon/edicion-2" className={active === 'ed2' ? 'active' : ''}>Ed 02</Link>
        <Link href="/picanthon/edicion-3" className={`${active === 'ed3' ? 'active' : ''} pending`}>Ed 03</Link>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <span>Picanthon · Métricas internas · 2025–2026</span>
      <span>3 ediciones · {29 + 18} respuestas totales</span>
    </footer>
  )
}

export default function HomePage() {
  const heroMetrics = [
    { label: 'Mentores',     val: ULTIMA.metricas.mentores! },
    { label: 'Lugar',        val: ULTIMA.metricas.lugar! },
    { label: 'Consigna',     val: ULTIMA.metricas.consigna! },
    { label: 'Comida',       val: ULTIMA.metricas.comida! },
    { label: 'Pitch',        val: ULTIMA.metricas.pitch! },
    { label: 'Jueces',       val: ULTIMA.metricas.jueces! },
    { label: 'MiniGames',    val: ULTIMA.metricas.minigames! },
  ]

  return (
    <div className="page-wrap">
      <Topbar active="home" />

      <div className="dash-page">

        {/* Rail */}
        <div className="dash-rail">
          <span className="rail-txt">Dashboard · Organizadores · Picanthon</span>
          <span className="rail-txt">2025 – 2026</span>
        </div>

        {/* ── ÚLTIMA EDICIÓN HERO ───────────────────────────────────── */}
        <section className="last-edition-hero">
          <div className="last-edition-eyebrow">
            <span className="dot" />
            <span className="txt">Última edición con datos</span>
          </div>

          <h1 className="last-edition-title">
            Picanthon <em>02</em>
          </h1>
          <p className="last-edition-sub">
            Uruguay 🇺🇾 · 18 Oct 2025 · {ULTIMA.total_respuestas} respuestas
          </p>

          <div className="last-edition-grid">
            {/* NPS Card */}
            <div className="nps-card">
              <p className="k">NPS proxy — probabilidad de volver</p>
              <div className="big-num">
                {fmt(ULTIMA.nps!)}
                <small>/5</small>
              </div>
              <p className="verdict">Retorno probable</p>
              <p className="note">Escala 1–5 · pregunta Q1</p>
              <p className="resp-count">
                Respuestas: <b>{ULTIMA.total_respuestas}</b>
              </p>
            </div>

            {/* Metrics mini-list */}
            <div className="hero-metrics">
              {heroMetrics.map((m) => (
                <div key={m.label} className="hero-metric-row">
                  <span className="cat">{m.label}</span>
                  <div className="bar-col">
                    <div className="hero-bar">
                      <div className="fill" style={{ width: `${(m.val / 5) * 100}%` }} />
                    </div>
                  </div>
                  <span className="val">
                    {fmt(m.val)}<small>/5</small>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── COMPARATIVA ──────────────────────────────────────────── */}
        <section>
          <div className="section-head">
            <h2>Comparativa <em>ediciones</em></h2>
            <span className="num">Ed 01 · Ed 02 · Ed 03</span>
          </div>

          <div className="comp-wrap">
            <table className="comp-table">
              <thead>
                <tr>
                  <th>Métrica</th>
                  <th>Ed 01 🇦🇷</th>
                  <th>Ed 02 🇺🇾</th>
                  <th>Δ 01→02</th>
                  <th>Ed 03</th>
                </tr>
              </thead>
              <tbody>
                {METRICAS_COMP.map((m) => {
                  const d = delta(m.ed1, m.ed2)
                  const isMinigames = m.key === 'minigames'
                  return (
                    <tr key={m.key}>
                      <td className="m-name">{m.label}</td>
                      <td className="m-val">{fmt(m.ed1)}</td>
                      <td className="m-val">{fmt(m.ed2)}</td>
                      <td className={`delta ${d.up ? 'delta-up' : 'delta-down'}`}>
                        {d.text}
                      </td>
                      <td className={`m-val ${isMinigames ? 'na' : 'pending'}`}>
                        {isMinigames ? 'N/A · sin minigames' : '—'}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="comp-note">
            ⚠ Ed 03 — No se realizaron MiniGames en esta edición. La métrica queda excluida de la comparativa.
          </div>
        </section>

        {/* ── NAVEGACIÓN POR EDICIÓN ───────────────────────────────── */}
        <div className="section-head" style={{ marginTop: 72 }}>
          <h2>Ver <em>edición</em></h2>
          <span className="num">Zoom por edición</span>
        </div>

        <div className="edition-cards">
          {EDITIONS.map((ed) => (
            <Link
              key={ed.num}
              href={`/picanthon/${ed.slug}`}
              className={`edition-card ${ed.current ? 'current' : ''} ${ed.pending ? 'pending' : ''}`}
            >
              <span className="arrow">→</span>
              <span className="ed-eyebrow">
                {ed.current ? '● Última con datos' : ed.pending ? '○ Pendiente' : 'Edición'}
              </span>
              <span className="ed-num">{ed.num}</span>
              <span className="ed-name">{ed.nombre}</span>
              <span className="ed-date">{ed.pais} · {ed.fecha}</span>
              <div className="ed-nps-row">
                {ed.nps !== null ? (
                  <>
                    <span className="ed-nps-val">{fmt(ed.nps)}<small style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)', marginLeft: 4 }}>/5</small></span>
                    <span className="ed-nps-lbl">NPS</span>
                  </>
                ) : (
                  <span className="ed-nps-val">Datos pendientes</span>
                )}
              </div>
            </Link>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  )
}
