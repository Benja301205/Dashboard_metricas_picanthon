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
    total_respuestas: 9,
    sentimiento_promedio: 0.852,
    porcentaje_positivo: 88.9,
    probabilidad_retorno: 4.89,
    influencers_potenciales: 88.9,
    fecha_analisis: "18 de Octubre 2025",
  },
  metricas_por_dimension: [
    { dimension: "Probabilidad de volver", promedio: 4.89, nivel: "⭐⭐⭐⭐⭐", icono: "🔄" },
    { dimension: "Calidad de mentores", promedio: 4.89, nivel: "⭐⭐⭐⭐⭐", icono: "👨‍🏫" },
    { dimension: "Claridad de la consigna", promedio: 4.56, nivel: "⭐⭐⭐⭐", icono: "📋" },
    { dimension: "Calidad del lugar", promedio: 4.44, nivel: "⭐⭐⭐⭐", icono: "🏠" },
    { dimension: "Calidad de la comida", promedio: 4.22, nivel: "⭐⭐⭐⭐", icono: "🍽️" },
    { dimension: "Calidad de minijuegos", promedio: 3.78, nivel: "⭐⭐⭐⭐", icono: "🎮" },
    { dimension: "Dinámica del pitch", promedio: 3.67, nivel: "⭐⭐⭐", icono: "🎤" },
    { dimension: "Decisión de los jueces", promedio: 3.67, nivel: "⭐⭐⭐", icono: "⚖️" },
  ],
  distribucion_sentimiento: {
    muy_positivo: 8,
    positivo: 1,
    neutral: 0,
    negativo: 0,
    muy_negativo: 0,
  },
  pain_points: {
    criticos: [
      {
        categoria: "DURACIÓN DEL PITCH",
        menciones: 3,
        severidad: "Media-Alta",
        problema: "Tiempo de 2 minutos percibido como insuficiente para comunicar 24 horas de trabajo",
        impacto: "Frustración en etapa final, sensación de injusticia en evaluación",
        comentarios: [
          "El pitch fue muy corto, entiendo el fin, pero con 30s más creo que es clave",
          "Quizá que los pitch sean de 3 min y no de 2. Puede ser una diferencia significativa para el pitcher",
        ],
      },
      {
        categoria: "MOBILIARIO Y ERGONOMÍA",
        menciones: 2,
        severidad: "Media",
        problema: "Sillas inadecuadas para jornada de 24 horas, falta de espacios cómodos para descanso",
        impacto: "Incomodidad física durante el desarrollo",
        comentarios: [
          "Las sillas no eran lo mejor para estar trabajando 24 horas, y buscaría quizás un lugar con más sillones para dormir",
        ],
      },
      {
        categoria: "AUSENCIA DE FEEDBACK",
        menciones: 1,
        severidad: "Media-Alta",
        problema: "Participantes no reciben retroalimentación de los jueces",
        impacto: "Pérdida de oportunidad de aprendizaje, frustración en equipos no ganadores",
        comentarios: [
          "Me gustaría tener devolución de los jueces, para poder entender qué se hizo bien y mal (aunque sea escrito)",
        ],
      },
      {
        categoria: "MENTORES NOCTURNOS",
        menciones: 1,
        severidad: "Media",
        problema: "Brecha de disponibilidad de mentores entre 4-7 AM",
        impacto: "Afecta equipos que trabajan durante la madrugada",
        comentarios: [
          "Entre las 4 y las 7 de la mañana no había prácticamente ningún mentor para ayudarnos",
        ],
      },
    ],
    secundarios: [
      { categoria: "COMIDA", menciones: 1, problema: "Incidente logístico - frutas no llegaron" },
      { categoria: "DURACIÓN EVENTO", menciones: 1, problema: "Solicitud de reducción de horas" },
      { categoria: "CLARIDAD EVALUACIÓN", menciones: 1, problema: "Criterios de jueces no explícitos" },
      { categoria: "DINÁMICAS INTER-EQUIPOS", menciones: 2, problema: "Falta de intercambio estructurado entre grupos" },
    ],
  },
  fortalezas: [
    {
      categoria: "MENTORES",
      menciones: 9,
      porque_funciono:
        "Valoración unánime - calidad, cantidad y disponibilidad. Percibidos como la herramienta más importante del evento con impacto directo en calidad de productos",
      comentarios_destacados: [
        "El intercambio con mentores, conocer gente picante es la herramienta más importante que ofrecieron",
        "Me encanto el ida y vuelta con mentores, sin ellos, no llegábamos a un producto tan bueno",
        "Muy bien la cantidad de mentores y su diversidad de conocimientos",
      ],
    },
    {
      categoria: "ESPÍRITU ORGANIZACIONAL",
      menciones: 1,
      porque_funciono:
        "Reconocimiento del compromiso emocional del equipo organizador, genera ambiente acogedor que impacta positivamente",
      comentarios_destacados: [
        "Se nota que dejan el corazón en la organización y en que salga todo bien. Hace que estar ahí se sienta muy bien",
      ],
    },
    {
      categoria: "AMBIENTE DE COLABORACIÓN",
      menciones: 1,
      porque_funciono:
        "Predisposición general y networking valorados, cultura de ayuda mutua",
      comentarios_destacados: [
        "La predisposición de TODOS los que estaban ahí, para escuchar, sugerir y cuestionar fue excelente",
      ],
    },
    {
      categoria: "CONSIGNA",
      menciones: 9,
      porque_funciono:
        "Claridad en instrucciones, nivel de dificultad apropiado, balance entre estructura y creatividad",
      comentarios_destacados: [
        "100% de equipos generaron productos presentables, calificaciones ≥4",
      ],
    },
  ],
  insights_accionables: {
    quick_wins: [
      {
        prioridad: 1,
        titulo: "Extender Tiempo de Pitch",
        accion: "Cambiar de 2 a 3 minutos",
        solucion:
          "Modificar agenda para dar 3 minutos por pitch (+50%). Esto aumentará percepción de justicia sin impacto significativo en duración total",
        frecuencia: "Alta (33% lo solicitaron)",
        costo: "Bajo (cambio de agenda)",
        impacto: "Alto - Satisfacción pitch de 3.67→4.2",
      },
      {
        prioridad: 2,
        titulo: "Implementar Feedback Post-Evento",
        accion: "Crear template para jueces con retroalimentación",
        solucion:
          "Template con 3 preguntas: ¿Qué hicieron bien? ¿Qué mejorarían? ¿Qué siguiente paso recomendarías? Enviar por email 24-48hs después",
        frecuencia: "Media",
        costo: "Bajo (30 min/juez)",
        impacto: "Alto - Valor educativo, reduce frustración",
      },
      {
        prioridad: 3,
        titulo: "Reforzar Mentoría Nocturna",
        accion: "Sistema de 'Mentor de Guardia' 4-7 AM",
        solucion:
          "Crear turnos rotativos con incentivo especial para mentores en horario nocturno. Al menos 1 mentor disponible en esas horas",
        frecuencia: "Media",
        costo: "Bajo (coordinación + compensación)",
        impacto: "Medio - Mejora experiencia equipos nocturnos",
      },
    ],
    mejoras_estructurales: [
      {
        prioridad: 4,
        titulo: "Rediseño Formato Presentaciones",
        accion: "Implementar 'Demo + Pitch + Q&A'",
        solucion:
          "3 min demo técnica + 2 min pitch comercial + 1 min Q&A = 6 min total. Permite evaluar técnica Y visión comercial. Limitar a 12 equipos máximo",
        frecuencia: "Alta",
        costo: "Bajo",
        impacto: "Alto - Reduce percepción injusticia",
      },
      {
        prioridad: 5,
        titulo: "Sistema Votación Participante",
        accion: "Implementar 'People's Choice Award'",
        solucion:
          "Votación de participantes (sin valor oficial). Criterio: ¿Con qué equipo te gustaría trabajar? Más feedback, engagement y networking",
        frecuencia: "Media",
        costo: "Bajo",
        impacto: "Medio - Mejora engagement",
      },
      {
        prioridad: 6,
        titulo: "Dinámicas Inter-Equipos",
        accion: "Implementar 'Speed Testing' a mitad del evento",
        solucion:
          "Hora 12: rotación obligatoria. Cada participante testea proyecto de otro equipo (15 min), recibe feedback estructurado. Genera networking y perspectivas externas",
        frecuencia: "Media (2 lo solicitaron)",
        costo: "Bajo",
        impacto: "Medio-Alto",
      },
      {
        prioridad: 7,
        titulo: "Mejora Mobiliario",
        accion: "Alquilar sillas ergonómicas y zona descanso",
        solucion:
          "Sillas ergonómicas certificadas para jornadas largas + área con puffs, mantas, antifaces. Mesas amplias (min 2m²/persona)",
        frecuencia: "Media",
        costo: "Medio-Alto",
        impacto: "Medio - Comodidad física",
      },
      {
        prioridad: 8,
        titulo: "Diversificación Mentoría",
        accion: "Reclutar mentores especializados",
        solucion:
          "UX/UI Designer, Experto Go-to-Market, Dev Mobile/Web senior, Inversor. Crear perfil visible de cada mentor + sistema de solicitud por expertise",
        frecuencia: "Baja",
        costo: "Medio",
        impacto: "Medio - Potencia fortaleza",
      },
    ],
  },
  perfil_participantes: {
    nivel_experiencia: {
      alto: 44.4,
      intermedio: 44.4,
      novato: 11.1,
    },
    engagement: {
      activo: 88.9,
      pasivo: 11.1,
    },
    retencion: {
      riesgo_bajo: 88.9,
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
