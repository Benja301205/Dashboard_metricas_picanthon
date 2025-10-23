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
    total_respuestas: 29,
    sentimiento_promedio: 0.73,
    porcentaje_positivo: 86.2,
    probabilidad_retorno: 4.93,
    influencers_potenciales: 96.6,
    fecha_analisis: "Octubre 2025",
  },
  metricas_por_dimension: [
    { dimension: "Probabilidad de retorno (2da edición)", promedio: 4.93, nivel: "⭐⭐⭐⭐⭐", icono: "🔄" },
    { dimension: "Calidad de mentores", promedio: 4.86, nivel: "⭐⭐⭐⭐⭐", icono: "👨‍🏫" },
    { dimension: "Calidad del lugar", promedio: 4.72, nivel: "⭐⭐⭐⭐", icono: "🏠" },
    { dimension: "Claridad de la consigna", promedio: 4.31, nivel: "⭐⭐⭐⭐", icono: "📋" },
    { dimension: "Calidad de la comida", promedio: 4.21, nivel: "⭐⭐⭐⭐", icono: "🍽️" },
    { dimension: "Decisión de los jueces", promedio: 4.17, nivel: "⭐⭐⭐⭐", icono: "⚖️" },
    { dimension: "Dinámica del pitch", promedio: 4.03, nivel: "⭐⭐⭐⭐", icono: "🎤" },
    { dimension: "Calidad de minijuegos", promedio: 3.17, nivel: "⭐⭐⭐", icono: "🎮" },
  ],
  distribucion_sentimiento: {
    muy_positivo: 3,
    positivo: 22,
    neutral: 2,
    negativo: 2,
    muy_negativo: 0,
  },
  pain_points: {
    criticos: [
      {
        categoria: "MINIJUEGOS",
        menciones: 9,
        severidad: "Moderada-Alta",
        problema: "Percibidos como 'de relleno' y con baja calidad",
        impacto: "Reducción del engagement y oportunidades perdidas de networking",
        comentarios: [
          "Lo que menos me gustaron fueron los minijuegos, siento estaban muy de relleno, quizás unos minigames para que se pueda interactuar con otros participantes sea mejor",
        ],
      },
      {
        categoria: "LUGAR - Infraestructura",
        menciones: 7,
        severidad: "Moderada",
        problema: "Frío en el quincho, falta de espacios diferenciados, exclusión de equipos",
        impacto: "Incomodidad durante el desarrollo, ambiente no óptimo para trabajo técnico",
        comentarios: [
          "Agregaría un lugar que tenga una parte para trabajar de forma más cómoda y otra que sea para estar más chill y descansar si se quiere",
        ],
      },
      {
        categoria: "CONECTIVIDAD",
        menciones: 5,
        severidad: "Alta",
        problema: "Conexión WiFi deficiente e inestable",
        impacto: "Obstaculiza el desarrollo técnico y productividad",
        comentarios: ["WiFi inestable dificultó el trabajo con APIs"],
      },
      {
        categoria: "JUECES - Transparencia",
        menciones: 4,
        severidad: "Moderada",
        problema: "Falta de claridad en criterios de evaluación y feedback insuficiente",
        impacto: "Incertidumbre en equipos sobre qué mejorar",
        comentarios: [
          "Devolución de los jueces y cómo pensaron la votación",
          "Más feedback de las decisiones post pitch",
        ],
      },
    ],
    secundarios: [
      { categoria: "COMIDA", menciones: 3, problema: "Calidad del proveedor del almuerzo, falta de variedad" },
      { categoria: "TIEMPO", menciones: 3, problema: "Tiempo insuficiente para pitches y feedback del jurado" },
      {
        categoria: "MENTORES",
        menciones: 2,
        problema: "Falta de seguimiento post-evento, diferenciación poco clara de especialidades",
      },
      { categoria: "NETWORKING", menciones: 2, problema: "Tiempo insuficiente para interacción entre participantes" },
    ],
  },
  fortalezas: [
    {
      categoria: "MENTORES",
      menciones: 24,
      porque_funciono:
        "Excelente energía y actitud colaborativa, alta disponibilidad y conocimiento técnico, contribución directa a experiencias memorables",
      comentarios_destacados: [
        "Excelente la energía y la buena onda de todos los mentores, la verdad que ayudó a que todo sea una experiencia increíble",
      ],
    },
    {
      categoria: "LUGAR",
      menciones: 12,
      porque_funciono:
        "Instalaciones generalmente adecuadas, ubicación conveniente, ambiente propicio para trabajo en equipo",
      comentarios_destacados: ["El lugar estuvo muy bien, cómodo para trabajar"],
    },
    {
      categoria: "COMIDA",
      menciones: 8,
      porque_funciono: "Calidad general buena (a pesar de problemas puntuales), variedad satisfactoria para la mayoría",
      comentarios_destacados: ["La comida estuvo rica y variada"],
    },
    {
      categoria: "JUECES",
      menciones: 5,
      porque_funciono: "Accesibles y colaborativos durante el evento, feedback valioso cuando se brindó",
      comentarios_destacados: ["Los jueces unos copados como ayudaban al igual que los mentores"],
    },
  ],
  insights_accionables: {
    quick_wins: [
      {
        prioridad: 1,
        titulo: "Minijuegos Interactivos",
        accion: "Rediseñar completamente los minijuegos",
        solucion:
          "Implementar actividades que fomenten networking natural (ej. metegol, juegos de mesa colaborativos), eliminar 'actividades de relleno', vincular minijuegos con objetivos de team building",
        frecuencia: "Alta",
        costo: "Bajo",
        impacto: "Alto",
      },
      {
        prioridad: 2,
        titulo: "Transparencia en Evaluación",
        accion: "Documentar y comunicar criterios de jurado",
        solucion:
          "Publicar rubrica de evaluación antes del pitch, sesión de feedback estructurado post-pitch (5-10 min por equipo), explicación pública de decisión final",
        frecuencia: "Media-Alta",
        costo: "Bajo",
        impacto: "Alto",
      },
      {
        prioridad: 3,
        titulo: "Señalización de Mentores",
        accion: "Identificar visualmente especialidades",
        solucion:
          "Stickers de colores por área (Tech/Producto/Marketing/Negocio), breve presentación al inicio del evento, panel informativo con fotos y especialidades",
        frecuencia: "Media",
        costo: "Muy bajo",
        impacto: "Medio",
      },
    ],
    mejoras_estructurales: [
      {
        prioridad: 4,
        titulo: "Infraestructura del Lugar",
        accion: "Reconfigurar espacios de trabajo",
        solucion:
          "Zona A: Espacio de desarrollo (mesas, enchufes, iluminación), Zona B: Área de descanso/chill (sillones, menor ruido), mejorar calefacción en quincho, unificar ubicación de equipos",
        frecuencia: "Alta",
        costo: "Medio-Alto",
        impacto: "Alto",
      },
      {
        prioridad: 5,
        titulo: "Conectividad",
        accion: "Auditoría y upgrade de infraestructura de red",
        solucion:
          "Contratar servicio de WiFi empresarial con SLA garantizado, puntos de acceso distribuidos estratégicamente, plan B: hotspots de respaldo",
        frecuencia: "Alta",
        costo: "Medio",
        impacto: "Crítico",
      },
      {
        prioridad: 6,
        titulo: "Proveedor de Comida",
        accion: "Revisar contrato y opciones",
        solucion:
          "Realizar licitación con degustación previa, incluir más opciones de bebidas, snacks saludables y frutas, considerar feedback específico sobre almuerzo",
        frecuencia: "Media",
        costo: "Variable",
        impacto: "Medio",
      },
    ],
  },
  perfil_participantes: {
    nivel_experiencia: {
      alto: 37.9,
      intermedio: 58.6,
      novato: 3.4,
    },
    engagement: {
      activo: 93.1,
      pasivo: 6.9,
    },
    retencion: {
      riesgo_bajo: 100,
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
                Segunda Edición 2025 🇺🇾
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
