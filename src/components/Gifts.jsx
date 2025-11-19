import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ShoppingCart, Star } from 'lucide-react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Gifts({ onAdd }) {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/gifts`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id="gifts" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Подборка подарков</h2>
          <p className="text-slate-300">С плавными эффектами и любовью</p>
        </div>

        {loading ? (
          <p className="text-slate-300">Загрузка...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((g, i) => (
              <motion.div key={g.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-800/50 hover:bg-slate-800/70 transition"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={g.cover} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-semibold">{g.title}</h3>
                    {g.rating && (
                      <span className="inline-flex items-center gap-1 text-amber-300 text-sm">
                        <Star className="w-4 h-4 fill-amber-300" /> {g.rating}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 text-sm mt-1">{g.tagline}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-white font-semibold">{g.price.toFixed(2)}$</div>
                    <button onClick={() => onAdd(g)} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition">
                      <ShoppingCart className="w-4 h-4" /> В корзину
                    </button>
                  </div>
                </div>
                {g.badge && (
                  <span className="absolute top-3 left-3 px-2 py-1 rounded-md text-xs bg-gradient-to-br from-pink-500 to-violet-500 text-white shadow">{g.badge}</span>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
