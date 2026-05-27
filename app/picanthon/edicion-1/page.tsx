import Link from "next/link"

const CHILI = "https://raw.githubusercontent.com/Benja301205/Encuesta-Picanthon-2-/main/public/chili.png"

const data = {
  num: "01",
  tag: "Primera Edición",
  titleLine2: "Argentina",
  flag: "🇦🇷",
  date: "14 de junio 2025",
  location: "Buenos Aires, Argentina",
  responses: 29,
  nps: 4.93,
  pct_pos: 86.2,
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
  painPoints: [
    {
      cat: "Minijuegos",
      menciones: 9,
      severidad: "Moderada-Alta",
      problema: "Percibidos como actividades de relleno con baja calidad, desaprovechando las oportunidades de networking entre participantes.",
      impacto: "Reducción del engagement y oportunidades perdidas de conexión entre equipos.",
      comentario: "Lo que menos me gustaron fueron los minijuegos, siento estaban muy de relleno, quizás unos minigames para que se pueda interactuar con otros participantes sea mejor.",
    },
    {
      cat: "Lugar — Infraestructura",
      menciones: 7,
      severidad: "Moderada",
      problema: "Frío en el quincho, falta de espacios diferenciados para trabajo técnico y zonas de descanso. Equipos ubicados en sectores separados del venue.",
      impacto: "Incomodidad durante el desarrollo, ambiente no óptimo para trabajo técnico sostenido.",
      comentario: "Agregaría un lugar que tenga una parte para trabajar de forma más cómoda y otra que sea para estar más chill y descansar si se quiere.",
    },
    {
      cat: "Conectividad WiFi",
      menciones: 5,
      severidad: "Alta",
      problema: "Conexión WiFi deficiente e inestable que obstaculizó el trabajo técnico, especialmente con APIs y servicios en la nube.",
      impacto: "Obstaculiza directamente el desarrollo técnico y reduce la productividad de los equipos.",
      comentario: "WiFi inestable dificultó el trabajo con APIs.",
    },
    {
      cat: "Jueces — Transparencia",
      menciones: 4,
      severidad: "Moderada",
      problema: "Falta de claridad en los criterios de evaluación y feedback insuficiente luego del pitch.",
      impacto: "Incertidumbre en los equipos sobre qué mejorar, sensación de proceso arbitrario.",
      comentario: "Devolución de los jueces y cómo pensaron la votación.",
    },
  ],
  // Completar con los comentarios finales cuando estén disponibles
  comentarios: [
    { cat: "Mentores", texto: "Excelente la energía y la buena onda de todos los mentores, la verdad que ayudó a que todo sea una experiencia increíble." },
    { cat: "Lugar", texto: "El lugar estuvo muy bien, cómodo para trabajar." },
    { cat: "Jueces", texto: "Los jueces unos copados como ayudaban al igual que los mentores." },
    { cat: "Minijuegos", texto: "Lo que menos me gustaron fueron los minijuegos, siento estaban muy de relleno." },
  ],
}

function metricClass(v: number) {
  if (v >= 4.5) return "great"
  if (v >= 3.8) return "good"
  return "low"
}

export default function Edicion1() {
  return (
    <>
      <nav className="topbar">
        <Link href="/" className="brand">
          <img src={CHILI} className="brand-mark-png" alt="" />
          <span className="brand-name">Picanthon<sup>Dashboard</sup></span>
        </Link>
        <div />
        <div className="topbar-nav">
          <Link href="/picanthon/edicion-1" className="active">Ed01</Link>
          <Link href="/picanthon/edicion-2">Ed02</Link>
          <Link href="/picanthon/edicion-3">Ed03</Link>
        </div>
      </nav>

      <div className="dash-page">
        <Link href="/" className="back-nav">← Dashboard</Link>

        {/* Hero */}
        <div className="edition-hero">
          <div>
            <span className="edition-tag">{data.tag} · {data.flag} {data.location}</span>
            <h1 className="edition-title">
              Picanthon<br /><em>Argentina</em>
            </h1>
            <p className="edition-sub">{data.date} · {data.responses} respuestas</p>
          </div>

          <div className="nps-card">
            <p className="nps-label">Probabilidad de volver</p>
            <div className="nps-num">{data.nps.toFixed(2)}</div>
            <p className="nps-sub">sobre 5.00</p>
            <div className="nps-breakdown">
              <div className="nps-cell">
                <span className="nv">{data.responses}</span>
                <span className="nl">Respuestas</span>
              </div>
              <div className="nps-cell pos">
                <span className="nv">{data.pct_pos.toFixed(0)}%</span>
                <span className="nl">Satisfacción</span>
              </div>
              <div className="nps-cell">
                <span className="nv" style={{ fontSize: "15px", paddingTop: "6px" }}>Jun 2025</span>
                <span className="nl">Fecha</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="section-head" style={{ marginTop: "0" }}>
          <h2>Métricas por <em>categoría</em></h2>
          <span className="sn">{data.responses} respuestas</span>
        </div>
        <div className="metrics-grid">
          {data.metrics.map((m, i) => (
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
          <span className="sn">{data.painPoints.length} identificados</span>
        </div>
        <div className="pain-list">
          {data.painPoints.map((p, i) => (
            <div key={i} className="pain-item">
              <span className="pain-n">0{i + 1}</span>
              <div className="pain-body">
                <span className="pain-cat">{p.cat}</span>
                <span className="pain-count">{p.menciones} menciones · {p.severidad}</span>
                <p className="pain-prob">{p.problema}</p>
                <p className="pain-impact">{p.impacto}</p>
                <blockquote className="pain-quote">“{p.comentario}”</blockquote>
              </div>
            </div>
          ))}
          <div className="pain-border-bottom" />
        </div>

        {/* Comentarios */}
        <div className="section-head">
          <h2>Comentarios <em>destacados</em></h2>
          <span className="sn">Ed01</span>
        </div>
        <div className="quotes-grid">
          {data.comentarios.map((c, i) => (
            <div key={i} className="quote-card">
              <span className="quote-mark">“</span>
              <p className="quote-cat">{c.cat}</p>
              <p className="quote-text">{c.texto}</p>
            </div>
          ))}
        </div>

        <div className="dash-footer" style={{ marginTop: "72px" }}>
          <Link href="/" className="back-nav" style={{ marginBottom: 0 }}>← Dashboard</Link>
          <span>Ed01 · {data.date}</span>
        </div>
      </div>
    </>
  )
}
