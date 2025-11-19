import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(236,72,153,0.35),transparent),radial-gradient(800px_400px_at_20%_0%,rgba(124,58,237,0.35),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div className="grid lg:grid-cols-2 items-center gap-12">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl font-bold tracking-tight text-white"
            >
              Электронные подарки, которые говорят «ты самая лучшая»
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .1, duration: .6 }}
              className="mt-5 text-lg text-slate-200"
            >
              Игры, милые боты‑напоминалки и цифровые открытки с кинематографическими анимациями.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2, duration: .6 }}
              className="mt-8 flex items-center gap-3"
            >
              <a href="#gifts" className="px-5 py-3 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 text-white font-medium shadow-[0_0_30px_rgba(236,72,153,.4)] hover:shadow-[0_0_45px_rgba(236,72,153,.55)] transition">Выбрать подарок</a>
              <a href="#how" className="px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">Как это работает</a>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: .9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: .8, ease: 'easeOut' }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-transparent to-violet-500/20" />
              <img src="https://images.unsplash.com/photo-1514790193030-c89d266d5a9d?q=80&w=1600&auto=format&fit=crop" alt="Gift preview" className="w-full h-full object-cover mix-blend-luminosity" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
