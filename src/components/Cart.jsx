import { useMemo } from 'react'

export default function Cart({ items, onClose, onCheckout }){
  const total = useMemo(()=> items.reduce((s,i)=> s + i.price * (i.qty||1), 0), [items])
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/50" onClick={onClose} />
      <aside className="w-full sm:w-[420px] h-full bg-slate-900 border-l border-white/10 p-6 overflow-y-auto">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg">Корзина</h3>
          <button onClick={onClose} className="text-slate-300 hover:text-white">Закрыть</button>
        </div>
        <div className="mt-6 space-y-4">
          {items.length === 0 ? (
            <p className="text-slate-300">Пока пусто</p>
          ) : (
            items.map(it => (
              <div key={it.slug} className="flex gap-3">
                <img src={it.cover} alt={it.title} className="w-16 h-16 rounded-lg object-cover border border-white/10" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-medium">{it.title}</p>
                    <span className="text-white/90">{it.price.toFixed(2)}$</span>
                  </div>
                  <p className="text-slate-400 text-sm">Кол-во: {it.qty||1}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
          <span className="text-slate-300">Итого</span>
          <span className="text-white font-semibold">{total.toFixed(2)}$</span>
        </div>
        <button disabled={items.length===0} onClick={()=> onCheckout(total)} className="mt-4 w-full px-4 py-3 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 text-white font-medium disabled:opacity-50">
          Оформить заказ
        </button>
      </aside>
    </div>
  )
}
