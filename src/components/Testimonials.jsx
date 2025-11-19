import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Testimonials(){
  const [items, setItems] = useState([])

  useEffect(()=>{
    (async()=>{
      try{
        const r = await fetch(`${API_BASE}/api/testimonials`)
        setItems(await r.json())
      }catch(e){
        console.error(e)
      }
    })()
  },[])

  return (
    <section id="reviews" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Отзывы</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t,i)=> (
            <motion.blockquote key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="rounded-2xl border border-white/10 bg-slate-800/50 p-6 text-slate-200">
              <p className="text-slate-100">“{t.content}”</p>
              <footer className="mt-4 text-sm text-slate-400">{t.author}{t.role ? ` • ${t.role}` : ''}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
