import Link from "next/link"

const CHILI = "https://raw.githubusercontent.com/Benja301205/Encuesta-Picanthon-2-/main/public/chili.png"

const data = {
  num: "02",
  tag: "Segunda Edición",
  flag: "🇺🇾",
  date: "29 de octubre 2025",
  location: "Montevideo, Uruguay",
  responses: 18,
  nps: 4.56,
  pct_pos: 86.1,
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
  painPoints: [
    {
      cat: "Duración del evento (24hs)",
      menciones: 7,
      severidad: "Alta",
      problema: "Las 24 horas continuas son percibidas como excesivamente largas. Fatiga física y mental que reduce la productividad especialmente durante la madrugada.",
      impacto: "Fatiga extrema, desaprovechamiento de horas nocturnas, posibles barreras de participación para futuros asistentes.",
      comentario: "Se hizo un poco larga, más hoy en día que se hace una app entera en la mitad del tiempo.",
    },
    {
      cat: "Duración del Pitch",
      menciones: 6,
      severidad: "Media-Alta",
      problema: "Los 2 minutos asignados al pitch son insuficientes para comunicar 24 horas de trabajo. Solicitud frecuente de extenderlo a 3 minutos.",
      impacto: "Frustración en la etapa final, sensación de injusticia en la evaluación, desaprovechamiento del trabajo realizado.",
      comentario: "El pitch fue muy corto, entiendo el fin, pero con 30s más creo que es clave.",
    },
    {
      cat: "Transparencia y Feedback de Jueces",
      menciones: 3,
      severidad: "Media-Alta",
      problema: "Los participantes no reciben retroalimentación estructurada post-evaluación. Los criterios de evaluación son poco claros antes del evento.",
      impacto: "Frustración en equipos no ganadores, pérdida del valor educativo, sensación de proceso arbitrario.",
      comentario: "Me gustaría tener devolución de los jueces, para poder entender qué se hizo bien y mal (aunque sea escrito).",
    },
    {
      cat: "Mobiliario y Ergonomía",
      menciones: 3,
      severidad: "Media",
      problema: "Sillas inadecuadas para una jornada de 24 horas. Falta de espacios cómodos para descanso y recuperación durante el evento.",
      impacto: "Incomodidad física progresiva que afecta la productividad y el bienestar.",
      comentario: "Las sillas no eran lo mejor para estar trabajando 24 horas, y buscaría quizás un lugar con más sillones para dormir.",
    },
    {
      cat: "Mentores Nocturnos (4–7 AM)",
      menciones: 3,
      severidad: "Media",
      problema: "Brecha de disponibilidad de mentores entre las 4 y las 7 AM. Equipos que trabajan en ese rango quedan sin soporte.",
      impacto: "Genera inequidad en el acceso a mentorería según el horario de trabajo de cada equipo.",
      comentario: "Entre las 4 y las 7 de la mañana no había prácticamente ningún mentor para ayudarnos.",
    },
  ],
  // Completar con los comentarios finales cuando estén disponibles
  comentarios: [
    { cat: "Mentores", texto: "El intercambio con mentores, conocer gente picante es la herramienta más importante que ofrecieron. La predisposición de TODOS los que estaban ahí fue excelente." },
    { cat: "Organización", texto: "Lo que más me gustó es que se nota que dejan el corazón en la organización y en que salga todo bien. Hace que estar ahí se sienta muy bien." },
    { cat: "Mentores", texto: "Me encantó el ida y vuelta con mentores, en nuestro caso puntual, sin ellos, no llegábamos a un producto tan bueno." },
    { cat: "Duración", texto: "Es demasiado larga y no tiene tanto sentido pudiendo vibecodear todo. Arrancamos a las 6AM para llegar a PDE y tener que pasar toda la noche sin dormir." },
  ],
}

function metricClass(v: number) {
  if (v >= 4.5) return "great"
  if (v >= 3.8) return "good"
  return "low"
}

export default function Edicion2() {
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
          <Link href="/picanthon/edicion-2" className="active">Ed02</Link>
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
              Picanthon<br /><em>Uruguay</em>
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
                <span className="nv" style={{ fontSize: "15px", paddingTop: "6px" }}>Oct 2025</span>
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
          <span className="sn">Ed02</span>
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
          <span>Ed02 · {data.date}</span>
        </div>
      </div>
    </>
  )
}
