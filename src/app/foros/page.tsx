'use client'

import { useState, useEffect } from 'react'
import { SunIcon, ChatBubbleLeftIcon, UserIcon, ClockIcon, PlusIcon } from '@heroicons/react/24/outline'
import { ChatBubbleLeftIcon as ChatBubbleLeftSolidIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import PhoneCallPopup, { FloatingCallButton } from '@/components/PhoneCallPopup'

interface Post {
  id: string
  author: string
  title: string
  content: string
  category: string
  timestamp: number
  replies: Reply[]
}

interface Reply {
  id: string
  author: string
  content: string
  timestamp: number
}

const categories = [
  {
    id: 'experiencias',
    name: 'Experiencias y Reseñas',
    description: 'Comparte tu experiencia con paneles solares, instaladores y sistemas',
    icon: '⭐',
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 'preguntas',
    name: 'Preguntas y Respuestas',
    description: 'Haz preguntas sobre energía solar y ayuda a otros con tus conocimientos',
    icon: '❓',
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'instaladores',
    name: 'Instaladores y Empresas',
    description: 'Recomendaciones y experiencias con instaladores locales',
    icon: '🔧',
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'tecnologia',
    name: 'Tecnología y Productos',
    description: 'Discusiones sobre marcas, tipos de paneles, baterías y más',
    icon: '⚡',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'incentivos',
    name: 'Incentivos y Financiamiento',
    description: 'Información sobre créditos fiscales, programas y opciones de pago',
    icon: '💰',
    color: 'bg-emerald-100 text-emerald-800'
  }
]

export default function ForosPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showNewPostForm, setShowNewPostForm] = useState(false)
  const [newPost, setNewPost] = useState({
    author: '',
    title: '',
    content: '',
    category: 'preguntas'
  })

  useEffect(() => {
    const savedPosts = localStorage.getItem('forum-posts')
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts))
    } else {
      // Sample posts for demonstration
      const samplePosts: Post[] = [
        {
          id: '1',
          author: 'Carlos M.',
          title: '¿Vale la pena instalar paneles solares en Bayamón?',
          content: 'Estoy considerando instalar paneles solares en mi casa en Bayamón. Mi factura eléctrica promedio es $300 al mes. ¿Alguien tiene experiencia en esta área?',
          category: 'preguntas',
          timestamp: Date.now() - 86400000,
          replies: [
            {
              id: 'r1',
              author: 'Ana L.',
              content: 'Yo instalé hace 6 meses en Bayamón y ya veo diferencia. Mi factura bajó de $280 a $45. Te recomiendo conseguir varias cotizaciones.',
              timestamp: Date.now() - 82800000
            }
          ]
        },
        {
          id: '2',
          author: 'María R.',
          title: 'Experiencia con SunPower vs. LG - Resultados después de 1 año',
          content: 'Quería compartir mi experiencia después de un año con paneles LG. Estoy muy satisfecha con el rendimiento, especialmente durante los meses de verano.',
          category: 'experiencias',
          timestamp: Date.now() - 172800000,
          replies: []
        }
      ]
      setPosts(samplePosts)
      localStorage.setItem('forum-posts', JSON.stringify(samplePosts))
    }
  }, [])

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPost.title || !newPost.content || !newPost.author) return

    const post: Post = {
      id: Date.now().toString(),
      author: newPost.author,
      title: newPost.title,
      content: newPost.content,
      category: newPost.category,
      timestamp: Date.now(),
      replies: []
    }

    const updatedPosts = [post, ...posts]
    setPosts(updatedPosts)
    localStorage.setItem('forum-posts', JSON.stringify(updatedPosts))
    
    setNewPost({ author: '', title: '', content: '', category: 'preguntas' })
    setShowNewPostForm(false)
  }

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  const formatTimeAgo = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const days = Math.floor(hours / 24)

    if (days > 0) return `${days} día${days > 1 ? 's' : ''}`
    if (hours > 0) return `${hours} hora${hours > 1 ? 's' : ''}`
    return 'Hace poco'
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
              <Link href="/consultation" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Consulta Gratis
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                💬 Foros de Energía Solar
              </h1>
              <p className="text-lg text-gray-600">
                Comparte experiencias, haz preguntas y aprende de la comunidad solar de Puerto Rico
              </p>
            </div>
            <button
              onClick={() => setShowNewPostForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
            >
              <PlusIcon className="h-5 w-5" />
              Nuevo Post
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Todos los temas
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorías</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.id} className="border-l-4 border-blue-200 pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{category.icon}</span>
                      <h4 className="font-medium text-gray-900 text-sm">{category.name}</h4>
                    </div>
                    <p className="text-xs text-gray-600">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content - Posts */}
          <div className="lg:col-span-3">
            {/* New Post Form */}
            {showNewPostForm && (
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Crear Nuevo Post</h3>
                <form onSubmit={handleSubmitPost} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Tu nombre o apodo
                      </label>
                      <input
                        type="text"
                        value={newPost.author}
                        onChange={(e) => setNewPost({...newPost, author: e.target.value})}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ej: Carlos M."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Categoría
                      </label>
                      <select
                        value={newPost.category}
                        onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Título del post
                    </label>
                    <input
                      type="text"
                      value={newPost.title}
                      onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Ej: ¿Cuál es la mejor marca de paneles solares?"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contenido
                    </label>
                    <textarea
                      value={newPost.content}
                      onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                      rows={4}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Comparte tu pregunta, experiencia o comentario..."
                      required
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                      Publicar
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowNewPostForm(false)}
                      className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Posts List */}
            <div className="space-y-4">
              {filteredPosts.length === 0 ? (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <ChatBubbleLeftIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">
                    {selectedCategory === 'all' 
                      ? 'No hay posts aún. ¡Sé el primero en compartir!' 
                      : 'No hay posts en esta categoría aún.'}
                  </p>
                </div>
              ) : (
                filteredPosts.map((post) => {
                  const category = categories.find(c => c.id === post.category)
                  return (
                    <div key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="bg-gray-100 rounded-full p-2">
                              <UserIcon className="h-4 w-4 text-gray-600" />
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{post.author}</p>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <ClockIcon className="h-3 w-3" />
                                {formatTimeAgo(post.timestamp)}
                              </div>
                            </div>
                          </div>
                          {category && (
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                              {category.icon} {category.name}
                            </span>
                          )}
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.title}</h3>
                        <p className="text-gray-700 mb-4">{post.content}</p>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <ChatBubbleLeftSolidIcon className="h-4 w-4" />
                            {post.replies.length} respuesta{post.replies.length !== 1 ? 's' : ''}
                          </div>
                        </div>

                        {/* Replies */}
                        {post.replies.length > 0 && (
                          <div className="mt-4 pl-4 border-l-2 border-gray-100 space-y-3">
                            {post.replies.map((reply) => (
                              <div key={reply.id} className="bg-gray-50 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <div className="bg-gray-200 rounded-full p-1">
                                    <UserIcon className="h-3 w-3 text-gray-600" />
                                  </div>
                                  <span className="text-sm font-medium text-gray-900">{reply.author}</span>
                                  <span className="text-xs text-gray-500">
                                    {formatTimeAgo(reply.timestamp)}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-700">{reply.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Phone Call Popup - shows after 45 seconds on forums */}
      <PhoneCallPopup trigger="automatic" delay={45000} />
      
      {/* Floating Call Button */}
      <FloatingCallButton />
    </div>
  )
}