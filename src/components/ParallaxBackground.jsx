import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll()
  const prefersReducedMotion = useReducedMotion()

  // Crossfade timeline: whole background is a story
  const s1Opacity = useTransform(scrollYProgress, [0, 0.18, 0.32, 0.45], [1, 1, 0.2, 0])
  const s2Opacity = useTransform(scrollYProgress, [0.28, 0.42, 0.58, 0.72], [0, 1, 1, 0])
  const s3Opacity = useTransform(scrollYProgress, [0.6, 0.74, 1.0], [0, 1, 1])

  // Gentle Ken Burns effect per scene
  const s1Scale = useTransform(scrollYProgress, [0, 0.5], [1.06, 1.0])
  const s2Scale = useTransform(scrollYProgress, [0.35, 0.85], [1.03, 1.0])
  const s3Scale = useTransform(scrollYProgress, [0.7, 1.0], [1.05, 1.0])

  // Parallax glow layers
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -140])
  const yMed = useTransform(scrollYProgress, [0, 1], [0, -260])
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -380])

  // Reduced motion fallbacks
  const rmOpacity = prefersReducedMotion ? 0.9 : undefined
  const rmScale = prefersReducedMotion ? 1.0 : undefined

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* FULL-BLEED STORY SCENES */}
      {/* Scene 1: He explores and chooses */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: prefersReducedMotion ? rmOpacity : s1Opacity }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1920&auto=format&fit=crop"
          alt="Молодой человек выбирает подарок в телефоне"
          className="w-full h-full object-cover"
          style={{ scale: prefersReducedMotion ? rmScale : s1Scale }}
        />
        {/* Readability vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(0,0,0,0)_0%,rgba(2,6,23,0.45)_60%,rgba(2,6,23,0.75)_100%)]" />
      </motion.div>

      {/* Scene 2: Checkout and send */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: prefersReducedMotion ? 0 : s2Opacity }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1920&auto=format&fit=crop"
          alt="Оформление цифрового подарка"
          className="w-full h-full object-cover"
          style={{ scale: prefersReducedMotion ? rmScale : s2Scale }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_45%,rgba(0,0,0,0)_0%,rgba(2,6,23,0.45)_60%,rgba(2,6,23,0.78)_100%)]" />
      </motion.div>

      {/* Scene 3: She receives and smiles */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: prefersReducedMotion ? 0 : s3Opacity }}
      >
        <motion.img
          src="https://images.unsplash.com/photo-1758874089961-e52549c294c3?auto=format&fit=crop&w=1920&q=80"
          alt="Девушка получает цифровой подарок на телефон"
          className="w-full h-full object-cover"
          style={{ scale: prefersReducedMotion ? rmScale : s3Scale }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_55%,rgba(0,0,0,0)_0%,rgba(2,6,23,0.45)_60%,rgba(2,6,23,0.8)_100%)]" />
      </motion.div>

      {/* COLOR GLOW + GRID for premium depth (below content readability) */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : ySlow }}
        className="absolute -inset-40"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/60 to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_80%_-10%,rgba(236,72,153,0.18),transparent),radial-gradient(700px_360px_at_20%_0%,rgba(124,58,237,0.16),transparent)] mix-blend-screen" />
      </motion.div>

      <motion.div
        style={{ y: prefersReducedMotion ? 0 : yMed }}
        className="absolute inset-0 opacity-[0.08]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: '80px 80px',
            backgroundPosition: '0 0, 0 0',
            maskImage: 'radial-gradient(ellipse at center, black 62%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 62%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* Subtle bottom fade to ensure footer readability */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
    </div>
  )
}
