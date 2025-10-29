import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Lightbulb, TrendingUp, Users, Star, ArrowLeft, Home } from "lucide-react"

// Types based on real data structure
interface DashboardData {
  resumen_ejecutivo: {
    total_respuestas: number
    sentimiento_promedio: number
    porcentaje_positivo: number
    probabilidad_retorno: number
    influencers_potenciales: number
    fecha_analisis: string
  }
  metricas_por_dimension: Array<{
    dimension: string
    promedio: number
    nivel: string
    icono: string
  }>
  distribucion_sentimiento: {
    muy_positivo: number
    positivo: number
    neutral: number
    negativo: number
    muy_negativo: number
  }
  pain_points: {
    criticos: Array<{
      categoria: string
      menciones: number
      severidad: string
      problema: string
      impacto: string
      comentarios: string[]
    }>
    secundarios: Array<{
      categoria: string
      menciones: number
      problema: string
    }>
  }
  fortalezas: Array<{
    categoria: string
    menciones: number
    porque_funciono: string
    comentarios_destacados: string[]
  }>
  insights_accionables: {
    quick_wins: Array<{
      prioridad: number
      titulo: string
      accion: string
      solucion: string
      frecuencia: string
      costo: string
      impacto: string
    }>
    mejoras_estructurales: Array<{
      prioridad: number
      titulo: string
      accion: string
      solucion: string
      frecuencia: string
      costo: string
      impacto: string
    }>
  }
  perfil_participantes: {
    nivel_experiencia: {
      alto: number
      intermedio: number
      novato: number
    }
    engagement: {
      activo: number
      pasivo: number
    }
    retencion: {
      riesgo_bajo: number
    }
  }
}

