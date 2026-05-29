import Link from 'next/link'
import Topbar from '@/app/components/Topbar'

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
  },
  {
    num: '02',
    nombre: 'Picanthon Uruguay',
    pais: 'Uruguay 🇺🇾',
    fecha: '18 Oct 2025',
    total_respuestas: 18,
    nps: 4.56,
    slug: 'edicion-2',
    current: false,
    pending: false,
  },
  {
    num: '03',
    nombre: 'Picanthon Argentina',
    pais: 'Argentina 🇦🇷',
    fecha: '28 May 2026',
    total_respuestas: 10,
    nps: 4.80,
    slug: 'edicion-3',
    current: true,
    pending: false,
  },
]

const ULTIMA = EDITIONS[2]

const METRICAS_COMP = [
  { key: 'nps',       label: 'Probabilidad de volver (NPS)', ed1: 4.93, ed2: 4.56, ed3: 4.80 },
  { key: 'mentores',  label: 'Calidad de mentores',          ed1: 4.86, ed2: 4.89, ed3: 4.90 },
  { key: 'lugar',     label: 'Calidad del lugar',            ed1: 4.72, ed2: 4.33, ed3: 4.20 },
  { key: 'consigna',  label: 'Consigna y output esperado',   ed1: 4.31, ed2: 4.56, ed3: 4.00 },
  { key: 'comida',    label: 'Calidad de la comida',         ed1: 4.21, ed2: 4.28, ed3: 4.40 },
  { key: 'pitch',     label: 'Dinámica del pitch / presentación', ed1: 4.03, ed2: 4.06, ed3: 3.90 },
  { key: 'jueces',    label: 'Decisión de los jueces',       ed1: 4.17, ed2: 3.83, ed3: 4.40 },
  { key: 'minigames', label: 'MiniGames',                   ed1: 3.17, ed2: 3.94, ed3: null },
]

function fmt(n: number) { return n.toFixed(2) }
function delta(a: number, b: number) {
  const d = b - a
  const sign = d > 0 ? '+' : ''
  return { text: `${sign}${d.toFixed(2)}`, up: d > 0 }
}

function Footer() {
  return (
    <footer className="footer">
      <span>Picanthon · Métricas internas · 2025–2026</span>
      <span>3 ediciones · {29 + 18 + 10} respuestas totales</span>
    </footer>
  )
}

export default function HomePage() {
  const heroMetrics = [
    { label: 'Mentores',       val: 4.90 },
    { label: 'Comida',         val: 4.40 },
    { label: 'Jueces',         val: 4.40 },
    { label: 'Lugar',          val: 4.20 },
    { label: 'Presentación',   val: 3.90 },
    { label: 'Consigna',       val: 4.00 },
  ]

  return (
    <div className="page-wrap">
      <Topbar active="home" />

      <div className="dash-page">
        <div className="dash-rail">
          <span className="rail-txt">Dashboard · Organizadores · Picanthon</span>
          <span className="rail-txt">2025 – 2026</span>
        </div>

        <section className="last-edition-hero">
          <div className="last-edition-eyebrow">
            <span className="dot" />
            <span className="txt">.Última edición con datos</span>
          </div>
          <h1 className="last-edition-title">Picanthon <em>03</em></h1>
          <p className="last-edition-sub">
            Argentina 🇦🇷 · 28 May 2026 · {ULTIMA.total_respuestas} respuestas
          </p>

          <div className="last-edition-grid">
            <div className="nps-card">
              <p className="k">NPS proxy — probabilidad de volver</p>
              <div className="big-num">{fmt(ULTIMA.nps!)}<small>/5</small></div>
              <p className="verdict">Retorno muy alto</p>
              <p className="note">Escala 1–5 · pregunta Q1</p>
              <p className="resp-count">Respuestas: <b>{ULTIMA.total_respuestas}</b></p>
            </div>

            <div className="hero-metrics">
              {heroMetrics.map((m) => (
                <div key={m.label} className="hero-metric-row">
                  <span className="cat">{m.label}</span>
                  <div className="bar-col">
                    <div className="hero-bar">
                      <div className="fill" style={{ width: `${(m.val / 5) * 100}%` }} />
                    </div>
                  </div>
                  <span className="val">{fmt(m.val)}<small>/5</small></span>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  <th>Ed 03 🇦🇷</th>
                  <th>Δ 02→03</th>
                </tr>
              </thead>
              <tbody>
                {METRICAS_COMP.map((m) => {
                  const isMinigames = m.key === 'minigames'
                  const d = !isMinigames ? delta(m.ed2, m.ed3!) : null
                  return (
                    <tr key={m.key}>
                      <td className="m-name">{m.label}</td>
                      <td className="m-val">{fmt(m.ed1)}</td>
                      <td className="m-val">{fmt(m.ed2)}</td>
                      <td className={`m-val ${isMinigames ? 'na' : ''}`}>
                        {isMinigames ? 'N/A · sin minigames' : fmt(m.ed3!)}
                      </td>
                      <td className={`delta ${isMinigames ? 'delta-na' : d!.up ? 'delta-up' : 'delta-down'}`}>
                        {isMinigames ? '—' : d!.text}
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
                {ed.current ? '● Última con datos' : 'Edición'}
              </span>
              <span className="ed-num">{ed.num}</span>
              <span className="ed-name">{ed.nombre}</span>
              <span className="ed-date">{ed.pais} · {ed.fecha}</span>
              <div className="ed-nps-row">
                <span className="ed-nps-val">
                  {fmt(ed.nps!)}
                  <small style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-faint)', marginLeft: 4 }}>/5</small>
                </span>
                <span className="ed-nps-lbl">NPS</span>
              </div>
            </Link>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  )
}
