import { motion } from 'framer-motion'
import { ShieldCheck, Rocket } from 'lucide-react'

export default function HowItWorks(){
  const steps = [
    {title:'Выбираете подарок', text:'Игра, бот‑напоминалка или цифровая открытка', icon: Rocket},
    {title:'Оформляете заказ', text:'Мы персонализируем и отправим ссылку получателю', icon: ShieldCheck},
    {title:'Вау‑эффект', text:'Красивая подача, плавные анимации и тёплые эмоции', icon: ShieldCheck},
  ]
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">Как это работает</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s,i)=>{
            const Icon = s.icon
            return (
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}} className="rounded-2xl border border-white/10 bg-slate-800/50 p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold">{s.title}</h3>
                <p className="text-slate-300 mt-2">{s.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
