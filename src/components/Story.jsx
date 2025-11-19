import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Phone, Gift, Sparkles, Heart } from 'lucide-react'

const container = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' }
  })
}

function Scene({ index, kicker, title, text, media, accent = 'from-pink-500 to-violet-500' }){
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.4, once: true })
  const prefersReducedMotion = useReducedMotion()

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="order-2 lg:order-1">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.05 }}
          className={`inline-flex items-center gap-2 text-xs tracking-widest uppercase text-white/80 px-3 py-1 rounded-full bg-gradient-to-r ${accent} bg-clip-text text-transparent border border-white/10`}
        >
          Этап {index}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-3 text-2xl sm:text-3xl font-semibold text-white"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-3 text-slate-300"
        >
          {text}
        </motion.p>
        {kicker && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/90"
          >
            {kicker}
          </motion.div>
        )}
      </div>

      <div className="order-1 lg:order-2">
        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          custom={0}
          className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-slate-900/40"
        >
          {/* media overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
          {/* image */}
          <motion.img
            src={media.src}
            alt={media.alt}
            className="w-full h-full object-cover"
            initial={{ scale: prefersReducedMotion ? 1 : 1.04, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
          {/* subtle glow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className={`absolute -inset-6 pointer-events-none rounded-[2rem] blur-3xl opacity-20 bg-gradient-to-br ${accent}`}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default function Story(){
  return (
    <section id="story" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            История одного подарка
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-slate-300 max-w-2xl mx-auto"
          >
            Он выбирает идею с теплом, оформляет за пару кликов — и она получает цифровой подарок с эффектом «вау».
          </motion.p>
        </div>

        <div className="space-y-20">
          <Scene
            index={1}
            title="Он листает подборку и находит то самое"
            text="Лёгкая прокрутка, живые карточки и честные отзывы помогают быстро определиться."
            kicker={<span className="inline-flex items-center gap-2"><Phone className="w-4 h-4" /> в дороге с телефона</span>}
            media={{
              src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop',
              alt: 'Мужчина выбирает подарок в телефоне'
            }}
            accent="from-violet-500 to-indigo-500"
          />

          <Scene
            index={2}
            title="Добавляет в корзину и оформляет заказ"
            text="Персонализирует послание, указывает адресат — остальное мы берём на себя."
            kicker={<span className="inline-flex items-center gap-2"><Gift className="w-4 h-4" /> мгновенная доставка</span>}
            media={{
              src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
              alt: 'Оформление цифрового подарка'
            }}
            accent="from-pink-500 to-violet-500"
          />

          <Scene
            index={3}
            title="Она получает ссылку‑сюрприз"
            text="Сообщение прилетает красиво: с обложкой, анимацией и тёплыми словами."
            kicker={<span className="inline-flex items-center gap-2"><Sparkles className="w-4 h-4" /> кинематографический эффект</span>}
            media={{
              src: 'https://images.unsplash.com/photo-1758874089961-e52549c294c3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwlRDAlOTQlRDAlQjUlRDAlQjIlRDElODMlRDElODglRDAlQkElRDAlQjAlMjAlRDAlQkYlRDAlQkUlRDAlQkIlRDElODMlRDElODclRDAlQjAlRDAlQjUlRDElODIlMjAlRDElODYlRDAlQjglRDElODQlRDElODAlRDAlQkUlRDAlQjIlRDAlQkUlRDAlQjklMjAlRDAlQkYlRDAlQkUlRDAlQjQlRDAlQjAlRDElODAlRDAlQkUlRDAlQkF8ZW58MHwwfHx8MTc2MzU4NDM3MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
              alt: 'Девушка получает цифровой подарок'
            }}
            accent="from-amber-400 to-pink-500"
          />

          <div className="relative rounded-3xl border border-white/10 bg-slate-800/40 p-8 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative z-10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-white text-2xl font-semibold">Финал: улыбка и сердечко</h3>
                  <p className="text-slate-300 mt-2">Цифровой подарок сохраняется у неё, а эмоции — у вас обоих.</p>
                </div>
                <a href="#gifts" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-br from-pink-500 to-violet-500 text-white font-medium shadow-[0_0_30px_rgba(236,72,153,.35)] hover:shadow-[0_0_45px_rgba(236,72,153,.5)] transition">
                  <Heart className="w-4 h-4" /> Выбрать подарок
                </a>
              </div>
            </motion.div>
            <div className="absolute -inset-10 opacity-20 blur-3xl bg-gradient-to-br from-pink-500 to-violet-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
