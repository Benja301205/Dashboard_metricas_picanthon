import Link from 'next/link'
import Topbar from '@/app/components/Topbar'

const ED3 = {
  fecha: 'Mayo 2026',
  total_respuestas: null as number | null,
  nps: null as number | null,
  metricas: [
    { cat: 'Probabilidad de volver (NPS)', promedio: null },
    { cat: 'Calidad del lugar',            promedio: null },
    { cat: 'Calidad de la comida',         promedio: null },
    { cat: 'Calidad de mentores',          promedio: null },
    { cat: 'Consigna y output esperado',   promedio: null },
    { cat: 'Dinámica del pitch',           promedio: null },
    { cat: 'Decisión de los jueces',       promedio: null },
  ],
  pain_points: [] as Array<{ cat: string; menciones: number; problema: string; quote: string | null }>,
  quotes: [] as Array<{ cat: string; texto: string }>,
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
        <Link href="/" className="nav-back">← Volver al dashboard</Link>

        <div className="edition-header">
          <h1 className="edition-title">Picanthon <em>03</em></h1>
          <div className="edition-meta">
            <div className="meta-line"><b>Fecha</b> {ED3.fecha}</div>
            <div className="meta-line">
              <b>Respuestas</b>{' '}
              {ED3.total_respuestas !== null ? ED3.total_respuestas : '— pendiente'}
            </div>
            <div className="edition-note-tag">⚠ Sin MiniGames en esta edición</div>
          </div>
        </div>

        {isPending ? (
          <div className="nps-card" style={{ maxWidth: 320 }}>
            <p className="k">NPS proxy — probabilidad de volver</p>
            <div className="big-num" style={{ color: 'var(--ink-faint)', fontSize: 64 }}>—</div>
            <p className="verdict" style={{ color: 'var(--ink-faint)' }}>Datos pendientes</p>
            <p className="note">
              Actualizá el campo{' '}
              <code style={{ color: 'var(--hot)', fontFamily: 'var(--font-mono)', fontSize: 10 }}>nps</code>{' '}
              en este archivo para cargar el dato.
            </p>
          </div>
        ) : (
          <div className="nps-card" style={{ maxWidth: 320 }}>
            <p className="k">NPS proxy — probabilidad de volver</p>
            <div className="big-num">{ED3.nps!.toFixed(2)}<small>/5</small></div>
            <p className="verdict">
              {ED3.nps! >= 4.5 ? 'Retorno muy alto' : ED3.nps! >= 3.5 ? 'Retorno probable' : 'Retorno moderado'}
            </p>
            <p className="note">Q1 · escala 1–5 · {ED3.total_respuestas} respuestas</p>
          </div>
        )}

        <div className="section-head">
          <h2>Métricas por <em>categoría</em></h2>
          <span className="num">{isPending ? 'Pendiente de carga' : `${ED3.metricas.length} dimensiones`}</span>
        </div>
        <div className="metrics-grid">
          {ED3.metricas.map((m) => (
            <div key={m.cat} className="metric-row" style={{ opacity: isPending ? 0.35 : 1 }}>
              <div className="m-head">
                <span className="m-name">{m.cat}</span>
                <span className="m-avg" style={isPending ? { fontFamily: 'var(--font-mono)', fontStyle: 'normal', fontSize: 16, color: 'var(--ink-faint)' } : {}}>
                  {m.promedio !== null ? m.promedio.toFixed(2) : '—'}
                  {m.promedio !== null && <small>/5</small>}
                </span>
              </div>
              <div className="m-bar"><div className="fill" style={{ width: m.promedio !== null ? `${(m.promedio / 5) * 100}%` : '0%' }} /></div>
            </div>
          ))}
        </div>

        <div className="section-head">
          <h2>Pain <em>points</em></h2>
          <span className="num">{ED3.pain_points.length > 0 ? `${ED3.pain_points.length} registrados` : 'Pendiente'}</span>
        </div>
        {ED3.pain_points.length === 0 ? (
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-faint)', borderTop: '1px solid var(--line)', paddingTop: 32 }}>
            Agregá los pain points en el array <code style={{ color: 'var(--hot)' }}>pain_points</code> de este archivo.
          </p>
        ) : (
          <div className="pain-grid">
            {ED3.pain_points.map((p) => (
              <div key={p.cat} className="pain-card">
                <div className="pain-top">
                  <span className="pain-cat">{p.cat}</span>
                  <span className="pain-cnt">{p.menciones} menciones</span>
                </div>
                <p className="pain-text">{p.problema}</p>
                {p.quote && <p className="pain-quote">“{p.quote}”</p>}
              </div>
            ))}
          </div>
        )}

        <div className="section-head">
          <h2>Comentarios <em>destacados</em></h2>
          <span className="num">{ED3.quotes.length > 0 ? `${ED3.quotes.length} seleccionados` : 'Pendiente'}</span>
        </div>
        {ED3.quotes.length === 0 ? (
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-faint)', borderTop: '1px solid var(--line)', paddingTop: 32 }}>
            Agregá los comentarios en el array <code style={{ color: 'var(--hot)' }}>quotes</code> de este archivo.
          </p>
        ) : (
          <div className="quotes">
            {ED3.quotes.map((q, i) => (
              <div key={i} className="quote">
                <span className="mark" aria-hidden>“</span>
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
