'use client'

import { useState, useEffect } from 'react'
import { PhoneIcon, XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'

interface PhoneCallPopupProps {
  trigger?: 'automatic' | 'manual'
  delay?: number
}

export default function PhoneCallPopup({ trigger = 'automatic', delay = 30000 }: PhoneCallPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  useEffect(() => {
    if (trigger === 'automatic') {
      // Check if user has already seen the popup today
      const popupShown = localStorage.getItem('popup-shown-today')
      const today = new Date().toDateString()
      
      if (popupShown !== today) {
        const timer = setTimeout(() => {
          setIsVisible(true)
        }, delay)
        
        return () => clearTimeout(timer)
      }
    }
  }, [trigger, delay])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return

    // Save the lead data (in a real app, send to your backend/CRM)
    console.log('Phone call request:', formData)
    
    // Mark as submitted
    setIsSubmitted(true)
    
    // Mark popup as shown for today
    const today = new Date().toDateString()
    localStorage.setItem('popup-shown-today', today)
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      handleClose()
    }, 3000)
  }

  const handleClose = () => {
    setIsVisible(false)
    setIsSubmitted(false)
    setFormData({ name: '', phone: '' })
    
    // Mark popup as shown for today
    const today = new Date().toDateString()
    localStorage.setItem('popup-shown-today', today)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative animate-pulse-scale">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-t-2xl px-6 py-6 text-center">
                <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <PhoneIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  📞 ¿Prefieres Hablar por Teléfono?
                </h3>
                <p className="text-green-100">
                  Te llamamos en los próximos 30 minutos
                </p>
              </div>

              {/* Form */}
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="popup-name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tu nombre
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="popup-name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej: Carlos Martínez"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="popup-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="popup-phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(787) 123-4567"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    📞 Solicitar Llamada Ahora
                  </button>
                </form>

                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-600">
                    🚀 <strong>Llamada gratuita</strong> • Sin compromiso • Expertos locales
                  </p>
                </div>
              </div>
            </>
          ) : (
            // Success State
            <div className="p-8 text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                ¡Perfecto!
              </h3>
              <p className="text-gray-600 mb-4">
                Te llamaremos al <strong>{formData.phone}</strong> en los próximos 30 minutos.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  📱 Mantén tu teléfono cerca<br />
                  ⏰ Horario: Lunes a Viernes 8AM-6PM
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-scale {
          0% {
            transform: scale(0.95);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-pulse-scale {
          animation: pulse-scale 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

// Floating Call Button Component
export function FloatingCallButton() {
  const [showPopup, setShowPopup] = useState(false)

  const handleClick = () => {
    console.log('Floating button clicked') // Debug log
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 z-40 animate-bounce-subtle flex items-center gap-2"
        aria-label="Solicitar llamada"
      >
        <PhoneIcon className="h-5 w-5" />
        <span className="text-sm font-semibold whitespace-nowrap">Solicitar Llamada</span>
      </button>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 relative animate-pulse-scale">
            {/* Close Button */}
            <button
              onClick={handleClosePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <ManualPhoneCallForm onClose={handleClosePopup} />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -5px, 0);
          }
          70% {
            transform: translate3d(0, -3px, 0);
          }
          90% {
            transform: translate3d(0, -2px, 0);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
        @keyframes pulse-scale {
          0% {
            transform: scale(0.95);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-pulse-scale {
          animation: pulse-scale 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

// Separate component for the manual popup form
function ManualPhoneCallForm({ onClose }: { onClose: () => void }) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.phone) return

    // Save the lead data (in a real app, send to your backend/CRM)
    console.log('Manual phone call request:', formData)
    
    // Mark as submitted
    setIsSubmitted(true)
    
    // Auto-close after 3 seconds
    setTimeout(() => {
      onClose()
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (isSubmitted) {
    return (
      <div className="p-8 text-center">
        <div className="bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <CheckIcon className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          ¡Perfecto!
        </h3>
        <p className="text-gray-600 mb-4">
          Te llamaremos al <strong>{formData.phone}</strong> en los próximos 30 minutos.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-800">
            📱 Mantén tu teléfono cerca<br />
            ⏰ Horario: Lunes a Viernes 8AM-6PM
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-t-2xl px-6 py-6 text-center">
        <div className="bg-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
          <PhoneIcon className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          📞 ¿Prefieres Hablar por Teléfono?
        </h3>
        <p className="text-green-100">
          Te llamamos en los próximos 30 minutos
        </p>
      </div>

      {/* Form */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="manual-name" className="block text-sm font-semibold text-gray-700 mb-2">
              Tu nombre
            </label>
            <input
              type="text"
              name="name"
              id="manual-name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Ej: Carlos Martínez"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="manual-phone" className="block text-sm font-semibold text-gray-700 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              name="phone"
              id="manual-phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(787) 123-4567"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-0 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
          >
            📞 Solicitar Llamada Ahora
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600">
            🚀 <strong>Llamada gratuita</strong> • Sin compromiso • Expertos locales
          </p>
        </div>
      </div>
    </>
  )
}