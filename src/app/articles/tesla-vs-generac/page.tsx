import { SunIcon, BoltIcon, ShieldCheckIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { AmazonButton, HomeDepotButton } from '@/components/AffiliateLink'

const batteryComparison = {
  tesla: {
    name: 'Tesla Powerwall 3',
    capacity: '13.5 kWh',
    power: '11.5 kW',
    price: '$11,500 - $15,000',
    warranty: '10 años',
    efficiency: '97.5%',
    pros: [
      'Mayor capacidad de almacenamiento',
      'Tecnología probada de Tesla',
      'Integración perfecta con paneles Tesla',
      'App móvil avanzada',
      'Diseño elegante y compacto',
      'Instalación todo-en-uno'
    ],
    cons: [
      'Precio premium',
      'Lista de espera larga',
      'Instaladores certificados limitados en PR',
      'Requiere instalación profesional especializada'
    ],
    bestFor: 'Casas grandes con alto consumo eléctrico',
    amazonUrl: 'https://amazon.com/tesla-powerwall-battery',
    homeDepotUrl: 'https://homedepot.com/tesla-powerwall'
  },
  generac: {
    name: 'Generac PWRcell M6',
    capacity: '18 kWh',
    power: '9 kW',
    price: '$12,000 - $16,000',
    warranty: '10 años',
    efficiency: '96.5%',
    pros: [
      'Capacidad expandible (hasta 36 kWh)',
      'Más instaladores certificados en PR',
      'Sistema modular flexible',
      'Respaldo completo de la casa',
      'Tecnología americana',
      'Mejor disponibilidad'
    ],
    cons: [
      'Menos potencia de salida',
      'Diseño menos elegante',
      'App menos sofisticada',
      'Requiere más espacio de instalación'
    ],
    bestFor: 'Familias que quieren expandir capacidad gradualmente',
    amazonUrl: 'https://amazon.com/generac-pwrcell-battery',
    homeDepotUrl: 'https://homedepot.com/generac-pwrcell'
  }
}

export default function TeslaVsGeneracArticle() {
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
            <span>Comparaciones</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tesla Powerwall vs Generac PWRcell: ¿Cuál elegir en Puerto Rico?
          </h1>
          
          <div className="flex items-center text-gray-600 mb-6">
            <span>Actualizado: 12 enero 2025</span>
            <span className="mx-2">•</span>
            <span>6 min de lectura</span>
            <span className="mx-2">•</span>
            <span>Por el equipo de PlacasPR</span>
          </div>
          
          <p className="text-xl text-gray-700 leading-relaxed">
            Con la temporada de huracanes siendo una realidad anual en Puerto Rico, 
            elegir la batería solar correcta puede ser la diferencia entre tener electricidad 
            o quedarse a oscuras. Comparamos las dos opciones más populares del mercado.
          </p>
        </div>

        {/* Quick Comparison */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-blue-900 mb-3">
            ⚡ Comparación Rápida
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-blue-800">
            <div>
              <strong>Tesla Powerwall 3:</strong>
              <ul className="mt-1 space-y-1">
                <li>• 13.5 kWh, 11.5 kW</li>
                <li>• $11,500 - $15,000</li>
                <li>• Mejor para: casas con Tesla Solar</li>
              </ul>
            </div>
            <div>
              <strong>Generac PWRcell M6:</strong>
              <ul className="mt-1 space-y-1">
                <li>• 18 kWh, 9 kW</li>
                <li>• $12,000 - $16,000</li>
                <li>• Mejor para: máxima capacidad expandible</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <h2>¿Por qué necesitas una batería solar en Puerto Rico?</h2>
          
          <p>
            Puerto Rico enfrenta desafíos únicos en su red eléctrica: apagones frecuentes, 
            tarifas altas y la amenaza constante de huracanes. Una batería solar no solo 
            te da independencia energética, sino que puede ser literalmente un salvavidas 
            durante emergencias.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 my-6">
            <div className="flex">
              <ExclamationTriangleIcon className="h-6 w-6 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-yellow-900 font-medium">Consideraciones para Huracanes</h3>
                <ul className="text-yellow-800 mt-2 text-sm">
                  <li>• <strong>Duración del respaldo:</strong> ¿Cuántos días puedes funcionar sin red?</li>
                  <li>• <strong>Cargas esenciales:</strong> Refrigerador, luces, médicos, comunicación</li>
                  <li>• <strong>Recarga solar:</strong> Capacidad de recargar durante el día</li>
                  <li>• <strong>Instalación resistente:</strong> Sistema que resista vientos fuertes</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Tesla Powerwall 3: El Elegante</h2>
          
          <p>
            Tesla revolucionó las baterías domésticas con el Powerwall original, 
            y la versión 3 mantiene esa reputación de innovación y diseño superior.
          </p>
        </div>

        {/* Tesla Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
              <BoltIcon className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{batteryComparison.tesla.name}</h3>
              <p className="text-gray-600">La batería premium de Tesla</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Especificaciones</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Capacidad:</strong> {batteryComparison.tesla.capacity}</li>
                <li><strong>Potencia:</strong> {batteryComparison.tesla.power}</li>
                <li><strong>Eficiencia:</strong> {batteryComparison.tesla.efficiency}</li>
                <li><strong>Garantía:</strong> {batteryComparison.tesla.warranty}</li>
                <li><strong>Precio:</strong> {batteryComparison.tesla.price}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">✅ Ventajas</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {batteryComparison.tesla.pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mt-0.5 mr-2">•</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">❌ Desventajas</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {batteryComparison.tesla.cons.map((con, index) => (
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
            <p className="text-gray-700">{batteryComparison.tesla.bestFor}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <AmazonButton 
              productUrl={batteryComparison.tesla.amazonUrl}
              className="flex-1 text-center justify-center"
            />
            <HomeDepotButton 
              productUrl={batteryComparison.tesla.homeDepotUrl}
              className="flex-1 text-center justify-center"
            />
            <Link
              href="/consultation"
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-center font-medium hover:bg-blue-700 transition-colors"
            >
              📞 Consulta Gratis
            </Link>
          </div>
        </div>

        {/* Generac Section */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
              <ShieldCheckIcon className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{batteryComparison.generac.name}</h3>
              <p className="text-gray-600">Sistema modular expandible</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Especificaciones</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li><strong>Capacidad:</strong> {batteryComparison.generac.capacity}</li>
                <li><strong>Potencia:</strong> {batteryComparison.generac.power}</li>
                <li><strong>Eficiencia:</strong> {batteryComparison.generac.efficiency}</li>
                <li><strong>Garantía:</strong> {batteryComparison.generac.warranty}</li>
                <li><strong>Precio:</strong> {batteryComparison.generac.price}</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">✅ Ventajas</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {batteryComparison.generac.pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mt-0.5 mr-2">•</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">❌ Desventajas</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                {batteryComparison.generac.cons.map((con, index) => (
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
            <p className="text-gray-700">{batteryComparison.generac.bestFor}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <AmazonButton 
              productUrl={batteryComparison.generac.amazonUrl}
              className="flex-1 text-center justify-center"
            />
            <HomeDepotButton 
              productUrl={batteryComparison.generac.homeDepotUrl}
              className="flex-1 text-center justify-center"
            />
            <Link
              href="/consultation"
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-center font-medium hover:bg-blue-700 transition-colors"
            >
              📞 Consulta Gratis
            </Link>
          </div>
        </div>

        {/* Detailed Comparison */}
        <div className="prose prose-lg max-w-none">
          <h2>Comparación Detallada por Categorías</h2>

          <h3>🔋 Capacidad y Potencia</h3>
          <p>
            <strong>Ganador: Empate con ventajas diferentes</strong>
          </p>
          <ul>
            <li><strong>Tesla:</strong> 13.5 kWh con 11.5 kW de potencia. Ideal para cargas que requieren mucha potencia instantánea (AC, bombas, equipos médicos).</li>
            <li><strong>Generac:</strong> 18 kWh con 9 kW de potencia. Mejor para duración prolongada pero con menor potencia pico.</li>
          </ul>

          <h3>💰 Precio y Valor</h3>
          <p>
            <strong>Ganador: Generac (por capacidad por dólar)</strong>
          </p>
          <ul>
            <li><strong>Tesla:</strong> ~$850-$1,110 por kWh</li>
            <li><strong>Generac:</strong> ~$665-$890 por kWh</li>
          </ul>

          <h3>🏠 Instalación en Puerto Rico</h3>
          <p>
            <strong>Ganador: Generac</strong>
          </p>
          <ul>
            <li><strong>Tesla:</strong> Requiere instaladores certificados de Tesla (limitados en PR)</li>
            <li><strong>Generac:</strong> Más instaladores locales certificados disponibles</li>
          </ul>

          <h3>📱 Tecnología y Monitoreo</h3>
          <p>
            <strong>Ganador: Tesla</strong>
          </p>
          <ul>
            <li><strong>Tesla:</strong> App móvil superior, integración perfecta con paneles Tesla</li>
            <li><strong>Generac:</strong> App funcional pero menos sofisticada</li>
          </ul>

          <h3>🌀 Resistencia a Huracanes</h3>
          <p>
            <strong>Ganador: Empate</strong>
          </p>
          <p>
            Ambos sistemas están diseñados para resistir condiciones extremas cuando se instalan correctamente. 
            La diferencia está en la disponibilidad de instaladores que conocen las regulaciones locales de PR.
          </p>
        </div>

        {/* Scenarios */}
        <div className="bg-gray-50 rounded-lg p-6 my-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Escenarios de Uso Real</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg font-semibold text-blue-600 mb-3">
                📊 Familia de 4 en Guaynabo
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Consumo:</strong> 900 kWh/mes</li>
                <li><strong>Prioridades:</strong> AC, refrigerador, internet</li>
                <li><strong>Recomendación:</strong> Tesla Powerwall</li>
                <li><strong>Razón:</strong> Necesita alta potencia para AC central</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <h3 className="text-lg font-semibold text-orange-600 mb-3">
                🏡 Casa de Playa en Rincón
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li><strong>Consumo:</strong> 600 kWh/mes</li>
                <li><strong>Prioridades:</strong> Refrigerador, luces, ventiladores</li>
                <li><strong>Recomendación:</strong> Generac PWRcell</li>
                <li><strong>Razón:</strong> Mayor capacidad para varios días sin sol</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Decision Guide */}
        <div className="prose prose-lg max-w-none">
          <h2>¿Cómo Decidir?</h2>
          
          <p>
            <strong>Elige Tesla Powerwall si:</strong>
          </p>
          <ul>
            <li>Ya tienes o planeas instalar paneles Tesla</li>
            <li>Necesitas alta potencia para equipos como AC central</li>
            <li>Valoras la tecnología y diseño premium</li>
            <li>Tu instalador local está certificado por Tesla</li>
          </ul>

          <p>
            <strong>Elige Generac PWRcell si:</strong>
          </p>
          <ul>
            <li>Quieres máxima capacidad de almacenamiento</li>
            <li>Planeas expandir el sistema en el futuro</li>
            <li>Prefieres trabajar con instaladores locales</li>
            <li>Buscas mejor valor por kWh almacenado</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
            <h3 className="text-blue-900 font-semibold mb-3">💡 Consejo del Experto</h3>
            <p className="text-blue-800">
              Independientemente de cuál elijas, asegúrate de que tu instalador:</p>
            <ul className="text-blue-800 mt-2">
              <li>• Esté certificado por el fabricante</li>
              <li>• Conozca las regulaciones eléctricas de PR</li>
              <li>• Ofrezca garantía de instalación</li>
              <li>• Tenga experiencia con huracanes</li>
            </ul>
          </div>

          <h2>Conclusión</h2>
          
          <p>
            Tanto Tesla como Generac ofrecen excelentes soluciones de respaldo, 
            pero para diferentes necesidades. Si buscas máximo rendimiento y tienes 
            paneles Tesla, el Powerwall es difícil de superar. Si quieres máxima 
            capacidad y flexibilidad, Generac PWRcell es tu mejor opción.
          </p>

          <p>
            Lo más importante es instalar <em>algún</em> sistema de respaldo antes 
            de la próxima temporada de huracanes. La tranquilidad de tener electricidad 
            cuando la necesites no tiene precio.
          </p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-center text-white my-12">
          <h2 className="text-2xl font-bold mb-4">
            ¿No estás seguro cuál batería es mejor para tu hogar?
          </h2>
          <p className="text-blue-100 mb-6">
            Nuestros expertos pueden evaluar tu consumo eléctrico, presupuesto y necesidades 
            específicas para recomendarte la mejor solución de respaldo.
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
            <Link href="/articles/mejores-placas-solares-2025" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mejores Placas Solares en Puerto Rico 2025
              </h3>
              <p className="text-gray-600">
                Descubre cuáles paneles solares funcionan mejor en el clima tropical.
              </p>
            </Link>
            
            <Link href="/articles/preparacion-huracanes-solar" className="block bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Preparar tu Sistema Solar para Huracanes
              </h3>
              <p className="text-gray-600">
                Consejos esenciales para proteger tu inversión solar.
              </p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8 text-sm text-gray-600">
          <p>
            <strong>Divulgación:</strong> Este artículo contiene enlaces de afiliados. 
            Si compras a través de estos enlaces, podríamos recibir una comisión sin costo adicional para ti. 
            Nuestras comparaciones son independientes y basadas en especificaciones del fabricante y experiencia real.
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