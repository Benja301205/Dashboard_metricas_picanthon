import Link from 'next/link'
import Topbar from '@/app/components/Topbar'

const ED3 = {
  num: '03',
  nombre: 'Picanthon Argentina',
  pais: 'Argentina 🇦🇷',
  ciudad: 'Buenos Aires',
  fecha: '28 de Mayo 2026',
  total_respuestas: 5,
  nps: 4.80,
  metricas: [
    { cat: 'Probabilidad de volver (NPS)', promedio: 4.80 },
    { cat: 'Calidad de mentores',          promedio: 5.00 },
    { cat: 'Calidad de la comida',         promedio: 4.40 },
    { cat: 'Decisión de los jueces',       promedio: 4.40 },
    { cat: 'Calidad del lugar',            promedio: 4.00 },
    { cat: 'Dinámica del pitch',           promedio: 3.80 },
    { cat: 'Consigna y output esperado',   promedio: 3.60 },
    // ⚠ Sin MiniGames en esta edición
  ],
  pain_points: [
    {
      cat: 'Tiempo de pitch',
      menciones: 2,
      problema: 'El límite de 1 minuto 30 segundos fue percibido como insuficiente para comunicar el trabajo del día. Genera frustración directa en la evaluación y sensación de injusticia.',
      quote: 'No llegamos a mostrar ni la mitad de lo que teníamos. Minuto y medio fue poco para presentar bien la idea.',
    },
    {
      cat: 'Criterios de evaluación',
      menciones: 1,
      problema: 'Falta de transparencia en los parámetros del jurado. Los participantes no sabían qué dimensiones se priorizaban al momento de trabajar.',
      quote: 'Estaría bueno que quede claro desde un principio a qué se le va a dar más peso en la evaluación del jurado.',
    },
    {
      cat: 'Lugar y enchufes',
      menciones: 2,
      problema: 'El espacio fue percibido como incómodo por algunos participantes, principalmente por la falta de tomacorrientes disponibles para trabajar con laptops durante horas.',
      quote: null,
    },
    {
      cat: 'After / networking',
      menciones: 1,
      problema: 'Ausencia de instancia post-evento para consolidar vínculos. La energía generada durante el hackathon no tiene un cierre social.',
      quote: 'Lo más lindo de las hackathones es la gente que uno conoce.',
    },
    {
      cat: 'Consigna',
      menciones: 2,
      problema: 'La dimensión más baja del evento (3.60/5). Posible ambigüedad o falta de claridad en la consigna antes del inicio.',
      quote: null,
    },
  ],
  quotes: [
    {
      cat: 'Mentores',
      texto: 'El espacio reducido permitía hablar muy bien con todos y no solo hablar de la idea sino conocerse.',
    },
    {
      cat: 'Pitch',
      texto: 'No llegamos a mostrar ni la mitad de lo que teníamos. Minuto y medio fue poco para presentar bien la idea.',
    },
    {
      cat: 'Ambiente',
      texto: 'Muy buena onda todos. La pasamos muy bien — muy piolas los pibes de Picante.',
    },
    {
      cat: 'Networking',
      texto: 'Lo más lindo de las hackathones es la gente que uno conoce.',
    },
  ],
}

function fmt(n: number) { return n.toFixed(2) }

function Footer() {
  return (
    <footer className="footer">
      <span>Picanthon · Ed 03 · Argentina · May 2026</span>
      <span>{ED3.total_respuestas} respuestas</span>
    </footer>
  )
}

export default function Edicion3Page() {
  return (
    <div className="page-wrap">
      <Topbar active="ed3" />

      <div className="edition-page">
        <Link href="/" className="nav-back">← Volver al dashboard</Link>

        <div className="edition-header">
          <h1 className="edition-title">Picanthon <em>03</em></h1>
          <div className="edition-meta">
            <div className="meta-line"><b>País</b> {ED3.pais}</div>
            <div className="meta-line"><b>Ciudad</b> {ED3.ciudad}</div>
            <div className="meta-line"><b>Fecha</b> {ED3.fecha}</div>
            <div className="meta-line"><b>Respuestas</b> {ED3.total_respuestas}</div>
            <div className="meta-line"><b>NPS (volver)</b> {fmt(ED3.nps)}/5</div>
            <div className="edition-note-tag">⚠ Sin MiniGames en esta edición</div>
          </div>
        </div>

        <div className="nps-card" style={{ maxWidth: 320 }}>
          <p className="k">NPS proxy — probabilidad de volver</p>
          <div className="big-num">{fmt(ED3.nps)}<small>/5</small></div>
          <p className="verdict">Retorno muy alto</p>
          <p className="note">Q1 · escala 1–5 · {ED3.total_respuestas} respuestas</p>
        </div>

        <div className="section-head">
          <h2>Métricas por <em>categoría</em></h2>
          <span className="num">{ED3.metricas.length} dimensiones</span>
        </div>
        <div className="metrics-grid">
          {ED3.metricas.map((m) => (
            <div key={m.cat} className="metric-row">
              <div className="m-head">
                <span className="m-name">{m.cat}</span>
                <span className="m-avg">{fmt(m.promedio)}<small>/5</small></span>
              </div>
              <div className="m-bar"><div className="fill" style={{ width: `${(m.promedio / 5) * 100}%` }} /></div>
            </div>
          ))}
        </div>

        <div className="section-head">
          <h2>Pain <em>points</em></h2>
          <span className="num">{ED3.pain_points.filter(p => p.quote).length} críticos · {ED3.pain_points.filter(p => !p.quote).length} secundarios</span>
        </div>
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

        <div className="section-head">
          <h2>Comentarios <em>destacados</em></h2>
          <span className="num">{ED3.quotes.length} seleccionados</span>
        </div>
        <div className="quotes">
          {ED3.quotes.map((q, i) => (
            <div key={i} className="quote">
              <span className="mark" aria-hidden>“</span>
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
