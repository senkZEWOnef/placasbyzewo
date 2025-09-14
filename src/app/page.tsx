import { SunIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <SunIcon className="h-8 w-8 text-yellow-500 mr-2" />
              <span className="text-2xl font-bold text-gray-900">PlacasPR</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/articles" className="text-gray-500 hover:text-gray-900">Artículos</Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-900">Acerca</Link>
              <Link href="/consultation" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Consulta Gratis
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ahorra Dinero. <br />
              <span className="text-blue-600">Mantente Energizado</span> en Puerto Rico
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Descubre las mejores placas solares para tu hogar en Puerto Rico. 
              Compara precios, lee reseñas y obtén una consulta gratuita con expertos locales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                📅 Reserva Consulta Gratis
              </Link>
              <Link href="/articles" className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                📖 Ver Artículos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar in PR */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué Solar en Puerto Rico?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Puerto Rico tiene las condiciones perfectas para energía solar, 
              además de los incentivos más atractivos del mercado.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <SunIcon className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">300+ Días de Sol</h3>
              <p className="text-gray-600">
                Puerto Rico recibe más de 300 días de sol al año, perfecto para generar energía solar.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BoltIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Electricidad Cara</h3>
              <p className="text-gray-600">
                Con tarifas eléctricas entre las más altas de EE.UU., el solar te ahorra miles al año.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Incentivos Federales</h3>
              <p className="text-gray-600">
                Crédito fiscal federal del 30% + incentivos locales pueden cubrir hasta 50% del costo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Artículos Destacados
            </h2>
            <p className="text-lg text-gray-600">
              Las mejores guías para tomar decisiones informadas sobre energía solar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-yellow-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Mejores Placas Solares en Puerto Rico 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Comparamos las 5 mejores marcas de paneles solares disponibles en la isla.
                </p>
                <Link href="/articles/mejores-placas-solares-2025" className="text-blue-600 font-semibold hover:text-blue-800">
                  Leer más →
                </Link>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Tesla Powerwall vs Generac PWRcell
                </h3>
                <p className="text-gray-600 mb-4">
                  ¿Cuál es la mejor batería solar para protegerte de huracanes?
                </p>
                <Link href="/articles/tesla-vs-generac" className="text-blue-600 font-semibold hover:text-blue-800">
                  Leer más →
                </Link>
              </div>
            </article>
            
            <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  ¿Cuánto Cuestan las Placas Solares?
                </h3>
                <p className="text-gray-600 mb-4">
                  Guía completa de precios e incentivos disponibles en Puerto Rico.
                </p>
                <Link href="/articles/costo-placas-solares" className="text-blue-600 font-semibold hover:text-blue-800">
                  Leer más →
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para Empezar tu Proyecto Solar?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Obtén una consulta gratuita con nuestros expertos locales en energía solar.
            Sin compromiso. Sin costo. Solo información valiosa.
          </p>
          <Link href="/consultation" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            📞 Reservar Consulta Gratuita
          </Link>
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
            <p className="text-sm mt-2">
              *Los enlaces de productos pueden generar comisiones de afiliados. Ver 
              <Link href="/disclosure" className="text-blue-400 hover:text-blue-300"> divulgación completa</Link>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
