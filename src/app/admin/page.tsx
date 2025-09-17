'use client'

import { useState, useEffect } from 'react'
import { 
  SunIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  StarIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  EyeIcon,
  TrashIcon
} from '@heroicons/react/24/outline'
import { 
  StarIcon as StarSolidIcon,
  PhoneIcon as PhoneSolidIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link'

interface Lead {
  id: string
  name: string
  phone: string
  email?: string
  municipality?: string
  electricBill?: string
  timeframe?: string
  source: 'consultation' | 'phone_call' | 'forum'
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  timestamp: number
  notes?: string
}

interface PhoneCall {
  id: string
  name: string
  phone: string
  requestedAt: number
  status: 'pending' | 'called' | 'completed' | 'no_answer'
  callAttempts: number
  notes?: string
}

interface ForumPost {
  id: string
  author: string
  title: string
  content: string
  category: string
  timestamp: number
  replies: number
  isModerated: boolean
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [leads, setLeads] = useState<Lead[]>([])
  const [phoneCalls, setPhoneCalls] = useState<PhoneCall[]>([])
  const [forumPosts, setForumPosts] = useState<ForumPost[]>([])

  const ADMIN_PASSWORD = 'Poesie509$'

  useEffect(() => {
    // Check if already authenticated in this session
    const authStatus = sessionStorage.getItem('admin-authenticated')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin-authenticated', 'true')
      setShowError(false)
    } else {
      setShowError(true)
      setPassword('')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    sessionStorage.removeItem('admin-authenticated')
    setPassword('')
  }

  useEffect(() => {
    if (!isAuthenticated) return
    // Load sample data - in production, fetch from your backend
    const sampleLeads: Lead[] = [
      {
        id: '1',
        name: 'Carlos Martínez',
        phone: '(787) 123-4567',
        email: 'carlos@email.com',
        municipality: 'San Juan',
        electricBill: '$300-500',
        timeframe: '1-3 meses',
        source: 'consultation',
        status: 'new',
        timestamp: Date.now() - 3600000,
      },
      {
        id: '2',
        name: 'María López',
        phone: '(787) 987-6543',
        source: 'phone_call',
        status: 'contacted',
        timestamp: Date.now() - 7200000,
        notes: 'Interesada en sistema de 8kW'
      },
      {
        id: '3',
        name: 'José Rivera',
        phone: '(787) 555-0123',
        email: 'jose.rivera@email.com',
        municipality: 'Bayamón',
        source: 'consultation',
        status: 'qualified',
        timestamp: Date.now() - 86400000,
      }
    ]

    const samplePhoneCalls: PhoneCall[] = [
      {
        id: '1',
        name: 'Ana Rodríguez',
        phone: '(787) 444-5555',
        requestedAt: Date.now() - 1800000,
        status: 'pending',
        callAttempts: 0
      },
      {
        id: '2',
        name: 'Luis Pérez',
        phone: '(787) 666-7777',
        requestedAt: Date.now() - 3600000,
        status: 'called',
        callAttempts: 1,
        notes: 'Dejé mensaje de voz'
      }
    ]

    const sampleForumPosts: ForumPost[] = [
      {
        id: '1',
        author: 'Carlos M.',
        title: '¿Vale la pena instalar paneles solares en Bayamón?',
        content: 'Estoy considerando instalar paneles solares...',
        category: 'preguntas',
        timestamp: Date.now() - 86400000,
        replies: 3,
        isModerated: true
      },
      {
        id: '2',
        author: 'Usuario Anónimo',
        title: 'OFERTA ESPECIAL - Paneles baratos!!!',
        content: 'Vendemos paneles solares súper baratos...',
        category: 'experiencias',
        timestamp: Date.now() - 3600000,
        replies: 0,
        isModerated: false
      }
    ]

    setLeads(sampleLeads)
    setPhoneCalls(samplePhoneCalls)
    setForumPosts(sampleForumPosts)
  }, [isAuthenticated])

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="flex justify-center">
              <SunIcon className="h-12 w-12 text-yellow-500" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Acceso de Administrador
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              PlacasPR Dashboard
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-lg"
                placeholder="Ingresa la contraseña de administrador"
              />
            </div>

            {showError && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <p className="text-sm text-red-800">
                  ❌ Contraseña incorrecta. Intenta de nuevo.
                </p>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                🔐 Acceder al Dashboard
              </button>
            </div>

            <div className="text-center">
              <Link href="/" className="text-blue-600 hover:text-blue-500 text-sm">
                ← Volver al sitio principal
              </Link>
            </div>
          </form>
        </div>
      </div>
    )
  }

  const formatTimeAgo = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days} día${days > 1 ? 's' : ''} atrás`
    if (hours > 0) return `${hours} hora${hours > 1 ? 's' : ''} atrás`
    return 'Hace poco'
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': case 'pending': return 'bg-yellow-100 text-yellow-800'
      case 'contacted': case 'called': return 'bg-blue-100 text-blue-800'
      case 'qualified': case 'completed': return 'bg-green-100 text-green-800'
      case 'closed': case 'no_answer': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const updateLeadStatus = (leadId: string, newStatus: Lead['status']) => {
    setLeads(leads.map(lead => 
      lead.id === leadId ? { ...lead, status: newStatus } : lead
    ))
  }

  const updateCallStatus = (callId: string, newStatus: PhoneCall['status']) => {
    setPhoneCalls(calls => calls.map(call => 
      call.id === callId ? { ...call, status: newStatus, callAttempts: call.callAttempts + 1 } : call
    ))
  }

  const moderatePost = (postId: string) => {
    setForumPosts(posts => posts.map(post => 
      post.id === postId ? { ...post, isModerated: true } : post
    ))
  }

  const deletePost = (postId: string) => {
    setForumPosts(posts => posts.filter(post => post.id !== postId))
  }

  const stats = {
    totalLeads: leads.length,
    newLeads: leads.filter(l => l.status === 'new').length,
    pendingCalls: phoneCalls.filter(c => c.status === 'pending').length,
    unmoderatedPosts: forumPosts.filter(p => !p.isModerated).length
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <SunIcon className="h-8 w-8 text-yellow-500 mr-2" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">PlacasPR Admin</h1>
                <p className="text-sm text-gray-600">Panel de administración</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                ← Volver al sitio
              </Link>
              <button 
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 text-sm font-medium"
              >
                🔓 Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 rounded-full p-3">
                <UserGroupIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Leads</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalLeads}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 rounded-full p-3">
                <ClockIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Leads Nuevos</p>
                <p className="text-2xl font-bold text-gray-900">{stats.newLeads}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-green-100 rounded-full p-3">
                <PhoneSolidIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Llamadas Pendientes</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingCalls}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-red-100 rounded-full p-3">
                <EyeIcon className="h-6 w-6 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Posts sin Moderar</p>
                <p className="text-2xl font-bold text-gray-900">{stats.unmoderatedPosts}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6" aria-label="Tabs">
              {[
                { id: 'overview', name: 'Vista General', icon: ChartBarIcon },
                { id: 'leads', name: 'Leads', icon: UserGroupIcon },
                { id: 'calls', name: 'Llamadas', icon: PhoneIcon },
                { id: 'forum', name: 'Foros', icon: StarIcon },
                { id: 'settings', name: 'Configuración', icon: Cog6ToothIcon }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Vista General</h2>
                
                {/* Recent Activity */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Leads Recientes</h3>
                    <div className="space-y-3">
                      {leads.slice(0, 3).map((lead) => (
                        <div key={lead.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{lead.name}</p>
                            <p className="text-sm text-gray-600">{lead.phone}</p>
                          </div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(lead.status)}`}>
                            {lead.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Llamadas Pendientes</h3>
                    <div className="space-y-3">
                      {phoneCalls.filter(c => c.status === 'pending').map((call) => (
                        <div key={call.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{call.name}</p>
                            <p className="text-sm text-gray-600">{call.phone}</p>
                          </div>
                          <p className="text-xs text-gray-500">{formatTimeAgo(call.requestedAt)}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'leads' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Gestión de Leads</h2>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Exportar CSV
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contacto
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Información
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fuente
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Estado
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Fecha
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {leads.map((lead) => (
                        <tr key={lead.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                              <div className="text-sm text-gray-500">{lead.phone}</div>
                              {lead.email && <div className="text-sm text-gray-500">{lead.email}</div>}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <div>
                              {lead.municipality && <div>📍 {lead.municipality}</div>}
                              {lead.electricBill && <div>💡 {lead.electricBill}</div>}
                              {lead.timeframe && <div>⏰ {lead.timeframe}</div>}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {lead.source === 'consultation' && '📋 Consulta'}
                            {lead.source === 'phone_call' && '📞 Llamada'}
                            {lead.source === 'forum' && '💬 Foro'}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <select
                              value={lead.status}
                              onChange={(e) => updateLeadStatus(lead.id, e.target.value as Lead['status'])}
                              className={`px-2 py-1 rounded-full text-xs font-medium border-0 ${getStatusColor(lead.status)}`}
                            >
                              <option value="new">Nuevo</option>
                              <option value="contacted">Contactado</option>
                              <option value="qualified">Calificado</option>
                              <option value="closed">Cerrado</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatTimeAgo(lead.timestamp)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-blue-600 hover:text-blue-900 mr-3">
                              Ver detalles
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'calls' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Gestión de Llamadas</h2>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Contacto
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Solicitada
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Estado
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Intentos
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {phoneCalls.map((call) => (
                        <tr key={call.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{call.name}</div>
                              <div className="text-sm text-gray-500">{call.phone}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatTimeAgo(call.requestedAt)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <select
                              value={call.status}
                              onChange={(e) => updateCallStatus(call.id, e.target.value as PhoneCall['status'])}
                              className={`px-2 py-1 rounded-full text-xs font-medium border-0 ${getStatusColor(call.status)}`}
                            >
                              <option value="pending">Pendiente</option>
                              <option value="called">Llamado</option>
                              <option value="completed">Completado</option>
                              <option value="no_answer">Sin respuesta</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {call.callAttempts}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-green-600 hover:text-green-900 mr-3">
                              📞 Llamar
                            </button>
                            <button className="text-blue-600 hover:text-blue-900">
                              Notas
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'forum' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Moderación de Foros</h2>

                <div className="space-y-4">
                  {forumPosts.map((post) => (
                    <div key={post.id} className={`border rounded-lg p-4 ${post.isModerated ? 'bg-white' : 'bg-yellow-50 border-yellow-200'}`}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{post.title}</h3>
                          <p className="text-sm text-gray-600">Por {post.author} • {formatTimeAgo(post.timestamp)}</p>
                        </div>
                        <div className="flex gap-2">
                          {!post.isModerated && (
                            <>
                              <button
                                onClick={() => moderatePost(post.id)}
                                className="text-green-600 hover:text-green-900 text-sm"
                              >
                                <CheckCircleIcon className="h-5 w-5" />
                              </button>
                              <button
                                onClick={() => deletePost(post.id)}
                                className="text-red-600 hover:text-red-900 text-sm"
                              >
                                <TrashIcon className="h-5 w-5" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-2">{post.content}</p>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <span>Categoría: {post.category}</span>
                        <span>{post.replies} respuestas</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-900">Configuración</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Configuración de Llamadas</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Tiempo de respuesta prometido (minutos)
                        </label>
                        <input type="number" defaultValue="30" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Horario de atención
                        </label>
                        <input type="text" defaultValue="Lunes a Viernes 8AM-6PM" className="w-full px-3 py-2 border border-gray-300 rounded-md" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Notificaciones</h3>
                    <div className="space-y-4">
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-2" />
                        <span className="text-sm text-gray-700">Email por nuevo lead</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-2" />
                        <span className="text-sm text-gray-700">SMS por llamada urgente</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="mr-2" />
                        <span className="text-sm text-gray-700">Email diario con resumen</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}