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
    { cat: 'Probabilidad de volver (NPS)',       promedio: 4.80 },
    { cat: 'Calidad de mentores',                 promedio: 5.00 },
    { cat: 'Calidad de la comida',                promedio: 4.40 },
    { cat: 'Decisión de los jueces',              promedio: 4.40 },
    { cat: 'Calidad del lugar',                   promedio: 4.00 },
    { cat: 'Dinámica de la presentación',         promedio: 3.80 },
    { cat: 'Consigna y output esperado',          promedio: 3.60 },
  ],
  pain_points: [
    {
      cat: 'Tiempo de presentación',
      menciones: 2,
      problema: 'El límite de 1 minuto 30 segundos fue percibido como insuficiente para comunicar el trabajo del día. Mencionado por 2 de 5 participantes en «¿Qué cambiarías?».',
      quote: 'Cortísimo el tiempo para presentar, no llegamos a mostrar ni la mitad de lo que teníamos y eso que fuimos rápido.',
    },
    {
      cat: 'Criterios del jurado',
      menciones: 1,
      problema: 'Falta de claridad sobre qué dimensiones prioriza el jurado. Surgió en «¿Qué mantendrías?»: el formato sin producto rentable se valora, pero se pide más transparencia en los criterios.',
      quote: 'Estaría bueno que quede claro desde un principio a qué se le va a dar más peso en la evaluación del jurado.',
    },
    {
      cat: 'Lugar e infraestructura',
      menciones: 1,
      problema: 'El espacio resultó incómodo por falta de tomacorrientes disponibles para trabajar con laptops durante horas.',
      quote: 'Era un poco incómodo el lugar, no habían enchufes.',
    },
    {
      cat: 'Consigna',
      menciones: 2,
      problema: 'Dimensión más baja del evento (3.60/5). Dos participantes calificaron con 3/5. Sin comentarios textuales en «¿Qué cambiarías?».',
      quote: null,
    },
  ],
  sugerencias: [
    {
      cat: 'Jueces',
      texto: 'Que los jueces tengan tiempo para hacer preguntas cortas a los participantes. Tampoco tantas porque sino se hace larga.',
    },
    {
      cat: 'After',
      texto: 'Un after post evaluación y premios para consolidar el networking. Lo más lindo de las hackathones es la gente que uno conoce.',
    },
    {
      cat: 'Formato',
      texto: 'Una edición más larga con foco en producto real, como en ediciones anteriores.',
    },
    {
      cat: 'Reconocimiento',
      texto: 'Merchandising para todos los participantes, no solo los ganadores. No hace falta algo wow, con un llavero sería suficiente.',
    },
  ],
  quotes: [
    {
      cat: 'Mentores',
      texto: 'Los mentores eran todos unos cracks y que sea un espacio reducido permitía hablar muy bien con todos y no solo hablar de la idea sino conocerse.',
    },
    {
      cat: 'Dinámica',
      texto: 'Con mi dupla la pasamos genial, la idea, la temática y toda la buena onda en general estuvo.',
    },
    {
      cat: 'Formato',
      texto: 'Estuvo bueno que fue corta y la temática era muy puntual.',
    },
    {
      cat: 'Formato',
      texto: 'Mantendría el formato de no esperar que se presente un producto rentable.',
    },
    {
      cat: 'Ambiente',
      texto: 'El ambiente que generó la gente, muy buena onda todos, la pasamos muy bien la verdad.',
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
          <span className="num">{ED3.pain_points.filter(p => p.quote).length} con cita · {ED3.pain_points.filter(p => !p.quote).length} por score</span>
        </div>
        <div className="pain-grid">
          {ED3.pain_points.map((p) => (
            <div key={p.cat} className="pain-card">
              <div className="pain-top">
                <span className="pain-cat">{p.cat}</span>
                <span className="pain-cnt">{p.menciones} menciones</span>
              </div>
              <p className="pain-text">{p.problema}</p>
              {p.quote && <p className="pain-quote">&ldquo;{p.quote}&rdquo;</p>}
            </div>
          ))}
        </div>

        <div className="section-head">
          <h2>Sugerencias <em>de participantes</em></h2>
          <span className="num">{ED3.sugerencias.length} propuestas · Q11</span>
        </div>
        <div className="sugerencias">
          {ED3.sugerencias.map((s, i) => (
            <div key={i} className="sugerencia">
              <span className="sug-cat">{s.cat}</span>
              <p className="sug-text">{s.texto}</p>
            </div>
          ))}
        </div>

        <div className="section-head">
          <h2>Comentarios <em>destacados</em></h2>
          <span className="num">{ED3.quotes.length} seleccionados · Q9</span>
        </div>
        <div className="quotes">
          {ED3.quotes.map((q, i) => (
            <div key={i} className="quote">
              <span className="mark" aria-hidden>&ldquo;</span>
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
