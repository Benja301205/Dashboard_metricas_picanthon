import Link from 'next/link'

const BOOTCAMP = {
  edicion: 13,
  nombre: 'BootCamp Emprendedores',
  organizacion: 'Trama · ITBA',
  pais: 'Argentina 🇦🇷',
  ciudad: 'Buenos Aires',
  fecha: 'Mayo 2026',
  total_respuestas: 0,
  calificacion: 0,
  pendiente: true,
  metricas: [
    { cat: 'Calificación general del BootCamp', promedio: 0, q: 'Q1' },
    { cat: 'Conformidad con la organización',   promedio: 0, q: 'Q2' },
    { cat: 'Proceso de acreditación',           promedio: 0, q: 'Q4' },
    { cat: 'Formulario de inscripción',         promedio: 0, q: 'Q5' },
    { cat: 'Comunicación previa al evento',     promedio: 0, q: 'Q6' },
    { cat: 'Categoría asignada',               promedio: 0, q: 'Q8' },
    { cat: 'Hilo conductor — charlas',          promedio: 0, q: 'Q10' },
    { cat: 'Oradores',                          promedio: 0, q: 'Q11' },
    { cat: 'Mentores',                          promedio: 0, q: 'Q14' },
    { cat: 'Comida',                            promedio: 0, q: 'Q16' },
    { cat: '¿Lo recomendarías?',               promedio: 0, q: 'Q18' },
  ],
  pain_points: [] as { cat: string; menciones: number; problema: string; quote: string | null }[],
  sugerencias: [] as { cat: string; texto: string }[],
  quotes: [] as { cat: string; texto: string }[],
}

function fmt(n: number) { return n > 0 ? n.toFixed(2) : '—' }

export default function TramaPage() {
  return (
    <div className="page-wrap">

      <header className="topbar">
        <div className="brand">
          <span className="brand-name" style={{ fontStyle: 'normal', fontSize: 20, letterSpacing: '0.01em' }}>
            BootCamp <em>Emprendedores</em>
          </span>
        </div>
        <div />
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--ink-faint)',
        }}>
          Trama · ITBA
        </span>
      </header>

      <div className="edition-page">

        <div className="edition-header">
          <h1 className="edition-title">BootCamp <em>13</em></h1>
          <div className="edition-meta">
            <div className="meta-line"><b>Organiza</b> {BOOTCAMP.organizacion}</div>
            <div className="meta-line"><b>País</b> {BOOTCAMP.pais}</div>
            <div className="meta-line"><b>Ciudad</b> {BOOTCAMP.ciudad}</div>
            <div className="meta-line"><b>Fecha</b> {BOOTCAMP.fecha}</div>
            <div className="meta-line"><b>Participantes</b> ~150</div>
            <div className="meta-line"><b>Respuestas</b> {BOOTCAMP.total_respuestas || '—'}</div>
          </div>
        </div>

        <div className="nps-card" style={{ maxWidth: 320 }}>
          <p className="k">Calificación general del BootCamp</p>
          <div className="big-num">
            {BOOTCAMP.pendiente
              ? <span style={{ fontSize: 64, color: 'var(--ink-faint)', fontStyle: 'normal' }}>—</span>
              : <>{fmt(BOOTCAMP.calificacion)}<small>/5</small></>}
          </div>
          <p className="verdict">{BOOTCAMP.pendiente ? 'Aguardando datos' : 'Muy alto'}</p>
          <p className="note">Q1 · escala 1–5 · {BOOTCAMP.total_respuestas || '—'} respuestas</p>
        </div>

        <div className="section-head">
          <h2>Métricas por <em>bloque</em></h2>
          <span className="num">{BOOTCAMP.metricas.length} dimensiones</span>
        </div>
        <div className="metrics-grid">
          {BOOTCAMP.metricas.map((m) => (
            <div key={m.cat} className="metric-row">
              <div className="m-head">
                <span className="m-name">{m.cat}</span>
                <span className="m-avg">
                  {m.promedio > 0
                    ? <>{m.promedio.toFixed(2)}<small>/5</small></>
                    : <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--ink-faint)', fontStyle: 'normal' }}>—</span>}
                </span>
              </div>
              <div className="m-bar">
                <div className="fill" style={{ width: m.promedio > 0 ? `${(m.promedio / 5) * 100}%` : '4px' }} />
              </div>
            </div>
          ))}
        </div>

        <div className="placeholder-state" style={{ marginTop: 72 }}>
          <p className="big">Sin datos</p>
          <p className="copy">Una vez cargado el feedback del evento aparecen los pain points, sugerencias y comentarios destacados.</p>
          <p className="mono">Edición 13 · Mayo 2026 · Trama ITBA</p>
        </div>

        <footer className="footer">
          <span>BootCamp Emprendedores · Ed 13 · Trama ITBA · Mayo 2026</span>
          <span>{BOOTCAMP.total_respuestas || '—'} respuestas</span>
        </footer>

      </div>
    </div>
  )
}
