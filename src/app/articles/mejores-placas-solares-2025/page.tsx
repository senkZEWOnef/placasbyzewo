import { SunIcon, CheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import Link from 'next/link'

const solarPanels = [
  {
    rank: 1,
    brand: 'SunPower',
    model: 'Maxeon 6 AC',
    efficiency: '22.8%',
    warranty: '25 años',
    price: '$350-400',
    priceRange: '$$$',
    rating: 4.8,
    pros: [
      'Mayor eficiencia del mercado',
      'Garantía completa más larga',
      'Excelente en climas cálidos',
      'Micro-inversores incluidos'
    ],
    cons: [
      'Precio premium',
      'Disponibilidad limitada en PR'
    ],
    bestFor: 'Techos pequeños que necesitan máxima eficiencia',
    amazonLink: 'https://amazon.com/sunpower-solar-panels',
    homeDepotLink: 'https://homedepot.com/sunpower'
  },
  {
    rank: 2,
    brand: 'LG',
    model: 'NeON R Prime',
    efficiency: '22.0%',
    warranty: '25 años',
    price: '$280-320',
    priceRange: '$$',
    rating: 4.7,
    pros: [
      'Excelente relación calidad-precio',
      'Alta eficiencia',
      'Buena disponibilidad',
      'Resistente a condiciones extremas'
    ],
    cons: [
      'LG salió del mercado solar (stock limitado)',
      'Servicio post-venta incierto'
    ],
    bestFor: 'Balance entre precio y rendimiento',
    amazonLink: 'https://amazon.com/lg-solar-panels',
    homeDepotLink: 'https://homedepot.com/lg-solar'
  },
  {
    rank: 3,
    brand: 'REC',
    model: 'Alpha Pure-R',
    efficiency: '21.9%',
    warranty: '20 años',
    price: '$260-300',
    priceRange: '$$',
    rating: 4.6,
    pros: [
      'Tecnología heterojunction',
      'Buen precio para la calidad',
      'Disponible en Puerto Rico',
      'Coeficiente de temperatura bajo'
    ],
    cons: [
      'Garantía más corta que competidores',
      'Marca menos conocida'
    ],
    bestFor: 'Instalaciones medianas a grandes',
    amazonLink: 'https://amazon.com/rec-solar-panels',
    homeDepotLink: 'https://homedepot.com/rec'
  },
  {
    rank: 4,
    brand: 'Canadian Solar',
    model: 'HiKu6 Mono',
    efficiency: '20.9%',
    warranty: '15 años',
    price: '$200-240',
    priceRange: '$',
    rating: 4.4,
    pros: [
      'Precio muy competitivo',
      'Amplia disponibilidad',
      'Buena durabilidad',
      'Ideal para proyectos grandes'
    ],
    cons: [
      'Eficiencia menor',
      'Garantía estándar',
      'Estética básica'
    ],
    bestFor: 'Proyectos con presupuesto ajustado',
    amazonLink: 'https://amazon.com/canadian-solar',
    homeDepotLink: 'https://homedepot.com/canadian-solar'
  },
  {
    rank: 5,
    brand: 'Jinko Solar',
    model: 'Tiger Neo',
    efficiency: '21.2%',
    warranty: '15 años',
    price: '$210-250',
    priceRange: '$',
    rating: 4.3,
    pros: [
      'Buena eficiencia por el precio',
      'Tecnología PERC',
      'Disponibilidad global',
      'Mejoras en degradación'
    ],
    cons: [
      'Garantía básica',
      'Marca china (posibles aranceles)'
    ],
    bestFor: 'Instalaciones residenciales estándar',
    amazonLink: 'https://amazon.com/jinko-solar',
    homeDepotLink: 'https://homedepot.com/jinko'
  }
]

function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIconSolid
          key={star}
          className={`h-5 w-5 ${
            rating >= star ? 'text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
    </div>
  )
}

export default function BestSolarPanelsArticle() {
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
              <Link href="/about" className="text-gray-500 hover:text-gray-900">Acerca</Link>
              <Link href="/consultation" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Consulta Gratis
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <Link href="/articles" className="hover:text-blue-600">Artículos</Link>
            <span className="mx-2">›</span>
            <span>Guías de Compra</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Las 5 Mejores Placas Solares en Puerto Rico (2025)
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <span>Actualizado: 15 enero 2025</span>
            <span className="mx-2">•</span>
            <span>8 min de lectura</span>
            <span className="mx-2">•</span>
            <span>Por el equipo de PlacasPR</span>
          </div>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            Elegir las placas solares correctas es crucial para maximizar tu inversión en Puerto Rico. 
            Hemos analizado docenas de modelos considerando eficiencia, precio, disponibilidad local 
            y resistencia a condiciones tropicales. Aquí están nuestras recomendaciones para 2025.
          </p>
        </div>

        {/* Quick Summary Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">
            📋 Resumen Ejecutivo
          </h2>
          <ul className="text-blue-800 space-y-2">
            <li><strong>Mejor en general:</strong> SunPower Maxeon 6 AC (máxima eficiencia)</li>
            <li><strong>Mejor valor:</strong> REC Alpha Pure-R (balance precio-calidad)</li>
            <li><strong>Más económico:</strong> Canadian Solar HiKu6 (ideal para presupuestos ajustados)</li>
            <li><strong>Para techos pequeños:</strong> SunPower o LG (mayor eficiencia por m²)</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2>¿Por qué importa elegir bien en Puerto Rico?</h2>
          
          <p>
            Puerto Rico presenta desafíos únicos para los paneles solares: temperaturas altas constantes, 
            humedad extrema, sal del océano y huracanes ocasionales. Los paneles que funcionan bien en 
            Arizona podrían no ser ideales aquí.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
            <div className="flex">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-yellow-900 font-medium">Consideraciones para el Clima Tropical</h3>
                <ul className="text-yellow-800 mt-2 text-sm">
                  <li>• <strong>Coeficiente de temperatura:</strong> Paneles que mantienen eficiencia en calor</li>
                  <li>• <strong>Resistencia a corrosión:</strong> Marcos y conexiones resistentes a sal</li>
                  <li>• <strong>Certificaciones:</strong> IEC 61215 y UL 1703 mínimo</li>
                  <li>• <strong>Garantía extendida:</strong> Importante por condiciones adversas</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Metodología de Evaluación</h2>
          
          <p>
            Evaluamos cada panel basado en 6 criterios clave:
          </p>
          
          <ul>
            <li><strong>Eficiencia</strong> (25%): Producción de energía por m²</li>
            <li><strong>Precio</strong> (20%): Costo por vatio instalado</li>
            <li><strong>Garantía</strong> (20%): Años de cobertura completa</li>
            <li><strong>Disponibilidad</strong> (15%): Facilidad para conseguir en PR</li>
            <li><strong>Durabilidad</strong> (10%): Resistencia a condiciones tropicales</li>
            <li><strong>Soporte</strong> (10%): Servicio post-venta local</li>
          </ul>
        </div>

        {/* Solar Panels Comparison */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comparación Detallada</h2>
          
          {solarPanels.map((panel) => (
            <div key={panel.rank} className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4">
                    #{panel.rank}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{panel.brand} {panel.model}</h3>
                    <Rating rating={panel.rating} />
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900">{panel.price}</span>
                  <div className="text-sm text-gray-500">por panel</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Especificaciones</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><strong>Eficiencia:</strong> {panel.efficiency}</li>
                    <li><strong>Garantía:</strong> {panel.warranty}</li>
                    <li><strong>Rango de precio:</strong> {panel.priceRange}</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Ventajas</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {panel.pros.map((pro, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">❌ Desventajas</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {panel.cons.map((con, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mt-0.5 mr-2">•</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">🎯 Mejor para:</h4>
                <p className="text-gray-700">{panel.bestFor}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={panel.amazonLink}
                  target="_blank"
                  rel="nofollow noopener"
                  className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-md text-center font-medium hover:bg-orange-600 transition-colors"
                >
                  🛒 Ver en Amazon
                </a>
                <a
                  href={panel.homeDepotLink}
                  target="_blank"
                  rel="nofollow noopener"
                  className="flex-1 bg-orange-600 text-white px-4 py-2 rounded-md text-center font-medium hover:bg-orange-700 transition-colors"
                >
                  🏠 Ver en Home Depot
                </a>
                <Link
                  href="/consultation"
                  className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-center font-medium hover:bg-blue-700 transition-colors"
                >
                  📞 Consulta Gratis
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Content */}
        <div className="prose prose-lg max-w-none">
          <h2>Factores Específicos para Puerto Rico</h2>
          
          <h3>1. Resistencia a Huracanes</h3>
          <p>
            Aunque los paneles modernos están diseñados para vientos de hasta 140+ mph, 
            es crucial que el sistema de montaje esté certificado para estas condiciones. 
            SunPower y REC tienen los mejores historiales en zonas propensas a huracanes.
          </p>

          <h3>2. Degradación por Calor</h3>
          <p>
            En Puerto Rico, las temperaturas de los paneles pueden alcanzar 65-70°C. 
            Los paneles con coeficientes de temperatura más bajos (como LG y SunPower) 
            mantienen mejor su eficiencia en estas condiciones.
          </p>

          <h3>3. Disponibilidad Local</h3>
          <p>
            Canadian Solar y Jinko tienen la mejor distribución en la isla, 
            lo que significa instalación más rápida y servicio más accesible. 
            SunPower puede requerir pedidos especiales.
          </p>

          <h2>¿Cuántos paneles necesito?</h2>
          
          <p>
            Para una casa promedio en Puerto Rico (consumo de 800-1000 kWh/mes), 
            típicamente necesitas:
          </p>
          
          <ul>
            <li><strong>Con paneles de alta eficiencia (SunPower, LG):</strong> 16-20 paneles</li>
            <li><strong>Con paneles estándar (Canadian Solar, Jinko):</strong> 20-25 paneles</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-blue-900 font-semibold mb-3">💡 Consejo del Experto</h3>
            <p className="text-blue-800">
              No te enfoques solo en el precio por panel. Considera el costo por kWh producido 
              durante 25 años. Un panel más caro pero más eficiente puede resultar más económico 
              a largo plazo, especialmente si tienes espacio limitado en el techo.
            </p>
          </div>

          <h2>Próximos Pasos</h2>
          
          <p>
            Una vez que tengas una idea de qué tipo de panel te conviene, 
            el siguiente paso es obtener cotizaciones de instaladores locales certificados. 
            Cada instalación es única y factores como orientación del techo, 
            sombreado y condiciones eléctricas existentes afectarán tu decisión final.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white my-12">
          <h2 className="text-2xl font-bold mb-4">
            ¿Necesitas ayuda decidiendo qué paneles son mejores para tu hogar?
          </h2>
          <p className="text-blue-100 mb-6">
            Nuestros expertos locales pueden hacer un análisis personalizado de tu techo, 
            consumo eléctrico y presupuesto para recomendarte la mejor opción.
          </p>
          <Link
            href="/consultation"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            📞 Consulta Gratuita Personalizada
          </Link>
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Artículos Relacionados</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/articles/costo-placas-solares" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ¿Cuánto Cuestan las Placas Solares en Puerto Rico?
              </h3>
              <p className="text-gray-600">
                Guía completa de precios, financiamiento e incentivos disponibles.
              </p>
            </Link>
            
            <Link href="/articles/tesla-vs-generac" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Tesla Powerwall vs Generac: ¿Cuál elegir?
              </h3>
              <p className="text-gray-600">
                Comparación de las mejores baterías solares para Puerto Rico.
              </p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8 text-sm text-gray-600">
          <p>
            <strong>Divulgación:</strong> Este artículo contiene enlaces de afiliados. 
            Si compras a través de estos enlaces, podríamos recibir una comisión sin costo adicional para ti. 
            Esto nos ayuda a mantener PlacasPR gratuito y actualizado. Nuestras recomendaciones son independientes 
            y basadas en investigación objetiva.
          </p>
        </div>
      </article>

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
    </div>
  )
}