// Dashboard data - actualizar manualmente con nueva información
const dashboardData: DashboardData = {
  resumen_ejecutivo: {
    total_respuestas: 18,
    sentimiento_promedio: 0.861,
    porcentaje_positivo: 86.1,
    probabilidad_retorno: 4.56,
    influencers_potenciales: 61.1,
    fecha_analisis: "29 de Octubre 2025",
  },
  metricas_por_dimension: [
    { dimension: "Calidad de mentores", promedio: 4.89, nivel: "⭐⭐⭐⭐⭐", icono: "👨‍🏫" },
    { dimension: "Probabilidad de volver", promedio: 4.56, nivel: "⭐⭐⭐⭐⭐", icono: "🔄" },
    { dimension: "Claridad de la consigna", promedio: 4.56, nivel: "⭐⭐⭐⭐⭐", icono: "📋" },
    { dimension: "Calidad del lugar", promedio: 4.33, nivel: "⭐⭐⭐⭐", icono: "🏠" },
    { dimension: "Calidad de la comida", promedio: 4.28, nivel: "⭐⭐⭐⭐", icono: "🍽️" },
    { dimension: "Dinámica del pitch", promedio: 4.06, nivel: "⭐⭐⭐⭐", icono: "🎤" },
    { dimension: "Calidad de minijuegos", promedio: 3.94, nivel: "⭐⭐⭐⭐", icono: "🎮" },
    { dimension: "Decisión de los jueces", promedio: 3.83, nivel: "⭐⭐⭐⭐", icono: "⚖️" },
  ],
  distribucion_sentimiento: {
    muy_positivo: 11,
    positivo: 6,
    neutral: 1,
    negativo: 0,
    muy_negativo: 0,
  },
  pain_points: {
    criticos: [
      {
        categoria: "DURACIÓN DEL EVENTO (24hs)",
        menciones: 7,
        severidad: "Alta",
        problema: "Las 24 horas continuas percibidas como excesivamente largas, fatiga física/mental, baja productividad nocturna",
        impacto: "Fatiga extrema, desaprovechamiento de horas, barreras logísticas, posible deserción de talento",
        comentarios: [
          "Se hizo un poco larga, más hoy en día que se hace una app entera en la mitad del tiempo",
          "Es demasiado larga y no tiene tanto sentido pudiendo vibecodear todo. Arrancamos a las 6AM para llegar a PDE y tener que pasar toda la noche sin dormir",
        ],
      },
      {
        categoria: "DURACIÓN DEL PITCH",
        menciones: 6,
        severidad: "Media-Alta",
        problema: "Tiempo de 2 minutos percibido como insuficiente para comunicar 24 horas de trabajo",
        impacto: "Frustración en etapa final, sensación de injusticia en evaluación, desaprovechamiento del trabajo realizado",
        comentarios: [
          "El pitch fue muy corto, entiendo el fin, pero con 30s más creo que es clave",
          "Quizá que los pitch sean de 3 min y no de 2. Puede ser una diferencia significativa para el pitcher",
          "El proceso final tendría que ser más un 'demo day', para que podamos entender mejor los productos",
        ],
      },
      {
        categoria: "TRANSPARENCIA Y FEEDBACK JUECES",
        menciones: 3,
        severidad: "Media-Alta",
        problema: "Participantes no reciben retroalimentación estructurada post-evaluación, criterios poco claros",
        impacto: "Frustración en equipos no ganadores (83%), pérdida de valor educativo, sensación de proceso arbitrario",
        comentarios: [
          "Me gustaría tener devolución de los jueces, para poder entender qué se hizo bien y mal (aunque sea escrito)",
          "Permitiría que los jurados puedan testear las apps y, si son técnicos, acceder a los repos",
        ],
      },
      {
        categoria: "MOBILIARIO Y ERGONOMÍA",
        menciones: 3,
        severidad: "Media",
        problema: "Sillas inadecuadas para jornada de 24 horas, falta de espacios cómodos para descanso",
        impacto: "Incomodidad física, afecta productividad a medida que avanzan las horas",
        comentarios: [
          "Las sillas no eran lo mejor para estar trabajando 24 horas, y buscaría quizás un lugar con más sillones para dormir",
          "Conseguiría mejores asientos ya que después de muchas horas estábamos un poco incómodos",
        ],
      },
      {
        categoria: "MENTORES NOCTURNOS",
        menciones: 3,
        severidad: "Media",
        problema: "Brecha de disponibilidad de mentores entre 4-7 AM",
        impacto: "Afecta equipos que trabajan durante la madrugada, genera inequidad en acceso a soporte",
        comentarios: [
          "Entre las 4 y las 7 de la mañana no había prácticamente ningún mentor para ayudarnos",
        ],
      },
    ],
    secundarios: [
      { categoria: "DINÁMICAS INTER-EQUIPOS", menciones: 5, problema: "Falta de intercambio estructurado entre grupos, solicitud de más networking" },
      { categoria: "COMIDA", menciones: 1, problema: "Solicitud de mayor variedad de snacks y bebidas" },
      { categoria: "MINIJUEGOS", menciones: 2, problema: "Calidad percibida como mejorable, experiencias heterogéneas" },
      { categoria: "CLARIDAD CONSIGNA", menciones: 2, problema: "Libertad excesiva llevó a muchos wrappers de LLM similares" },
    ],
  },
  fortalezas: [
    {
      categoria: "MENTORES",
      menciones: 11,
      porque_funciono:
        "Valoración unánime - calidad, cantidad, diversidad y disponibilidad. 88.9% otorgó máxima calificación. Percibidos como el diferenciador clave que transforma la experiencia de 'hacer un producto' a 'hacer un producto de calidad con aprendizaje real'",
      comentarios_destacados: [
        "El intercambio con mentores, conocer gente picante es la herramienta más importante que ofrecieron. La predisposición de TODOS los que estaban ahí, para escuchar, sugerir y cuestionar fue excelente",
        "Me encantó el ida y vuelta con mentores, en nuestro caso puntual, sin ellos, no llegábamos a un producto tan bueno",
        "Los mentores y su ayuda con el proceso de ideación inicial fue GENIAL",
      ],
    },
    {
      categoria: "ESPÍRITU ORGANIZACIONAL",
      menciones: 4,
      porque_funciono:
        "Reconocimiento del compromiso emocional genuino del equipo organizador. La pasión no es un detalle menor - genera ambiente acogedor que trasciende la logística y crea conexión emocional con el evento",
      comentarios_destacados: [
        "Lo que más me gustó es que se nota que dejan el corazón en la organización y en que salga todo bien. Hace que estar ahí se sienta muy bien",
        "La dinámica de mentores y jurado, siempre presente fue increíble, y estoy super agradecida",
      ],
    },
    {
      categoria: "AMBIENTE DE COLABORACIÓN",
      menciones: 5,
      porque_funciono:
        "El Picanthon logra crear un ecosistema de colaboración donde la competencia no genera tensión sino camaradería. Valoración del networking y el intercambio entre participantes",
      comentarios_destacados: [
        "Buenos mentores, muy lindo ambiente, se vivió una excelente jornada",
        "Me gustó la gente y el ambiente",
      ],
    },
    {
      categoria: "CONSIGNA",
      menciones: 10,
      porque_funciono:
        "Balance perfecto entre libertad creativa y dirección clara. Tema suficientemente amplio para diversidad de ideas con parámetros claros para comenzar a trabajar rápidamente. 100% de equipos generaron productos presentables",
      comentarios_destacados: [
        "55.6% calificó 5/5 y 44.4% calificó 4/5 - 0% calificó negativamente la consigna",
      ],
    },
  ],
  insights_accionables: {
    quick_wins: [
      {
        prioridad: 1,
        titulo: "Extender Tiempo de Pitch",
        accion: "Cambiar de 2 a 3 minutos (+50%)",
        solucion:
          "Modificar agenda para dar 3 minutos por pitch. Aumenta solo 12 min el tiempo total para 12 equipos. Solicitado por 33.3% de participantes",
        frecuencia: "Alta (33.3% lo solicitaron)",
        costo: "Muy Bajo ($0 - cambio de agenda)",
        impacto: "Alto - Satisfacción pitch de 4.06→4.5+",
      },
      {
        prioridad: 2,
        titulo: "Email con Feedback Estructurado de Jueces",
        accion: "Comprometer feedback escrito dentro de 48hs post-evento",
        solucion:
          "Template estructurado: Fortalezas identificadas (3), Áreas de oportunidad (2), Comentario general, Puntuación individual por criterio. Enviar a TODOS los equipos",
        frecuencia: "Media (16.7% lo solicitaron explícitamente)",
        costo: "Bajo ($10,000 compensación o trabajo voluntario)",
        impacto: "Alto - Satisfacción jueces de 3.83→4.3+",
      },
      {
        prioridad: 3,
        titulo: "Publicar Rúbrica de Evaluación Pre-Evento",
        accion: "Comunicar criterios de evaluación claramente antes del evento",
        solucion:
          "Rúbrica con 5 criterios: Innovación (25%), Ejecución Técnica (25%), Modelo de Negocio (20%), Pitch (15%), Impacto (15%). Publicar en web y briefing inicial",
        frecuencia: "Media",
        costo: "Muy Bajo ($0 - diseño y publicación)",
        impacto: "Medio - Mayor claridad y transparencia",
      },
      {
        prioridad: 4,
        titulo: "Kit de Confort Básico",
        accion: "Almohadones, mantas, tapones de oídos, antifaces",
        solucion:
          "Compra de 20 almohadones ergonómicos, 15 mantas livianas, tapones/antifaces (50 unidades). Disponibles gratuitamente para todos",
        frecuencia: "Media (16.7% mencionó ergonomía)",
        costo: "Bajo ($40,000-50,000 ARS)",
        impacto: "Medio - Satisfacción lugar de 4.33→4.5+",
      },
      {
        prioridad: 5,
        titulo: "Más Snacks Permanentes",
        accion: "Bowls con snacks en cada mesa + fruta fresca 24/7",
        solucion:
          "Frutos secos, galletitas, barritas de cereal, frutas frescas. Disponibles constantemente sin necesidad de pedirlos",
        frecuencia: "Baja (1 mención directa)",
        costo: "Bajo ($30,000 ARS adicionales)",
        impacto: "Bajo - Satisfacción comida de 4.28→4.4+",
      },
      {
        prioridad: 6,
        titulo: "Presentación Inicial de Mentores",
        accion: "10-15 min al inicio donde cada mentor se presenta",
        solucion:
          "Cada mentor presenta: nombre, background, expertise específico, tipo de proyectos donde puede ayudar. Gafete con color por especialidad",
        frecuencia: "Media (implícito en comentarios)",
        costo: "Muy Bajo ($0 - solo coordinación)",
        impacto: "Medio - Mayor aprovechamiento de mentores",
      },
    ],
    mejoras_estructurales: [
      {
        prioridad: 1,
        titulo: "Implementar Formato 'Demo Day' Híbrido",
        accion: "Etapa 1: Pitch rápido (2min todos) → Etapa 2: Demo extendida (Top 5, 5min demo + 3min Q&A) → Etapa 3: Premiación con múltiples categorías",
        solucion:
          "Todos pitchean equitativamente, mejores proyectos brillan con profundidad, jueces toman decisiones más informadas. 5 categorías de premios: Gran Premio, Innovación Técnica, Mejor Modelo Negocio, Mejor Pitch, People's Choice",
        frecuencia: "Alta (33.3% + mejora evaluación)",
        costo: "Bajo (logística +90min evento)",
        impacto: "Alto - Satisfacción pitch y jueces +10-15%",
      },
      {
        prioridad: 2,
        titulo: "Dinámicas de Networking Inter-Equipos",
        accion: "Implementar 'Speed Testing' a mitad del evento (Hora 12)",
        solucion:
          "Rotación obligatoria 60 min: cada equipo envía 1 representante a testear producto de otro equipo, dar feedback estructurado, compartir aprendizajes. Genera networking genuino y user testing real",
        frecuencia: "Alta (27.8% lo solicitaron)",
        costo: "Bajo ($20,000-30,000 logística)",
        impacto: "Medio-Alto - Rompe monotonía y crea valor",
      },
      {
        prioridad: 3,
        titulo: "Decisión Estratégica sobre Duración",
        accion: "Testear formato de 18 horas (Vie 18PM - Sáb 12PM)",
        solucion:
          "Encuesta a alumni + experimento en próxima edición. 38.9% solicitó reducción. Balance trabajo/descanso sin perder intensidad. Elimina brecha de mentoría nocturna",
        frecuencia: "Crítica (38.9% lo mencionaron)",
        costo: "Bajo (cambio operativo)",
        impacto: "Alto - Reduce fatiga, mantiene calidad",
      },
      {
        prioridad: 4,
        titulo: "Upgrade de Venue y Mobiliario",
        accion: "Sillas ergonómicas certificadas + zona de descanso profesional",
        solucion:
          "30 sillas ergonómicas con respaldo lumbar ajustable. Zona separada con 6 puffs, alfombra, cortinas blackout, white noise. Espacios diferenciados: Trabajo Intensivo, Brainstorming, Descanso, Networking",
        frecuencia: "Media (16.7% mencionó)",
        costo: "Medio-Alto ($480,000-580,000 ARS)",
        impacto: "Medio - Lugar de 4.33→4.7+",
      },
      {
        prioridad: 5,
        titulo: "Sistema de Mentoría 24/7",
        accion: "Turnos rotativos + soporte asíncrono nocturno",
        solucion:
          "Día (12PM-8PM): 4 mentores, Noche (8PM-4AM): 3 mentores, Madrugada (4AM-12PM): 1 mentor + canal Slack async. Compensación diferencial por turno nocturno",
        frecuencia: "Media (16.7% lo mencionó)",
        costo: "Medio ($300,000-400,000 compensaciones)",
        impacto: "Medio - Mantiene score 4.89, equidad acceso",
      },
    ],
  },
  perfil_participantes: {
    nivel_experiencia: {
      alto: 38.9,
      intermedio: 55.6,
      novato: 5.5,
    },
    engagement: {
      activo: 94.4,
      pasivo: 5.6,
    },
    retencion: {
      riesgo_bajo: 94.4,
    },
  },
}

