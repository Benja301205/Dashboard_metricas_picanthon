import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, MessageSquare, BarChart3, Sparkles, ArrowRight, Calendar, MapPin, AlertCircle } from "lucide-react"

export default function AlertlyHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-16 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-2xl shadow-lg">
              <MessageSquare className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Alertly
            </span>
          </h1>
          <p className="text-2xl text-gray-700 mb-4 font-medium">
            El oído inteligente que escucha a tus clientes
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transformamos feedback y encuestas en insights accionables usando inteligencia artificial.
            Detectamos automáticamente qué funciona, qué necesita mejorar y qué quieren tus clientes.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 border-purple-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle className="text-xl">Análisis Automático</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Procesamos miles de comentarios y detectamos patrones, sentimientos y tendencias en segundos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle className="text-xl">Insights Accionables</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Identificamos problemas críticos y oportunidades de mejora con recomendaciones claras y priorizadas.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-pink-200 hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="bg-pink-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                <BarChart3 className="h-6 w-6 text-pink-600" />
              </div>
              <CardTitle className="text-xl">Visualización Clara</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Dashboards interactivos que muestran métricas clave, tendencias y comparaciones de forma visual.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Case Study Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 text-sm px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600">
            Casos de Análisis
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Análisis de Feedback: Picanthon
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Analizamos el feedback de las ediciones de Picanthon, la hackathon organizada por Picante,
            para ayudarles a entender qué funcionó y cómo mejorar futuras ediciones.
          </p>
        </div>

        {/* Picanthon Editions Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Edición 1 */}
          <Link href="/picanthon/edicion-1">
            <Card className="h-full border-2 border-green-200 hover:border-green-400 hover:shadow-2xl transition-all cursor-pointer group">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                    Primera Edición
                  </Badge>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-2xl group-hover:text-green-600 transition-colors">
                  Picanthon 2025 🇦🇷
                </CardTitle>
                <CardDescription className="text-base">
                  Primera edición - 14 de junio 2025 - Argentina
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-green-600" />
                    Argentina 🇦🇷
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart3 className="h-4 w-4 mr-2 text-green-600" />
                    29 respuestas analizadas
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                    Sentimiento positivo: 73%
                  </div>
                </div>
                <div className="flex items-center text-green-600 font-medium group-hover:translate-x-2 transition-transform">
                  Ver Dashboard
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Edición 2 */}
          <Link href="/picanthon/edicion-2">
            <Card className="h-full border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all cursor-pointer group">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
                    Segunda Edición
                  </Badge>
                  <Calendar className="h-5 w-5 text-gray-400" />
                </div>
                <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                  Picanthon Uruguay 2025
                </CardTitle>
                <CardDescription className="text-base">
                  Segunda edición - 18 de octubre 2025 - Uruguay
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    Montevideo, Uruguay 🇺🇾
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <BarChart3 className="h-4 w-4 mr-2 text-blue-600" />
                    Análisis completo de feedback
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Sparkles className="h-4 w-4 mr-2 text-blue-600" />
                    Insights y mejoras detectadas
                  </div>
                </div>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                  Ver Dashboard
                  <ArrowRight className="h-4 w-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      {/* Comparative Analysis Section */}
      <section className="container mx-auto px-6 py-16 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl my-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <BarChart3 className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Análisis Comparativo</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Edición 1 🇦🇷 vs Edición 2 🇺🇾
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Evolución del Picanthon entre Argentina y Uruguay: métricas, mejoras y aprendizajes
            </p>
          </div>

          {/* Key Metrics Comparison */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Métricas Clave</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 px-4 text-gray-700 font-semibold">Métrica</th>
                    <th className="py-3 px-4 text-center text-green-700 font-semibold">Ed1 🇦🇷</th>
                    <th className="py-3 px-4 text-center text-blue-700 font-semibold">Ed2 🇺🇾</th>
                    <th className="py-3 px-4 text-center text-gray-700 font-semibold">Δ</th>
                    <th className="py-3 px-4 text-center text-gray-700 font-semibold">Tendencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">Satisfacción Global</td>
                    <td className="py-4 px-4 text-center">4.30/5.00</td>
                    <td className="py-4 px-4 text-center">4.31/5.00</td>
                    <td className="py-4 px-4 text-center text-green-600">+0.01</td>
                    <td className="py-4 px-4 text-center">➡️ Estable</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">Probabilidad de Volver</td>
                    <td className="py-4 px-4 text-center">4.93/5.00</td>
                    <td className="py-4 px-4 text-center">4.56/5.00</td>
                    <td className="py-4 px-4 text-center text-red-600">-0.38</td>
                    <td className="py-4 px-4 text-center">📉 Retroceso</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">Mentores</td>
                    <td className="py-4 px-4 text-center">4.86/5.00</td>
                    <td className="py-4 px-4 text-center">4.89/5.00</td>
                    <td className="py-4 px-4 text-center text-green-600">+0.03</td>
                    <td className="py-4 px-4 text-center">⭐ Excelente</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">MiniGames</td>
                    <td className="py-4 px-4 text-center">3.17/5.00</td>
                    <td className="py-4 px-4 text-center">3.94/5.00</td>
                    <td className="py-4 px-4 text-center text-green-600 font-bold">+0.77</td>
                    <td className="py-4 px-4 text-center">🚀 +24.3%</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">Lugar</td>
                    <td className="py-4 px-4 text-center">4.72/5.00</td>
                    <td className="py-4 px-4 text-center">4.33/5.00</td>
                    <td className="py-4 px-4 text-center text-red-600">-0.39</td>
                    <td className="py-4 px-4 text-center">📉 -8.3%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-4 font-medium">Jueces</td>
                    <td className="py-4 px-4 text-center">4.17/5.00</td>
                    <td className="py-4 px-4 text-center">3.83/5.00</td>
                    <td className="py-4 px-4 text-center text-red-600">-0.34</td>
                    <td className="py-4 px-4 text-center">📉 -8.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* What Improved vs What Got Worse */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Improvements */}
            <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">Lo que Mejoró</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">🚀</span>
                  <div>
                    <p className="font-semibold text-green-900">MiniGames +24.3%</p>
                    <p className="text-sm text-green-700">De "relleno" a solicitud de MÁS</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">📈</span>
                  <div>
                    <p className="font-semibold text-green-900">Consigna +5.7%</p>
                    <p className="text-sm text-green-700">Mayor claridad y mejor balance</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">⭐</span>
                  <div>
                    <p className="font-semibold text-green-900">Mentores (excelencia sostenida)</p>
                    <p className="text-sm text-green-700">El pilar inquebrantable del evento</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Regressions */}
            <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-bold text-red-900">Áreas de Atención</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">⚠️</span>
                  <div>
                    <p className="font-semibold text-red-900">Probabilidad de Volver -7.6%</p>
                    <p className="text-sm text-red-700">Mayor preocupación estratégica</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">📉</span>
                  <div>
                    <p className="font-semibold text-red-900">Lugar -8.3%</p>
                    <p className="text-sm text-red-700">Ergonomía y espacios de descanso</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-1">📉</span>
                  <div>
                    <p className="font-semibold text-red-900">Jueces -8.1%</p>
                    <p className="text-sm text-red-700">Feedback no resuelto persistió</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Key Insights */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Insights Principales</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">🎭 Paradoja del Crecimiento</h4>
                <p className="text-sm text-gray-600">
                  Satisfacción estable pero con mejoras extraordinarias (MiniGames +24%) y retrocesos preocupantes (Retorno -7.6%)
                </p>
              </div>
              <div className="border-l-4 border-amber-500 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">⚠️ Costo de No Escuchar</h4>
                <p className="text-sm text-gray-600">
                  Feedback de jueces solicitado en Ed1, no implementado, empeoró en Ed2. No resolver pain points genera frustración acumulativa
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">🌟 Activo Inquebrantable</h4>
                <p className="text-sm text-gray-600">
                  Los mentores son el ÚNICO elemento que mantiene excelencia sostenida. Son el diferenciador clave del Picanthon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-center text-gray-600 border-t border-gray-200 mt-16">
        <p className="text-sm">
          Powered by <span className="font-semibold text-purple-600">Alertly</span> -
          Transformando feedback en acción con IA
        </p>
      </footer>
    </div>
  )
}
