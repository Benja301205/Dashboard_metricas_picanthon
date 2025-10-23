import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, MessageSquare, BarChart3, Sparkles, ArrowRight, Calendar, MapPin } from "lucide-react"

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
