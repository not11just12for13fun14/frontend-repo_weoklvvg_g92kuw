import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll()
  const prefersReducedMotion = useReducedMotion()

  // Translate values based on scroll progress (0 -> 1)
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yMed = useTransform(scrollYProgress, [0, 1], [0, -220])
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -340])
  const xDrift = useTransform(scrollYProgress, [0, 1], [0, 80])

  // Narrative scene fades along the scroll
  const s1Opacity = useTransform(scrollYProgress, [0.0, 0.12, 0.28, 0.36], [0, 0.14, 0.14, 0])
  const s2Opacity = useTransform(scrollYProgress, [0.32, 0.44, 0.62, 0.7], [0, 0.14, 0.14, 0])
  const s3Opacity = useTransform(scrollYProgress, [0.66, 0.78, 0.96, 1.0], [0, 0.16, 0.16, 0])

  // If reduced motion preferred, keep things static
  const maybe = (val) => (prefersReducedMotion ? 0 : val)

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Soft radial wash that moves gently */}
      <motion.div
        style={{ y: maybe(ySlow), x: maybe(xDrift) }}
        className="absolute -inset-40 opacity-80"
      >
        <div className="absolute inset-0 bg-[radial-gradient(1000px_520px_at_80%_-10%,rgba(236,72,153,0.25),transparent),radial-gradient(800px_420px_at_20%_0%,rgba(124,58,237,0.22),transparent)]" />
      </motion.div>

      {/* Floating color blobs with heavy blur for premium glow */}
      <motion.div
        style={{ y: maybe(yMed) }}
        className="absolute top-[-10%] left-[-10%] w-[42rem] h-[42rem] rounded-full bg-pink-500/18 blur-3xl mix-blend-screen"
      />

      <motion.div
        style={{ y: maybe(yFast) }}
        className="absolute bottom-[-15%] right-[-10%] w-[46rem] h-[46rem] rounded-full bg-violet-500/16 blur-3xl mix-blend-screen"
      />

      {/* Subtle moving grid for depth */}
      <motion.div
        style={{ y: maybe(ySlow) }}
        className="absolute inset-0 opacity-[0.08]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: '80px 80px',
            backgroundPosition: '0 0, 0 0',
            maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
          }}
        />
      </motion.div>

      {/* BACKGROUND STORY PANELS */}
      {/* Scene 1: He explores and chooses */}
      <motion.div
        style={{ y: maybe(yMed), opacity: prefersReducedMotion ? 0.1 : s1Opacity }}
        className="absolute top-[8%] left-1/2 -translate-x-[60%] w-[48rem] max-w-[90vw] aspect-[16/9] rounded-[2.2rem] overflow-hidden border border-white/5"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,.6),transparent_30%,rgba(15,23,42,.7))]" />
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          maskImage: 'radial-gradient(90% 70% at 50% 50%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(90% 70% at 50% 50%, black 60%, transparent 100%)'
        }} />
      </motion.div>

      {/* Scene 2: Checkout and send */}
      <motion.div
        style={{ y: maybe(ySlow), opacity: prefersReducedMotion ? 0.1 : s2Opacity }}
        className="absolute top-[46%] right-1/2 translate-x-[40%] w-[50rem] max-w-[92vw] aspect-[16/9] rounded-[2.2rem] overflow-hidden border border-white/5"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,.6),transparent_30%,rgba(15,23,42,.7))]" />
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          maskImage: 'radial-gradient(90% 70% at 50% 50%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(90% 70% at 50% 50%, black 60%, transparent 100%)'
        }} />
      </motion.div>

      {/* Scene 3: She receives and smiles */}
      <motion.div
        style={{ y: maybe(yFast), opacity: prefersReducedMotion ? 0.12 : s3Opacity }}
        className="absolute bottom-[-4%] left-1/2 -translate-x-1/2 w-[54rem] max-w-[94vw] aspect-[16/9] rounded-[2.4rem] overflow-hidden border border-white/5"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,.55),transparent_35%,rgba(15,23,42,.75))]" />
        <img
          src="https://images.unsplash.com/photo-1758874089961-e52549c294c3?auto=format&fit=crop&w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{
          maskImage: 'radial-gradient(90% 70% at 50% 50%, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(90% 70% at 50% 50%, black 60%, transparent 100%)'
        }} />
      </motion.div>
    </div>
  )
}
