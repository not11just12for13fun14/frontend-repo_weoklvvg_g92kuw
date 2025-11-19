import { useState } from 'react'
import { ShoppingBag, Sparkles, Menu } from 'lucide-react'

export default function Navbar({ onCartOpen }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="inline-flex items-center gap-2 text-white">
            <div className="p-2 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 shadow-[0_0_20px_rgba(236,72,153,.5)]">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-semibold tracking-tight">E‑Gifts</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200">
            <a href="#gifts" className="hover:text-white transition">Подарки</a>
            <a href="#how" className="hover:text-white transition">Как это работает</a>
            <a href="#reviews" className="hover:text-white transition">Отзывы</a>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={onCartOpen} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition">
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Корзина</span>
            </button>
            <button className="md:hidden p-2 text-white" onClick={() => setOpen(v=>!v)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <nav className="flex flex-col gap-3 text-slate-200">
              <a href="#gifts" className="hover:text-white" onClick={()=>setOpen(false)}>Подарки</a>
              <a href="#how" className="hover:text-white" onClick={()=>setOpen(false)}>Как это работает</a>
              <a href="#reviews" className="hover:text-white" onClick={()=>setOpen(false)}>Отзывы</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
