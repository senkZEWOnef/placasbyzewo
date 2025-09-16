import { SunIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import PhoneCallPopup, { FloatingCallButton } from '@/components/PhoneCallPopup'

const articles = [
  {
    id: 'mejores-placas-solares-2025',
    title: 'Mejores Placas Solares en Puerto Rico 2025',
    excerpt: 'Comparamos las 5 mejores marcas de paneles solares disponibles en la isla, incluyendo precios, eficiencia y garantías.',
    category: 'Guías de Compra',
    readTime: '8 min',
    date: '15 enero 2025',
    image: 'bg-gradient-to-r from-blue-400 to-yellow-400',
    featured: true
  },
  {
    id: 'tesla-vs-generac',
    title: 'Tesla Powerwall vs Generac PWRcell: ¿Cuál elegir?',
    excerpt: '¿Cuál es la mejor batería solar para protegerte de huracanes? Comparamos capacidad, precio y durabilidad.',
    category: 'Comparaciones',
    readTime: '6 min',
    date: '12 enero 2025',
    image: 'bg-gradient-to-r from-green-400 to-blue-400',
    featured: true
  },
  {
    id: 'costo-placas-solares',
    title: '¿Cuánto Cuestan las Placas Solares en Puerto Rico?',
    excerpt: 'Guía completa de precios e incentivos disponibles en Puerto Rico. Incluye calculadora de costos.',
    category: 'Precios',
    readTime: '10 min',
    date: '10 enero 2025',
    image: 'bg-gradient-to-r from-yellow-400 to-orange-400',
    featured: true
  },
  {
    id: 'incentivos-fiscales-2025',
    title: 'Incentivos Fiscales para Energía Solar 2025',
    excerpt: 'Todo lo que necesitas saber sobre el crédito fiscal federal del 30% y los incentivos locales en Puerto Rico.',
    category: 'Finanzas',
    readTime: '7 min',
    date: '8 enero 2025',
    image: 'bg-gradient-to-r from-purple-400 to-pink-400'
  },
  {
    id: 'preparacion-huracanes-solar',
    title: 'Cómo Preparar tu Sistema Solar para Huracanes',
    excerpt: 'Consejos esenciales para proteger tu inversión solar durante la temporada de huracanes.',
    category: 'Mantenimiento',
    readTime: '5 min',
    date: '5 enero 2025',
    image: 'bg-gradient-to-r from-gray-400 to-blue-400'
  },
  {
    id: 'financiamiento-solar',
    title: 'Opciones de Financiamiento para Energía Solar',
    excerpt: 'Préstamos solares, leasing y PPA: cuál es la mejor opción para tu situación financiera.',
    category: 'Finanzas',
    readTime: '9 min',
    date: '3 enero 2025',
    image: 'bg-gradient-to-r from-indigo-400 to-purple-400'
  }
]

const categories = ['Todos', 'Guías de Compra', 'Comparaciones', 'Precios', 'Finanzas', 'Mantenimiento']

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center">
              <SunIcon className="h-8 w-8 text-yellow-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">PlacasPR</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/articles" className="text-blue-600 font-medium">Artículos</Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-900">Acerca</Link>
              <Link href="/consultation" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Consulta Gratis
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Artículos sobre Energía Solar
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Guías completas, comparaciones detalladas y consejos expertos para ayudarte 
            a tomar las mejores decisiones sobre energía solar en Puerto Rico.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'Todos'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Artículos Destacados</h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {articles.filter(article => article.featured).map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-48 ${article.image}`}></div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-2">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                    <span className="mx-2">•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/articles/${article.id}`} 
                    className="text-blue-600 font-semibold hover:text-blue-800 flex items-center"
                  >
                    Leer artículo completo →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* All Articles */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Todos los Artículos</h2>
          
          <div className="space-y-6">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className={`w-full md:w-32 h-20 rounded-lg ${article.image} flex-shrink-0`}></div>
                  
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium mr-2">
                        {article.category}
                      </span>
                      <span>{article.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3">
                      {article.excerpt}
                    </p>
                    
                    <Link 
                      href={`/articles/${article.id}`} 
                      className="text-blue-600 font-semibold hover:text-blue-800"
                    >
                      Leer más →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Quieres más consejos sobre energía solar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Suscríbete a nuestro newsletter y recibe las últimas guías y ofertas directamente en tu email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <SunIcon className="h-6 w-6 text-yellow-500 mr-2" />
                <span className="text-xl font-bold">PlacasPR</span>
              </div>
              <p className="text-gray-400">
                Tu guía confiable para energía solar en Puerto Rico.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/articles" className="hover:text-white">Artículos</Link></li>
                <li><Link href="/calculadora" className="hover:text-white">Calculadora Solar</Link></li>
                <li><Link href="/instaladores" className="hover:text-white">Instaladores</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Compañía</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/about" className="hover:text-white">Acerca</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contacto</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacidad</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <p className="text-gray-400">
                📧 info@placaspr.com<br />
                📱 (787) 123-4567
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PlacasPR. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Phone Call Popup - shows after reading for 60 seconds */}
      <PhoneCallPopup trigger="automatic" delay={60000} />
      
      {/* Floating Call Button */}
      <FloatingCallButton />
    </div>
  )
}