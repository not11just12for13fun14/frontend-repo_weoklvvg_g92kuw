import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll()
  const prefersReducedMotion = useReducedMotion()

  // Translate values based on scroll progress (0 -> 1)
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -120])
  const yMed = useTransform(scrollYProgress, [0, 1], [0, -220])
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -340])
  const xDrift = useTransform(scrollYProgress, [0, 1], [0, 80])

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
    </div>
  )
}