// Utility functions
const getSentimentColor = (score: number) => {
  if (score >= 0.9) return "text-green-600"
  if (score >= 0.6) return "text-blue-600"
  if (score >= 0.3) return "text-yellow-600"
  return "text-red-600"
}

const getSentimentBgColor = (score: number) => {
  if (score >= 0.9) return "bg-green-500"
  if (score >= 0.6) return "bg-blue-500"
  if (score >= 0.3) return "bg-yellow-500"
  return "bg-red-500"
}

const getSeverityColor = (severidad: string) => {
  if (severidad.includes("Alta")) return "destructive"
  if (severidad.includes("Moderada")) return "secondary"
  return "outline"
}

const getCostBadgeVariant = (costo: string): "default" | "secondary" | "destructive" | "outline" => {
  if (costo.includes("Bajo")) return "default"
  if (costo.includes("Medio")) return "secondary"
  return "outline"
}

const getImpactBadgeVariant = (impacto: string): "default" | "secondary" | "destructive" | "outline" => {
  if (impacto.includes("Alto") || impacto.includes("Crítico")) return "default"
  if (impacto.includes("Medio")) return "secondary"
  return "outline"
}

export default function PicanthonDashboard() {
  const data = dashboardData

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Ejecutivo */}
      <header className="bg-white shadow-sm p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Home className="h-5 w-5" />
              </Link>
              <span className="text-gray-400">/</span>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
                Segunda Edición - 18 Oct 2025 🇺🇾
              </Badge>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">🎯 Picanthon Uruguay Dashboard</h1>
            <p className="text-gray-600">Análisis Completo de Feedback Post-Evento - Montevideo, Uruguay</p>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-6 pb-8">
        {/* Resumen Ejecutivo Hero */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">📊 Resumen Ejecutivo</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{data.resumen_ejecutivo.total_respuestas}</div>
                <div className="text-sm text-gray-600">Respuestas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  {(data.resumen_ejecutivo.sentimiento_promedio * 100).toFixed(0)}%
                </div>
                <div className="text-sm text-gray-600">Sentimiento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {data.resumen_ejecutivo.porcentaje_positivo.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Positivo</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">
                  {data.resumen_ejecutivo.probabilidad_retorno.toFixed(2)}/5
                </div>
                <div className="text-sm text-gray-600">Retorno</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">
                  {data.resumen_ejecutivo.influencers_potenciales.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-600">Influencers</div>
              </div>
            </div>
            <div className="mt-6 bg-white/50 p-4 rounded-lg">
              <p className="text-center text-gray-700 font-medium">
                🎉 <strong>{data.resumen_ejecutivo.porcentaje_positivo.toFixed(1)}%</strong> de participantes expresaron
                sentimientos positivos con una probabilidad de retorno de{" "}
                <strong>{data.resumen_ejecutivo.probabilidad_retorno.toFixed(2)}/5.0</strong>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Métricas por Dimensión */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">⭐ Métricas por Dimensión</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.metricas_por_dimension.map((dimension, index) => {
              const status =
                dimension.promedio >= 4.5
                  ? { color: "green", emoji: "🟢", bg: "bg-green-50", border: "border-green-200" }
                  : dimension.promedio >= 3.5
                    ? { color: "yellow", emoji: "🟡", bg: "bg-yellow-50", border: "border-yellow-200" }
                    : { color: "red", emoji: "🔴", bg: "bg-red-50", border: "border-red-200" }

              return (
                <Card key={index} className={`${status.bg} border-2 ${status.border}`}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center justify-between">
                      <span>{dimension.dimension}</span>
                      <span className="text-lg">{status.emoji}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{dimension.promedio.toFixed(2)}/5</div>
                    <div className="text-sm text-gray-600 mb-2">{dimension.nivel}</div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${status.color === "green" ? "bg-green-500" : status.color === "yellow" ? "bg-yellow-500" : "bg-red-500"}`}
                        style={{ width: `${(dimension.promedio / 5) * 100}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Distribución de Sentimiento */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>😊 Distribución de Sentimiento</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  label: "Muy Positivo",
                  value: data.distribucion_sentimiento.muy_positivo,
                  color: "bg-green-600",
                  total: data.resumen_ejecutivo.total_respuestas,
                },
                {
                  label: "Positivo",
                  value: data.distribucion_sentimiento.positivo,
                  color: "bg-blue-500",
                  total: data.resumen_ejecutivo.total_respuestas,
                },
                {
                  label: "Neutral",
                  value: data.distribucion_sentimiento.neutral,
                  color: "bg-gray-400",
                  total: data.resumen_ejecutivo.total_respuestas,
                },
                {
                  label: "Negativo",
                  value: data.distribucion_sentimiento.negativo,
                  color: "bg-orange-500",
                  total: data.resumen_ejecutivo.total_respuestas,
                },
                {
                  label: "Muy Negativo",
                  value: data.distribucion_sentimiento.muy_negativo,
                  color: "bg-red-600",
                  total: data.resumen_ejecutivo.total_respuestas,
                },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{item.label}</span>
                    <span className="text-sm font-semibold">
                      {item.value} ({((item.value / item.total) * 100).toFixed(1)}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full ${item.color}`}
                      style={{ width: `${(item.value / item.total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Pain Points Críticos */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-2 text-red-600" />🚨 Pain Points Críticos
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {data.pain_points.criticos.map((pain, index) => (
              <Card key={index} className="border-2 border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-red-700">{pain.categoria}</span>
                    <Badge variant={getSeverityColor(pain.severidad)}>{pain.severidad}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-semibold text-red-700">Menciones: </span>
                      <span className="text-sm">{pain.menciones}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-red-700">Problema: </span>
                      <span className="text-sm">{pain.problema}</span>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-red-700">Impacto: </span>
                      <span className="text-sm">{pain.impacto}</span>
                    </div>
                    {pain.comentarios && pain.comentarios.length > 0 && (
                      <div className="mt-3 p-3 bg-white rounded-lg">
                        <span className="text-xs font-semibold text-red-700">Comentario destacado:</span>
                        <p className="text-xs italic mt-1">"{pain.comentarios[0]}"</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pain Points Secundarios */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">⚠️ Problemas Secundarios</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {data.pain_points.secundarios.map((pain, index) => (
                <Card key={index} className="border border-orange-200 bg-orange-50">
                  <CardContent className="p-4">
                    <div className="font-semibold text-orange-700 mb-1">
                      {pain.categoria} ({pain.menciones})
                    </div>
                    <div className="text-sm text-orange-800">{pain.problema}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Fortalezas del Evento */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Star className="h-6 w-6 mr-2 text-green-600" />⭐ Pilares de Éxito
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.fortalezas.map((fortaleza, index) => (
              <Card key={index} className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-green-100">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-green-700">
                    <span>{fortaleza.categoria}</span>
                    <Badge variant="default" className="bg-green-600">
                      {fortaleza.menciones} menciones
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-green-700">Por qué funcionó:</span>
                    <p className="text-sm text-green-800 mt-1">{fortaleza.porque_funciono}</p>
                  </div>
                  {fortaleza.comentarios_destacados && fortaleza.comentarios_destacados.length > 0 && (
                    <div className="mt-3 p-3 bg-white rounded-lg">
                      <span className="text-xs font-semibold text-green-700">Comentario destacado:</span>
                      <p className="text-xs italic mt-1">"{fortaleza.comentarios_destacados[0]}"</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Wins */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />🎯 Quick Wins (Implementación Inmediata)
          </h2>
          <div className="space-y-4">
            {data.insights_accionables.quick_wins.map((insight, index) => (
              <Card key={index} className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-blue-700">
                      Prioridad {insight.prioridad}: {insight.titulo}
                    </span>
                    <div className="flex gap-2">
                      <Badge variant={getCostBadgeVariant(insight.costo)}>💰 {insight.costo}</Badge>
                      <Badge variant={getImpactBadgeVariant(insight.impacto)}>⚡ {insight.impacto}</Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-semibold">Acción:</span>
                      <p className="text-sm">{insight.accion}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold">Solución:</span>
                      <p className="text-sm">{insight.solucion}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Frecuencia: {insight.frecuencia}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mejoras Estructurales */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Lightbulb className="h-6 w-6 mr-2 text-orange-600" />
            🏗️ Mejoras Estructurales (Mediano Plazo)
          </h2>
          <div className="space-y-4">
            {data.insights_accionables.mejoras_estructurales.map((mejora, index) => (
              <Card key={index} className="border-2 border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-orange-700">
                      Prioridad {mejora.prioridad}: {mejora.titulo}
                    </span>
                    <div className="flex gap-2">
                      <Badge variant={getCostBadgeVariant(mejora.costo)}>💰 {mejora.costo}</Badge>
                      <Badge variant={getImpactBadgeVariant(mejora.impacto)}>⚡ {mejora.impacto}</Badge>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-semibold">Acción:</span>
                      <p className="text-sm">{mejora.accion}</p>
                    </div>
                    <div>
                      <span className="text-sm font-semibold">Solución:</span>
                      <p className="text-sm">{mejora.solucion}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Frecuencia: {mejora.frecuencia}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Perfil de Participantes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Users className="h-6 w-6 mr-2" />👥 Perfil de Participantes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-center">Nivel de Experiencia</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Alto</span>
                      <span className="font-semibold">
                        {data.perfil_participantes.nivel_experiencia.alto.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-500 h-2 rounded-full"
                        style={{ width: `${data.perfil_participantes.nivel_experiencia.alto}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Intermedio</span>
                      <span className="font-semibold">
                        {data.perfil_participantes.nivel_experiencia.intermedio.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${data.perfil_participantes.nivel_experiencia.intermedio}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Novato</span>
                      <span className="font-semibold">
                        {data.perfil_participantes.nivel_experiencia.novato.toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${data.perfil_participantes.nivel_experiencia.novato}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-center">Engagement</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Activo</span>
                      <span className="font-semibold">{data.perfil_participantes.engagement.activo.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${data.perfil_participantes.engagement.activo}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Pasivo</span>
                      <span className="font-semibold">{data.perfil_participantes.engagement.pasivo.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gray-400 h-2 rounded-full"
                        style={{ width: `${data.perfil_participantes.engagement.pasivo}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-center">Retención</h4>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {data.perfil_participantes.retencion.riesgo_bajo.toFixed(1)}%
                  </div>
                  <p className="text-sm text-gray-600">Riesgo de abandono bajo</p>
                  <Badge variant="default" className="mt-2 bg-green-600">
                    Audiencia valiosa
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conclusión Final */}
        <Card className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">🎯 Conclusión Estratégica</h2>
            <div className="space-y-4">
              <p className="text-center text-lg">
                El <strong>Picanthon</strong> demostró ser un evento <strong>altamente exitoso</strong> con fortalezas
                extraordinarias en su equipo de mentores y jueces, logrando una experiencia memorable para el{" "}
                <strong>{data.resumen_ejecutivo.porcentaje_positivo.toFixed(1)}%</strong> de participantes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold">{data.resumen_ejecutivo.probabilidad_retorno.toFixed(2)}/5</div>
                  <div className="text-sm">Probabilidad de Retorno</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold">{data.resumen_ejecutivo.influencers_potenciales.toFixed(1)}%</div>
                  <div className="text-sm">Influencers Potenciales</div>
                </div>
                <div className="bg-white/20 p-4 rounded-lg text-center">
                  <div className="text-3xl font-bold">
                    {data.perfil_participantes.retencion.riesgo_bajo.toFixed(1)}%
                  </div>
                  <div className="text-sm">Retención Alta</div>
                </div>
              </div>
              <p className="text-center text-sm mt-4 opacity-90">
                Las oportunidades de mejora se concentran en aspectos logísticos y de diseño de actividades. Implementar
                las recomendaciones priorizadas puede elevar el evento de "excelente" a "referencia de la industria".
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
