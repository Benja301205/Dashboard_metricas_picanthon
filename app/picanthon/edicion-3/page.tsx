import Link from 'next/link'

// ── ACTUALIZÁ ESTOS DATOS cuando tengas los resultados de la encuesta ──
const ED3 = {
  num: '03',
  nombre: 'Picanthon 03',
  pais: null,              // Ej: 'Argentina 🇦🇷'
  ciudad: null,            // Ej: 'Buenos Aires'
  fecha: 'Mayo 2026',
  total_respuestas: null,  // Número total de encuestados
  nps: null,               // Promedio Q1 (1–5)
  metricas: [
    // Orden igual al formulario Q1–Q8
    // Actualizá únicamente el campo `promedio` cuando tengas los datos
    { cat: 'Probabilidad de volver (NPS)', promedio: null },
    { cat: 'Calidad del lugar',            promedio: null },
    { cat: 'Calidad de la comida',         promedio: null },
    { cat: 'Calidad de mentores',          promedio: null },
    { cat: 'Consigna y output esperado',   promedio: null },
    { cat: 'Dinámica del pitch',           promedio: null },
    { cat: 'Decisión de los jueces',       promedio: null },
    // ⚠ No hay pregunta de MiniGames en Ed 03
  ],
  // Pain points — completá con los del análisis cuando tengas las respuestas
  // Estructura: { cat, menciones, problema, quote | null }
  pain_points: [] as Array<{
    cat: string
    menciones: number
    problema: string
    quote: string | null
  }>,
  // Comentarios destacados — el organizador los carga post-evento
  // Estructura: { cat, texto }
  quotes: [] as Array<{ cat: string; texto: string }>,
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
      <span>Picanthon · Ed 03 · 2026</span>
      <span>Datos pendientes de carga</span>
    </footer>
  )
}

const isPending = ED3.nps === null

