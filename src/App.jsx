import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gifts from './components/Gifts'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import Cart from './components/Cart'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  const handleAdd = (gift) => {
    setCart(prev => {
      const ex = prev.find(i => i.slug === gift.slug)
      if (ex) return prev.map(i => i.slug===gift.slug ? { ...i, qty: (i.qty||1) + 1 } : i)
      return [...prev, { ...gift, qty: 1 }]
    })
    setCartOpen(true)
  }

  const checkout = async (total) => {
    const payload = {
      items: cart.map(i => ({ gift_slug: i.slug, title: i.title, price: i.price, quantity: i.qty || 1 })),
      customer: { name: 'Demo Buyer', email: 'demo@example.com', note_for_recipient: 'Ты самая лучшая 💖' },
      total,
      status: 'pending'
    }
    try {
      const r = await fetch(`${API_BASE}/api/orders`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await r.json()
      alert(data.message || 'Заказ принят! #' + (data.order_id || 'demo'))
    } catch(e) {
      alert('Ошибка оформления заказа')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_-10%,rgba(236,72,153,.25),transparent_40%),radial-gradient(circle_at_80%_-10%,rgba(124,58,237,.25),transparent_40%)]"/>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <main className="pt-16">
        <Hero />
        <Gifts onAdd={handleAdd} />
        <HowItWorks />
        <Testimonials />
      </main>
      {cartOpen && (
        <Cart items={cart} onClose={() => setCartOpen(false)} onCheckout={checkout} />
      )}
      <footer className="py-10 text-center text-slate-400">© 2025 E‑Gifts. Сделано с любовью.</footer>
    </div>
  )
}

export default App
