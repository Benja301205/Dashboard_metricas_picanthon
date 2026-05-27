import Link from 'next/link'

const ED1 = {
  num: '01',
  nombre: 'Picanthon Argentina',
  pais: 'Argentina 🇦🇷',
  ciudad: 'Buenos Aires',
  fecha: '14 de Junio 2025',
  total_respuestas: 29,
  nps: 4.93,
  metricas: [
    { cat: 'Probabilidad de volver (NPS)', promedio: 4.93 },
    { cat: 'Calidad de mentores',          promedio: 4.86 },
    { cat: 'Calidad del lugar',            promedio: 4.72 },
    { cat: 'Consigna y output esperado',   promedio: 4.31 },
    { cat: 'Calidad de la comida',         promedio: 4.21 },
    { cat: 'Decisión de los jueces',       promedio: 4.17 },
    { cat: 'Dinámica del pitch',           promedio: 4.03 },
    { cat: 'MiniGames',                    promedio: 3.17 },
  ],
  pain_points: [
    {
      cat: 'Minigames',
      menciones: 9,
      problema: 'Percibidos como actividades de relleno, sin valor real para los participantes. Baja calidad y desconectados de la dinámica del hackathon.',
      quote: 'Lo que menos me gustaron fueron los minijuegos, siento estaban muy de relleno, quizás unos minigames para que se pueda interactuar con otros participantes sea mejor.',
    },
    {
      cat: 'Lugar — Infraestructura',
      menciones: 7,
      problema: 'Frío en el quincho, falta de espacios diferenciados para trabajo intensivo y descanso, y exclusión de algunos equipos de zonas cómodas.',
      quote: 'Agregaría un lugar que tenga una parte para trabajar de forma más cómoda y otra que sea para estar más chill y descansar si se quiere.',
    },
    {
      cat: 'Conectividad',
      menciones: 5,
      problema: 'Conexión WiFi deficiente e inestable durante el evento. Obstaculizó el desarrollo técnico y el trabajo con APIs externas.',
      quote: 'WiFi inestable dificultó el trabajo con APIs.',
    },
    {
      cat: 'Jueces — Transparencia',
      menciones: 4,
      problema: 'Falta de claridad en los criterios de evaluación y feedback insuficiente post-pitch. Los equipos no supieron en qué mejorar.',
      quote: 'Devolución de los jueces y cómo pensaron la votación. Más feedback de las decisiones post pitch.',
    },
  ],
  quotes: [
    {
      cat: 'Mentores',
      texto: 'Excelente la energía y la buena onda de todos los mentores, la verdad que ayudó a que todo sea una experiencia increíble.',
    },
    {
      cat: 'Minigames',
      texto: 'Lo que menos me gustaron fueron los minijuegos, siento estaban muy de relleno, quizás unos minigames para que se pueda interactuar con otros participantes sea mejor.',
    },
  ],
}

function fmt(n: number) { return n.toFixed(2) }

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
        <Link href="/">Dashboard</Link>
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
      <span>Picanthon · Ed 01 · Argentina · Jun 2025</span>
      <span>{ED1.total_respuestas} respuestas</span>
    </footer>
  )
}

export default function Edicion1Page() {
  return (
    <div className="page-wrap">
      <Topbar active="ed1" />

      <div className="edition-page">
        <Link href="/" className="nav-back">
          ← Volver al dashboard
        </Link>

        {/* Header */}
        <div className="edition-header">
          <h1 className="edition-title">
            Picanthon <em>01</em>
          </h1>
          <div className="edition-meta">
            <div className="meta-line"><b>País</b> {ED1.pais}</div>
            <div className="meta-line"><b>Fecha</b> {ED1.fecha}</div>
            <div className="meta-line"><b>Respuestas</b> {ED1.total_respuestas}</div>
            <div className="meta-line"><b>NPS (volver)</b> {fmt(ED1.nps)}/5</div>
          </div>
        </div>

        {/* NPS */}
        <div className="nps-card" style={{ maxWidth: 320 }}>
          <p className="k">NPS proxy — probabilidad de volver</p>
          <div className="big-num">
            {fmt(ED1.nps)}
            <small>/5</small>
          </div>
          <p className="verdict">Retorno muy alto</p>
          <p className="note">Q1 · escala 1–5 · {ED1.total_respuestas} respuestas</p>
        </div>

        {/* Métricas por categoría */}
        <div className="section-head">
          <h2>Métricas por <em>categoría</em></h2>
          <span className="num">{ED1.metricas.length} dimensiones</span>
        </div>

        <div className="metrics-grid">
          {ED1.metricas.map((m) => (
            <div key={m.cat} className="metric-row">
              <div className="m-head">
                <span className="m-name">{m.cat}</span>
                <span className="m-avg">{fmt(m.promedio)}<small>/5</small></span>
              </div>
              <div className="m-bar">
                <div className="fill" style={{ width: `${(m.promedio / 5) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>

        {/* Pain Points */}
        <div className="section-head">
          <h2>Pain <em>points</em></h2>
          <span className="num">{ED1.pain_points.length} críticos</span>
        </div>

        <div className="pain-grid">
          {ED1.pain_points.map((p) => (
            <div key={p.cat} className="pain-card">
              <div className="pain-top">
                <span className="pain-cat">{p.cat}</span>
                <span className="pain-cnt">{p.menciones} menciones</span>
              </div>
              <p className="pain-text">{p.problema}</p>
              <p className="pain-quote">"{p.quote}"</p>
            </div>
          ))}
        </div>

        {/* Comentarios destacados */}
        <div className="section-head">
          <h2>Comentarios <em>destacados</em></h2>
          <span className="num">{ED1.quotes.length} seleccionados</span>
        </div>

        <div className="quotes">
          {ED1.quotes.map((q, i) => (
            <div key={i} className="quote">
              <span className="mark" aria-hidden>"</span>
              <p className="q-cat">{q.cat}</p>
              <p className="q-text">{q.texto}</p>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  )
}
