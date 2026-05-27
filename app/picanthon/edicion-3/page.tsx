import Link from "next/link"

const CHILI = "https://raw.githubusercontent.com/Benja301205/Encuesta-Picanthon-2-/main/public/chili.png"

// =============================================================
// EDICIÓN 03 — DATOS PENDIENTES DE CARGA
// Actualizar este objeto con los datos reales luego del evento.
// Nota: esta edición NO incluye minijuegos.
// =============================================================
const data = {
  num: "03",
  tag: "Tercera Edición",
  flag: "—",         // reemplazar con el flag del país
  date: "2026",        // reemplazar con la fecha real
  location: "—",     // reemplazar con el lugar
  responses: null as number | null,
  nps: null as number | null,
  pct_pos: null as number | null,
  // Cargar cuando estén disponibles los datos
  metrics: [] as Array<{ label: string; value: number }>,
  painPoints: [] as Array<{
    cat: string
    menciones: number
    severidad: string
    problema: string
    impacto: string
    comentario: string
  }>,
  comentarios: [] as Array<{ cat: string; texto: string }>,
  notas: [
    "Esta edición no incluye minijuegos — las comparativas se ajustan en consecuencia.",
  ],
}

export default function Edicion3() {
  const hasData = data.responses !== null

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
          <Link href="/picanthon/edicion-3" className="active">Ed03</Link>
        </div>
      </nav>

      <div className="dash-page">
        <Link href="/" className="back-nav">← Dashboard</Link>

        {/* Hero */}
        <div className="edition-hero">
          <div>
            <span className="edition-tag pending">{data.tag} · Datos pendientes</span>
            <h1 className="edition-title">
              Picanthon<br />
              <em style={{ color: "var(--ink-faint)" }}>03</em>
            </h1>
            <p className="edition-sub" style={{ color: "var(--ink-faint)" }}>
              {data.date} · Datos disponibles luego del evento
            </p>
          </div>

          {/* NPS Card — pendiente */}
          <div className="nps-card" style={{ opacity: 0.45 }}>
            <p className="nps-label">Probabilidad de volver</p>
            <div className="nps-num" style={{ color: "var(--ink-faint)", fontSize: "clamp(60px, 10vw, 110px)" }}>—</div>
            <p className="nps-sub">Pendiente de carga</p>
            <div className="nps-breakdown">
              <div className="nps-cell">
                <span className="nv" style={{ color: "var(--ink-faint)" }}>—</span>
                <span className="nl">Respuestas</span>
              </div>
              <div className="nps-cell">
                <span className="nv" style={{ color: "var(--ink-faint)" }}>—</span>
                <span className="nl">Satisfacción</span>
              </div>
              <div className="nps-cell">
                <span className="nv" style={{ color: "var(--ink-faint)", fontSize: "14px", paddingTop: "7px" }}>2026</span>
                <span className="nl">Fecha</span>
              </div>
            </div>
          </div>
        </div>

        {/* Nota importante */}
        {data.notas.map((nota, i) => (
          <div key={i} style={{
            border: "1px solid var(--line-strong)",
            padding: "16px 20px",
            marginBottom: "16px",
            display: "flex",
            gap: "12px",
            alignItems: "flex-start",
          }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--hot)", flexShrink: 0, paddingTop: "2px" }}>Nota</span>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-dim)", lineHeight: "1.6" }}>{nota}</p>
          </div>
        ))}

        {/* Metrics — pendiente */}
        <div className="section-head" style={{ marginTop: "32px" }}>
          <h2>Métricas por <em>categoría</em></h2>
          <span className="sn">Pendiente</span>
        </div>
        <div className="pending-block">
          <span className="pb-icon">🌶</span>
          <span className="pb-title">Datos pendientes</span>
          <p className="pb-copy">Las métricas estarán disponibles una vez que se carguen las respuestas de la encuesta post-evento.</p>
        </div>

        {/* Pain Points — pendiente */}
        <div className="section-head">
          <h2>Pain <em>Points</em></h2>
          <span className="sn">Pendiente</span>
        </div>
        <div className="pending-block">
          <span className="pb-icon">📊</span>
          <span className="pb-title">Análisis pendiente</span>
          <p className="pb-copy">Los pain points se identificarán una vez procesadas las respuestas. Tener en cuenta que esta edición no incluye minijuegos.</p>
        </div>

        {/* Comentarios — pendiente */}
        <div className="section-head">
          <h2>Comentarios <em>destacados</em></h2>
          <span className="sn">Pendiente</span>
        </div>
        <div className="pending-block">
          <span className="pb-icon">💬</span>
          <span className="pb-title">Comentarios pendientes</span>
          <p className="pb-copy">Los comentarios destacados se cargarán junto con el análisis completo de la edición.</p>
        </div>

        <div className="dash-footer" style={{ marginTop: "72px" }}>
          <Link href="/" className="back-nav" style={{ marginBottom: 0 }}>← Dashboard</Link>
          <span>Ed03 · {data.date}</span>
        </div>
      </div>
    </>
  )
}
