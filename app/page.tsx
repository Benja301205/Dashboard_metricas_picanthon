"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react"

// Types
interface DashboardData {
  metadata: {
    timestamp: string
    total_respuestas: number
    areas_analizadas: number
    tipo_analisis: string
    version: string
  }
  resumen_ejecutivo: {
    nps_global: number
    total_participantes: number
    resumen_textual: string
    nps_interpretacion: string
    nps_breakdown: {
      promoters: number
      detractors: number
      passives: number
    }
  }
  metricas_por_area: Array<{
    area_key: string
    nombre: string
    promedio: number
    total_respuestas: number
    sentiment: string
    color_indicador: string
  }>
  insights_ia: {
    fortalezas_destacadas: string[]
    areas_mejora_prioritarias: string[]
    recomendaciones_accionables: string[]
  }
  datos_visualizacion: {
    distribucion_nps: {
      promoters: number
      passives: number
      detractors: number
    }
    comparacion_areas: Array<{
      area: string
      valor: number
      sentiment: string
    }>
    tendencias: {
      areas_criticas: any[]
      areas_excelentes: Array<{
        area_key: string
        nombre: string
        promedio: number
        total_ratings: number
        color_sugerido: string
      }>
    }
  }
}

// Custom hook for data fetching
const useFetchDashboardData = () => {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [isConnected, setIsConnected] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("https://snowmba.app.n8n.cloud/webhook/picanthon-dashboard", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      })

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`)
      }

      const result = await response.json()
      const finalData = Array.isArray(result) ? result[0] : result

      setData(finalData)
      setLastUpdated(new Date())
      setIsConnected(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido")
      setIsConnected(false)
      console.error("Error fetching data:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading, error, refetch: fetchData, lastUpdated, isConnected }
}

// Utility functions
const getSentimentEmoji = (sentiment: string) => {
  const emojiMap: Record<string, string> = {
    "muy positivo": "🤩",
    positivo: "😊",
    neutral: "😐",
    negativo: "😞",
  }
  return emojiMap[sentiment] || "😐"
}

const getSentimentVariant = (sentiment: string): "default" | "secondary" | "destructive" | "outline" => {
  const variantMap: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
    "muy positivo": "default",
    positivo: "default",
    neutral: "secondary",
    negativo: "destructive",
  }
  return variantMap[sentiment] || "secondary"
}

const formatTime = (timestamp: string) => {
  return new Date(timestamp).toLocaleString("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

const getNPSLabel = (nps: number) => {
  if (nps >= 70) return "Excelente"
  if (nps >= 50) return "Muy Bueno"
  if (nps >= 30) return "Bueno"
  if (nps >= 0) return "Regular"
  return "Necesita Mejora"
}

const getNPSColor = (nps: number) => {
  if (nps >= 70) return "text-green-600"
  if (nps >= 50) return "text-blue-600"
  if (nps >= 30) return "text-yellow-600"
  if (nps >= 0) return "text-orange-600"
  return "text-red-600"
}

// Circular NPS Chart Component
const CircularNPSChart = ({ nps, size = 128 }: { nps: number; size?: number }) => {
  const radius = (size - 16) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference * (1 - (nps + 100) / 200)

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          className="text-gray-200"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className={getNPSColor(nps).replace("text-", "text-").replace("-600", "-500")}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className={`text-3xl font-bold ${getNPSColor(nps)}`}>{nps}</div>
          <div className="text-xs text-gray-500">NPS</div>
        </div>
      </div>
    </div>
  )
}

export default function PicanthonDashboard() {
  const { data, loading, error, refetch, lastUpdated, isConnected } = useFetchDashboardData()

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-500" />
          <p className="text-gray-600">Cargando datos del evento...</p>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <AlertTriangle className="h-8 w-8 text-red-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Error de Conexión</h3>
            <p className="text-gray-600 mb-4">No se pudieron cargar los datos: {error}</p>
            <Button onClick={refetch} className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reintentar
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Ejecutivo */}
      <header className="bg-white shadow-sm p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">🎯 Picanthon Dashboard</h1>
            <p className="text-gray-600">Análisis de feedback post-evento</p>
            <p className="text-sm text-gray-500">
              Última actualización: {lastUpdated ? formatTime(lastUpdated.toISOString()) : "N/A"}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant={isConnected ? "default" : "destructive"}>
              {isConnected ? "🟢 Conectado" : "🔴 Desconectado"}
            </Badge>
            <Button onClick={refetch} disabled={loading}>
              {loading ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Actualizando...
                </>
              ) : (
                <>
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Actualizar Datos
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 pb-8">
        {/* NPS Hero Section */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">Net Promoter Score</h2>
                <p className="text-gray-600 mb-4">{data.resumen_ejecutivo.resumen_textual}</p>
                <p className="text-sm text-gray-500 mb-4">{data.resumen_ejecutivo.nps_interpretacion}</p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>👥 Promoters:{" "}
                    {data.resumen_ejecutivo.nps_breakdown.promoters}
                  </span>
                  <span className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>😐 Passives:{" "}
                    {data.resumen_ejecutivo.nps_breakdown.passives}
                  </span>
                  <span className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>👎 Detractors:{" "}
                    {data.resumen_ejecutivo.nps_breakdown.detractors}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="mb-4">
                  <CircularNPSChart nps={data.resumen_ejecutivo.nps_global} />
                </div>
                <div className={`text-lg font-semibold ${getNPSColor(data.resumen_ejecutivo.nps_global)}`}>
                  {getNPSLabel(data.resumen_ejecutivo.nps_global)}
                </div>
                <div className="text-sm text-gray-500">{data.resumen_ejecutivo.total_participantes} participantes</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grid de Áreas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {data.metricas_por_area.map((area) => (
            <Card key={area.area_key} className="hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center justify-between text-sm">
                  {area.nombre}
                  <div
                    className={`w-3 h-3 rounded-full ${
                      area.color_indicador === "green"
                        ? "bg-green-500"
                        : area.color_indicador === "yellow"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                  />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-bold">{area.promedio}</span>
                  <Badge variant={getSentimentVariant(area.sentiment)} className="text-xs">
                    {getSentimentEmoji(area.sentiment)} {area.sentiment}
                  </Badge>
                </div>
                <div className="text-sm text-gray-600 mb-2">{area.total_respuestas} respuestas</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      area.color_indicador === "green"
                        ? "bg-green-500"
                        : area.color_indicador === "yellow"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                    style={{ width: `${(area.promedio / 5) * 100}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Insights de IA */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Fortalezas */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-700 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Fortalezas Destacadas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {data.insights_ia.fortalezas_destacadas.map((fortaleza, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-0.5">✅</span>
                    <span className="text-sm text-green-800">{fortaleza}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Áreas de Mejora */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-700 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Áreas de Mejora
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {data.insights_ia.areas_mejora_prioritarias.map((area, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2 mt-0.5">⚠️</span>
                    <span className="text-sm text-orange-800">{area}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Recomendaciones */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-700 flex items-center">
                <Lightbulb className="h-5 w-5 mr-2" />
                Recomendaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {data.insights_ia.recomendaciones_accionables.map((recomendacion, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-0.5">💡</span>
                    <span className="text-sm text-blue-800">{recomendacion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos y Visualizaciones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Distribución NPS */}
          <Card>
            <CardHeader>
              <CardTitle>Distribución NPS</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    Promoters
                  </span>
                  <span className="font-semibold">{data.datos_visualizacion.distribucion_nps.promoters}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                      width: `${(data.datos_visualizacion.distribucion_nps.promoters / data.resumen_ejecutivo.total_participantes) * 100}%`,
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    Passives
                  </span>
                  <span className="font-semibold">{data.datos_visualizacion.distribucion_nps.passives}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-500 h-2 rounded-full"
                    style={{
                      width: `${(data.datos_visualizacion.distribucion_nps.passives / data.resumen_ejecutivo.total_participantes) * 100}%`,
                    }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    Detractors
                  </span>
                  <span className="font-semibold">{data.datos_visualizacion.distribucion_nps.detractors}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{
                      width: `${(data.datos_visualizacion.distribucion_nps.detractors / data.resumen_ejecutivo.total_participantes) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparación de Áreas */}
          <Card>
            <CardHeader>
              <CardTitle>Comparación por Áreas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {data.datos_visualizacion.comparacion_areas
                  .sort((a, b) => b.valor - a.valor)
                  .map((area, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm flex-1 truncate pr-2">{area.area}</span>
                      <span className="text-sm font-medium mr-2">{area.valor}</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(area.valor / 5) * 100}%` }} />
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer con estadísticas adicionales */}
        <Card className="bg-gray-100">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{data.metadata.total_respuestas}</div>
                <div className="text-sm text-gray-600">Total Respuestas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{data.metadata.areas_analizadas}</div>
                <div className="text-sm text-gray-600">Áreas Analizadas</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">
                  {data.datos_visualizacion.tendencias.areas_excelentes.length}
                </div>
                <div className="text-sm text-gray-600">Áreas Excelentes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">
                  {data.datos_visualizacion.tendencias.areas_criticas.length}
                </div>
                <div className="text-sm text-gray-600">Áreas Críticas</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
