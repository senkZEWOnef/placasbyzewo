'use client'

import { useState } from 'react'
import { SunIcon, CheckIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { FloatingCallButton } from '@/components/PhoneCallPopup'

export default function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    municipality: '',
    homeType: '',
    electricBill: '',
    timeframe: '',
    hasRoof: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would typically send the data to your backend/CRM
    console.log('Form submitted:', formData)
    
    // For now, just show success message
    setIsSubmitted(true)
    
    // You could also send to Google Sheets, Airtable, or your CRM here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div>
            <div className="mx-auto h-12 w-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckIcon className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              ¡Consulta Enviada!
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Gracias por tu interés en energía solar. Nuestro socio instalador se pondrá en contacto contigo dentro de 24 horas.
            </p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
            <h3 className="text-lg font-medium text-blue-900 mb-2">
              Mientras tanto...
            </h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Revisa tu email para confirmar tu solicitud</li>
              <li>• Descarga nuestra guía gratuita de preparación</li>
              <li>• Explora nuestros artículos sobre energía solar</li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <Link href="/articles" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              📖 Leer Artículos
            </Link>
            <Link href="/" className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              🏠 Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
            </nav>
          </div>
        </div>
      </header>

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8">
            {/* Left Column - Info */}
            <div className="lg:col-span-5">
              <div className="px-4 sm:px-0">
                <h1 className="text-3xl font-extrabold text-gray-900">
                  Consulta Gratuita de Energía Solar
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                  Obtén un análisis personalizado para tu hogar en Puerto Rico. 
                  Nuestros expertos locales te ayudarán a entender:
                </p>
                
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500 mt-1" />
                    <span className="ml-3 text-gray-700">
                      <strong>Potencial de ahorro:</strong> Cuánto puedes ahorrar en tu factura eléctrica
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500 mt-1" />
                    <span className="ml-3 text-gray-700">
                      <strong>Tamaño del sistema:</strong> Cuántos paneles necesitas para tu consumo
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500 mt-1" />
                    <span className="ml-3 text-gray-700">
                      <strong>Incentivos disponibles:</strong> Créditos fiscales y programas locales
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500 mt-1" />
                    <span className="ml-3 text-gray-700">
                      <strong>Opciones de financiamiento:</strong> Préstamos, leasing y compra directa
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500 mt-1" />
                    <span className="ml-3 text-gray-700">
                      <strong>Protección ante huracanes:</strong> Sistemas de respaldo y baterías
                    </span>
                  </li>
                </ul>

                <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-medium text-blue-900 mb-2">
                    100% Gratis. Sin Compromiso.
                  </h3>
                  <p className="text-blue-700">
                    Esta consulta es completamente gratuita y sin obligación de compra. 
                    Solo queremos ayudarte a tomar la mejor decisión para tu hogar.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="mt-12 lg:mt-0 lg:col-span-7">
              <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-yellow-500 px-6 py-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    🚀 Comienza Tu Proyecto Solar
                  </h3>
                  <p className="text-blue-100">
                    Solo necesitamos tu nombre y teléfono para conectarte con un experto
                  </p>
                </div>
                
                <div className="px-6 py-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Essential Fields */}
                    <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-100">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                        ⭐ Información esencial
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-blue-900 mb-2">
                            Tu nombre *
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ej: Carlos Martínez"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors text-lg"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-blue-900 mb-2">
                            Teléfono *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(787) 123-4567"
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-0 transition-colors text-lg"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Optional Fields */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                        📋 Información adicional (opcional)
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Esto nos ayuda a preparar mejor tu consulta, pero no es obligatorio
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
                          />
                        </div>

                        <div>
                          <label htmlFor="municipality" className="block text-sm font-medium text-gray-700 mb-1">
                            Municipio
                          </label>
                          <select
                            name="municipality"
                            id="municipality"
                            value={formData.municipality}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
                          >
                            <option value="">Selecciona tu municipio</option>
                            <option value="San Juan">San Juan</option>
                            <option value="Bayamón">Bayamón</option>
                            <option value="Carolina">Carolina</option>
                            <option value="Ponce">Ponce</option>
                            <option value="Caguas">Caguas</option>
                            <option value="Guaynabo">Guaynabo</option>
                            <option value="Arecibo">Arecibo</option>
                            <option value="Toa Baja">Toa Baja</option>
                            <option value="Mayagüez">Mayagüez</option>
                            <option value="Otro">Otro</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="electricBill" className="block text-sm font-medium text-gray-700 mb-1">
                            Factura eléctrica mensual
                          </label>
                          <select
                            name="electricBill"
                            id="electricBill"
                            value={formData.electricBill}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
                          >
                            <option value="">Selecciona rango</option>
                            <option value="$0-100">$0 - $100</option>
                            <option value="$100-200">$100 - $200</option>
                            <option value="$200-300">$200 - $300</option>
                            <option value="$300-500">$300 - $500</option>
                            <option value="$500+">$500+</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                            ¿Cuándo instalar?
                          </label>
                          <select
                            name="timeframe"
                            id="timeframe"
                            value={formData.timeframe}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
                          >
                            <option value="">Selecciona</option>
                            <option value="Inmediatamente">Inmediatamente</option>
                            <option value="1-3 meses">1-3 meses</option>
                            <option value="3-6 meses">3-6 meses</option>
                            <option value="6+ meses">6+ meses</option>
                            <option value="Solo investigando">Solo investigando</option>
                          </select>
                        </div>
                      </div>

                      <div className="mt-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Comentarios o preguntas
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          rows={3}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="¿Tienes alguna pregunta específica sobre tu proyecto solar?"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Privacy Notice */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                          <CheckIcon className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-700">
                            <strong>100% Seguro y Confidencial.</strong> Al enviar este formulario, 
                            nuestro instalador certificado se pondrá en contacto contigo dentro de 24 horas.
                          </p>
                          <p className="text-xs text-gray-600 mt-1">
                            Ver <Link href="/privacy" className="text-blue-600 hover:text-blue-500 underline">política de privacidad</Link>.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                    >
                      🚀 Solicitar Mi Consulta Gratuita
                    </button>

                    <p className="text-center text-sm text-gray-500">
                      ⚡ Respuesta en menos de 24 horas • Sin costo • Sin compromiso
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Call Button - no auto popup on consultation page since they're already filling a form */}
      <FloatingCallButton />
    </div>
  )
}