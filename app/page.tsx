import Link from "next/link"

const CHILI = "https://raw.githubusercontent.com/Benja301205/Encuesta-Picanthon-2-/main/public/chili.png"

// Cambiar LATEST_IDX a 2 cuando se carguen los datos de Ed03
const LATEST_IDX = 1

const editions = [
  {
    num: "01",
    slug: "edicion-1",
    tag: "Primera Edición",
    name: "Picanthon Argentina",
    location: "Buenos Aires, Argentina",
    flag: "🇦🇷",
    date: "14 jun 2025",
    responses: 29,
    nps: 4.93,
    pct_pos: 86.2,
    status: "data",
    metrics: [
      { label: "Probabilidad de volver", value: 4.93 },
      { label: "Mentores",              value: 4.86 },
      { label: "Lugar",                 value: 4.72 },
      { label: "Consigna",              value: 4.31 },
      { label: "Comida",                value: 4.21 },
      { label: "Jueces",                value: 4.17 },
      { label: "Pitch",                 value: 4.03 },
      { label: "Minijuegos",            value: 3.17 },
    ],
    topPains: [
      { cat: "Minijuegos", menciones: 9, prob: "Percibidos como actividades de relleno que desaprovechan oportunidades de networking entre participantes." },
      { cat: "Lugar — Infraestructura", menciones: 7, prob: "Frío en el quincho, falta de espacios diferenciados para trabajo y descanso, equipos separados." },
      { cat: "Conectividad WiFi", menciones: 5, prob: "Conexión inestable que obstaculizó el desarrollo técnico y el trabajo con APIs." },
    ],
  },
  {
    num: "02",
    slug: "edicion-2",
    tag: "Segunda Edición",
    name: "Picanthon Uruguay",
    location: "Montevideo, Uruguay",
    flag: "🇺🇾",
    date: "29 oct 2025",
    responses: 18,
    nps: 4.56,
    pct_pos: 86.1,
    status: "data",
    metrics: [
      { label: "Mentores",              value: 4.89 },
      { label: "Probabilidad de volver", value: 4.56 },
      { label: "Consigna",              value: 4.56 },
      { label: "Lugar",                 value: 4.33 },
      { label: "Comida",                value: 4.28 },
      { label: "Pitch",                 value: 4.06 },
      { label: "Minijuegos",            value: 3.94 },
      { label: "Jueces",                value: 3.83 },
    ],
    topPains: [
      { cat: "Duración del evento", menciones: 7, prob: "Las 24 horas continuas son percibidas como excesivamente largas, generando fatiga que reduce la productividad nocturna." },
      { cat: "Duración del pitch", menciones: 6, prob: "2 minutos insuficientes para comunicar 24 horas de trabajo. Solicitud recurrente de 3 minutos." },
      { cat: "Transparencia de jueces", menciones: 3, prob: "Sin retroalimentación estructurada post-evaluación. Criterios de evaluación poco claros." },
    ],
  },
  {
    num: "03",
    slug: "edicion-3",
    tag: "Tercera Edición",
    name: "Picanthon",
    location: "—",
    flag: "🔜",
    date: "2026",
    responses: null,
    nps: null,
    pct_pos: null,
    status: "pending",
    metrics: [],
    topPains: [],
  },
]

const comparativa = [
  { label: "Probabilidad de volver", ed1: 4.93, ed2: 4.56, note: null },
  { label: "Mentores",               ed1: 4.86, ed2: 4.89, note: null },
  { label: "Lugar",                  ed1: 4.72, ed2: 4.33, note: null },
  { label: "Consigna",               ed1: 4.31, ed2: 4.56, note: null },
  { label: "Comida",                 ed1: 4.21, ed2: 4.28, note: null },
  { label: "Pitch",                  ed1: 4.03, ed2: 4.06, note: null },
  { label: "Jueces",                 ed1: 4.17, ed2: 3.83, note: null },
  { label: "Minijuegos",             ed1: 3.17, ed2: 3.94, note: "Ed03 no incluye minijuegos" },
]

function metricClass(v: number) {
  if (v >= 4.5) return "great"
  if (v >= 3.8) return "good"
  return "low"
}

function Delta({ a, b }: { a: number; b: number }) {
  const d = b - a
  if (Math.abs(d) < 0.005) return <span className="d-flat">±0.00</span>
  return <span className={d > 0 ? "d-up" : "d-down"}>{d > 0 ? "+" : ""}{d.toFixed(2)}</span>
}