export default function Edicion3Page() {
  return (
    <div className="page-wrap">
      <Topbar active="ed3" />

      <div className="edition-page">
        <Link href="/" className="nav-back">
          ← Volver al dashboard
        </Link>

        {/* Header */}
        <div className="edition-header">
          <h1 className="edition-title">
            Picanthon <em>03</em>
          </h1>
          <div className="edition-meta">
            {ED3.pais && <div className="meta-line"><b>País</b> {ED3.pais}</div>}
            {ED3.ciudad && <div className="meta-line"><b>Ciudad</b> {ED3.ciudad}</div>}
            <div className="meta-line"><b>Fecha</b> {ED3.fecha}</div>
            <div className="meta-line">
              <b>Respuestas</b>{' '}
              {ED3.total_respuestas !== null ? ED3.total_respuestas : '— pendiente'}
            </div>
            <div className="edition-note-tag">
              ⚠ Sin MiniGames en esta edición
            </div>
          </div>
        </div>

        {/* NPS — placeholder o dato real */}
        {isPending ? (
          <div className="nps-card" style={{ maxWidth: 320 }}>
            <p className="k">NPS proxy — probabilidad de volver</p>
            <div className="big-num" style={{ color: 'var(--ink-faint)', fontSize: 64 }}>
              —
            </div>
            <p className="verdict" style={{ color: 'var(--ink-faint)' }}>Datos pendientes</p>
            <p className="note">
              Cargará automáticamente cuando actualices el campo{' '}
              <code style={{ color: 'var(--hot)', fontFamily: 'var(--font-mono)', fontSize: 10 }}>nps</code>{' '}
              en este archivo.
            </p>
          </div>
        ) : (
          <div className="nps-card" style={{ maxWidth: 320 }}>
            <p className="k">NPS proxy — probabilidad de volver</p>
            <div className="big-num">
              {ED3.nps!.toFixed(2)}
              <small>/5</small>
            </div>
            <p className="verdict">
              {ED3.nps! >= 4.5 ? 'Retorno muy alto' : ED3.nps! >= 3.5 ? 'Retorno probable' : 'Retorno moderado'}
            </p>
            <p className="note">Q1 · escala 1–5 · {ED3.total_respuestas} respuestas</p>
          </div>
        )}

        {/* Métricas */}
        <div className="section-head">
          <h2>Métricas por <em>categoría</em></h2>
          <span className="num">
            {isPending ? 'Pendiente de carga' : `${ED3.metricas.length} dimensiones`}
          </span>
        </div>

        {isPending ? (
          <div className="placeholder-state" style={{ padding: '40px 0', textAlign: 'left', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, width: '100%' }}>
              {ED3.metricas.map((m) => (
                <div key={m.cat} className="metric-row" style={{ opacity: 0.4 }}>
                  <div className="m-head">
                    <span className="m-name">{m.cat}</span>
                    <span
                      className="m-avg"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontStyle: 'normal',
                        fontSize: 14,
                        color: 'var(--ink-faint)',
                        letterSpacing: '0.12em',
                      }}
                    >
                      —
                    </span>
                  </div>
                  <div className="m-bar">
                    <div className="fill" style={{ width: '0%' }} />
                  </div>
                </div>
              ))}
            </div>
            <p
              style={{
                marginTop: 24,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--ink-faint)',
              }}
            >
              Actualizá el objeto ED3 con los promedios del análisis post-evento.
            </p>
          </div>
        ) : (
          <div className="metrics-grid">
            {ED3.metricas.map((m) => (
              <div key={m.cat} className="metric-row">
                <div className="m-head">
                  <span className="m-name">{m.cat}</span>
                  <span className="m-avg">{m.promedio!.toFixed(2)}<small>/5</small></span>
                </div>
                <div className="m-bar">
                  <div className="fill" style={{ width: `${(m.promedio! / 5) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pain Points */}
        <div className="section-head">
          <h2>Pain <em>points</em></h2>
          <span className="num">
            {ED3.pain_points.length > 0 ? `${ED3.pain_points.length} registrados` : 'Pendiente'}
          </span>
        </div>

        {ED3.pain_points.length === 0 ? (
          <div
            style={{
              padding: '40px 0',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-faint)',
              borderTop: '1px solid var(--line)',
            }}
          >
            Los pain points se cargarán luego del análisis post-evento. Agregalos en el array{' '}
            <code style={{ color: 'var(--hot)' }}>pain_points</code> de este archivo.
          </div>
        ) : (
          <div className="pain-grid">
            {ED3.pain_points.map((p) => (
              <div key={p.cat} className="pain-card">
                <div className="pain-top">
                  <span className="pain-cat">{p.cat}</span>
                  <span className="pain-cnt">{p.menciones} menciones</span>
                </div>
                <p className="pain-text">{p.problema}</p>
                {p.quote && <p className="pain-quote">"{p.quote}"</p>}
              </div>
            ))}
          </div>
        )}

        {/* Comentarios destacados */}
        <div className="section-head">
          <h2>Comentarios <em>destacados</em></h2>
          <span className="num">
            {ED3.quotes.length > 0 ? `${ED3.quotes.length} seleccionados` : 'Pendiente'}
          </span>
        </div>

        {ED3.quotes.length === 0 ? (
          <div
            style={{
              padding: '40px 0',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-faint)',
              borderTop: '1px solid var(--line)',
            }}
          >
            Agregá los comentarios seleccionados en el array{' '}
            <code style={{ color: 'var(--hot)' }}>quotes</code> de este archivo.
          </div>
        ) : (
          <div className="quotes">
            {ED3.quotes.map((q, i) => (
              <div key={i} className="quote">
                <span className="mark" aria-hidden>"</span>
                <p className="q-cat">{q.cat}</p>
                <p className="q-text">{q.texto}</p>
              </div>
            ))}
          </div>
        )}

        <Footer />
      </div>
    </div>
  )
}
