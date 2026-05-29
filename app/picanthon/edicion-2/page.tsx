import Link from 'next/link'
import Topbar from '@/app/components/Topbar'

const ED2 = {
  num: '02',
  nombre: 'Picanthon Uruguay',
  pais: 'Uruguay 🇺🇾',
  ciudad: 'Montevideo',
  fecha: '18 de Octubre 2025',
  total_respuestas: 18,
  nps: 4.56,
  metricas: [
    { cat: 'Probabilidad de volver (NPS)', promedio: 4.56 },
    { cat: 'Calidad de mentores',          promedio: 4.89 },
    { cat: 'Consigna y output esperado',   promedio: 4.56 },
    { cat: 'Calidad del lugar',            promedio: 4.33 },
    { cat: 'Calidad de la comida',         promedio: 4.28 },
    { cat: 'Dinámica del pitch',           promedio: 4.06 },
    { cat: 'MiniGames',                    promedio: 3.94 },
    { cat: 'Decisión de los jueces',       promedio: 3.83 },
  ],
  pain_points: [
    {
      cat: 'Duración del evento (24hs)',
      menciones: 7,
      problema: 'Las 24 horas continuas fueron percibidas como excesivamente largas. Alta fatiga física y mental, baja productividad nocturna, y barreras logísticas para participantes de otras ciudades.',
      quote: 'Se hizo un poco larga, más hoy en día que se hace una app entera en la mitad del tiempo.',
    },
    {
      cat: 'Duración del pitch (2 min)',
      menciones: 6,
      problema: 'El tiempo de 2 minutos fue percibido como insuficiente para comunicar 24 horas de trabajo. Sensación de injusticia en la evaluación final.',
      quote: 'El pitch fue muy corto, entiendo el fin, pero con 30s más creo que es clave para el pitcher.',
    },
    {
      cat: 'Feedback de jueces',
      menciones: 3,
      problema: 'Los participantes no recibieron retroalimentación estructurada post-evaluación. Criterios poco claros, sensación de proceso arbitrario.',
      quote: 'Me gustaría tener devolución de los jueces, para poder entender qué se hizo bien y mal (aunque sea escrito).',
    },
    {
      cat: 'Mobiliario y ergonomía',
      menciones: 3,
      problema: 'Sillas inadecuadas para jornada de 24 horas. Falta de espacios cómodos y diferenciados para descanso durante la noche.',
      quote: 'Las sillas no eran lo mejor para estar trabajando 24 horas, y buscaría quizás un lugar con más sillones para dormir.',
    },
    {
      cat: 'Mentores nocturnos',
      menciones: 3,
      problema: 'Brecha de disponibilidad de mentores entre las 4 y las 7 AM. Genera inequidad en el acceso a soporte técnico según el turno de trabajo del equipo.',
      quote: 'Entre las 4 y las 7 de la mañana no había prácticamente ningún mentor para ayudarnos.',
    },
    {
      cat: 'Dinámicas inter-equipos',
      menciones: 5,
      problema: 'Poca interacción entre equipos durante el evento. Los participantes pidieron más instancias de networking y colaboración entre grupos.',
      quote: null,
    },
  ],
  quotes: [
    {
      cat: 'Mentores',
      texto: 'El intercambio con mentores, conocer gente picante es la herramienta más importante que ofrecieron. La predisposición de TODOS los que estaban ahí, para escuchar, sugerir y cuestionar fue excelente.',
    },
    {
      cat: 'Organización',
      texto: 'Lo que más me gustó es que se nota que dejan el corazón en la organización y en que salga todo bien. Hace que estar ahí se sienta muy bien.',
    },
    {
      cat: 'Duración',
      texto: 'Es demasiado larga y no tiene tanto sentido pudiendo vibecodear todo. Arrancamos a las 6AM para llegar a PDE y tener que pasar toda la noche sin dormir.',
    },
    {
      cat: 'Mentores',
      texto: 'Me encantó el ida y vuelta con mentores, en nuestro caso puntual, sin ellos, no llegábamos a un producto tan bueno.',
    },
  ],
}

function fmt(n: number) { return n.toFixed(2) }

function Footer() {
  return (
    <footer className="footer">
      <span>Picanthon · Ed 02 · Uruguay · Oct 2025</span>
      <span>{ED2.total_respuestas} respuestas</span>
    </footer>
  )
}

export default function Edicion2Page() {
  return (
    <div className="page-wrap">
      <Topbar active="ed2" />

      <div className="edition-page">
        <Link href="/" className="nav-back">← Volver al dashboard</Link>

        <div className="edition-header">
          <h1 className="edition-title">Picanthon <em>02</em></h1>
          <div className="edition-meta">
            <div className="meta-line"><b>País</b> {ED2.pais}</div>
            <div className="meta-line"><b>Ciudad</b> {ED2.ciudad}</div>
            <div className="meta-line"><b>Fecha</b> {ED2.fecha}</div>
            <div className="meta-line"><b>Respuestas</b> {ED2.total_respuestas}</div>
            <div className="meta-line"><b>NPS (volver)</b> {fmt(ED2.nps)}/5</div>
          </div>
        </div>

        <div className="nps-card" style={{ maxWidth: 320 }}>
          <p className="k">NPS proxy — probabilidad de volver</p>
          <div className="big-num">{fmt(ED2.nps)}<small>/5</small></div>
          <p className="verdict">Retorno probable</p>
          <p className="note">Q1 · escala 1–5 · {ED2.total_respuestas} respuestas</p>
        </div>

        <div className="section-head">
          <h2>Métricas por <em>categoría</em></h2>
          <span className="num">{ED2.metricas.length} dimensiones</span>
        </div>
        <div className="metrics-grid">
          {ED2.metricas.map((m) => (
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
          <span className="num">{ED2.pain_points.filter(p => p.quote).length} críticos · {ED2.pain_points.filter(p => !p.quote).length} secundario</span>
        </div>
        <div className="pain-grid">
          {ED2.pain_points.map((p) => (
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
          <span className="num">{ED2.quotes.length} seleccionados</span>
        </div>
        <div className="quotes">
          {ED2.quotes.map((q, i) => (
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