export default function Home() {
  const latest = editions[LATEST_IDX]

  return (
    <>
      <nav className="topbar">
        <Link href="/" className="brand">
          <img src={CHILI} className="brand-mark-png" alt="" />
          <span className="brand-name">Picanthon<sup>Dashboard</sup></span>
        </Link>
        <div />
        <div className="topbar-nav">
          <Link href="/picanthon/edicion-1">Ed01</Link>
          <Link href="/picanthon/edicion-2">Ed02</Link>
          <Link href="/picanthon/edicion-3">Ed03</Link>
        </div>
      </nav>

      <div className="dash-page">

        {/* Latest edition hero */}
        <div className="edition-hero" style={{ marginTop: "8px" }}>
          <div>
            <span className="edition-tag">Última edición con datos</span>
            <h1 className="edition-title">
              Picanthon<br /><em>{latest.flag} {latest.name.replace("Picanthon ", "")}</em>
            </h1>
            <p className="edition-sub">{latest.date} · {latest.location}</p>
          </div>

          <div className="nps-card">
            <p className="nps-label">Probabilidad de volver</p>
            <div className="nps-num">{latest.nps!.toFixed(2)}</div>
            <p className="nps-sub">sobre 5.00</p>
            <div className="nps-breakdown">
              <div className="nps-cell">
                <span className="nv">{latest.responses}</span>
                <span className="nl">Respuestas</span>
              </div>
              <div className="nps-cell pos">
                <span className="nv">{latest.pct_pos!.toFixed(0)}%</span>
                <span className="nl">Satisfacción</span>
              </div>
              <div className="nps-cell">
                <span className="nv" style={{ fontSize: "15px", paddingTop: "6px" }}>{latest.date}</span>
                <span className="nl">Fecha</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="section-head" style={{ marginTop: "0" }}>
          <h2>Métricas por <em>categoría</em></h2>
          <span className="sn">{latest.tag} · {latest.responses} respuestas</span>
        </div>
        <div className="metrics-grid">
          {latest.metrics.map((m, i) => (
            <div key={i} className="metric-cell">
              <span className="m-label">{m.label}</span>
              <span className={`m-value ${metricClass(m.value)}`}>{m.value.toFixed(2)}</span>
              <span className="m-unit">/ 5.00</span>
              <div className="m-bar">
                <div className="m-bar-fill" style={{ width: `${(m.value / 5) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Pain Points */}
        <div className="section-head">
          <h2>Pain <em>Points</em></h2>
          <span className="sn">{latest.tag}</span>
        </div>
        <div className="pain-list">
          {latest.topPains.map((p, i) => (
            <div key={i} className="pain-item">
              <span className="pain-n">0{i + 1}</span>
              <div className="pain-body">
                <span className="pain-cat">{p.cat}</span>
                <span className="pain-count">{p.menciones} menciones</span>
                <p className="pain-prob">{p.prob}</p>
              </div>
            </div>
          ))}
          <div className="pain-border-bottom" />
        </div>

        {/* Comparativa */}
        <div className="section-head">
          <h2>Comparativa <em>histórica</em></h2>
          <span className="sn">3 ediciones</span>
        </div>
        <div className="comp-wrap">
          <table className="comp-table">
            <thead>
              <tr>
                <th>Métrica</th>
                <th className="tc">Ed01 🇦🇷</th>
                <th className="tc">Ed02 🇺🇾</th>
                <th className="tc">Δ Ed01→02</th>
                <th className="tc">Ed03 🔜</th>
              </tr>
            </thead>
            <tbody>
              {comparativa.map((row, i) => (
                <tr key={i}>
                  <td className="tname">
                    {row.label}
                    {row.note && <span className="tnote">{row.note}</span>}
                  </td>
                  <td className="tval">{row.ed1.toFixed(2)}</td>
                  <td className="tval">{row.ed2.toFixed(2)}</td>
                  <td className="tdelta"><Delta a={row.ed1} b={row.ed2} /></td>
                  <td className="tval tpend">Pendiente</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Edition nav */}
        <div className="section-head">
          <h2>Todas las <em>ediciones</em></h2>
        </div>
        <div className="edition-nav">
          {editions.map((ed, i) => (
            <Link
              key={ed.slug}
              href={`/picanthon/${ed.slug}`}
              className={`ed-card${
                i === LATEST_IDX ? " ed-current" : ""
              }${ed.status === "pending" ? " ed-pending" : ""}`}
            >
              <span className="ed-num">{ed.num}</span>
              <span className="ed-tag">{ed.tag}</span>
              <span className="ed-name">{ed.name} {ed.flag}</span>
              <span className="ed-date">{ed.date}</span>
              {ed.status !== "pending" && <span className="ed-arrow">→</span>}
            </Link>
          ))}
        </div>

        <div className="dash-footer" style={{ marginTop: "64px" }}>
          <span>Picanthon Dashboard</span>
          <span>Última actualización: {latest.date}</span>
        </div>

      </div>
    </>
  )
}
