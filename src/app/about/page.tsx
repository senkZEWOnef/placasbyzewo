import { SunIcon, CheckIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function AboutPage() {
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
              <Link href="/articles" className="text-gray-500 hover:text-gray-900">Artículos</Link>
              <Link href="/about" className="text-blue-600 font-medium">Acerca</Link>
              <Link href="/consultation" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Consulta Gratis
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Acerca de PlacasPR
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Tu guía confiable para tomar las mejores decisiones sobre energía solar en Puerto Rico
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <SunIcon className="h-8 w-8 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
          </div>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl leading-relaxed">
              En PlacasPR, creemos que cada familia en Puerto Rico merece acceso a energía limpia, 
              confiable y económica. Después de huracanes devastadores y con las tarifas eléctricas 
              más altas de Estados Unidos, la energía solar no es solo una opción inteligente - 
              es una necesidad.
            </p>
            
            <p>
              Nuestra misión es simplificar el proceso de adopción solar mediante contenido educativo 
              de alta calidad, comparaciones objetivas de productos, y conexiones con instaladores 
              locales certificados que entienden las necesidades únicas de nuestra isla.
            </p>
          </div>
        </section>

        {/* Why Puerto Rico */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ¿Por qué nos enfocamos en Puerto Rico?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Desafíos Únicos</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  Tarifas eléctricas entre las más altas de EE.UU.
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  Red eléctrica vulnerable a huracanes
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  Clima tropical con alta humedad y sal
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  Regulaciones locales específicas
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Oportunidades Increíbles</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  300+ días de sol al año
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  Incentivos federales del 30%
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  Net metering disponible
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  ROI potencial de 6-8 años
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Lo Que Ofrecemos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Reseñas Imparciales
              </h3>
              <p className="text-gray-600">
                Análisis objetivos de paneles solares, inversores y baterías específicamente 
                para las condiciones de Puerto Rico.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Red de Instaladores
              </h3>
              <p className="text-gray-600">
                Conexiones con instaladores certificados que conocen las regulaciones 
                locales y tienen experiencia con huracanes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Soporte Continuo
              </h3>
              <p className="text-gray-600">
                Guías de mantenimiento, preparación para huracanes, y actualizaciones 
                sobre incentivos y regulaciones.
              </p>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nuestro Compromiso Contigo
          </h2>
          
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <CheckIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Transparencia Total</h3>
                <p>Divulgamos claramente nuestras relaciones de afiliados y nos compensamos solo cuando te ayudamos a encontrar la solución correcta.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Investigación Rigurosa</h3>
                <p>Cada recomendación está respaldada por investigación detallada, pruebas reales y experiencia local.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Enfoque Local</h3>
                <p>Todo nuestro contenido considera las condiciones específicas de Puerto Rico - desde el clima hasta los incentivos locales.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckIcon className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900">Sin Presión de Ventas</h3>
                <p>Nuestro objetivo es educarte para que tomes la mejor decisión para tu situación específica, no presionarte a comprar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para Comenzar tu Proyecto Solar?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Obtén una consulta personalizada con nuestros expertos locales
          </p>
          <Link
            href="/consultation"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            📞 Solicitar Consulta Gratuita
          </Link>
        </section>
      </div>

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