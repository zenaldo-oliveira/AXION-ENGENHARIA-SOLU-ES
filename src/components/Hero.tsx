import { useState } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { WhatsAppButton } from './WhatsAppButton'
import { TechGrid } from './TechGrid'
import { TechDots } from './TechDots'
import { WHATSAPP_GENERIC_MESSAGE } from '../lib/whatsapp'
import { trackEvent } from '../lib/analytics'

const trustPoints = ['Atendimento profissional', 'Orçamento', 'Soluções residenciais e comerciais']

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const [videoFailed, setVideoFailed] = useState(false)

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-svh items-center overflow-hidden border-b border-line bg-ink px-6 py-24 text-center sm:py-28"
    >
      {videoFailed ? (
        <>
          {/* fallback — mesmo fundo sintético usado quando o vídeo não está disponível */}
          <TechGrid opacityClassName="opacity-30" />
          <TechDots />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-green/[0.12] blur-[130px]"
            animate={
              shouldReduceMotion ? undefined : { opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }
            }
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-1/2 h-[380px] w-[380px] translate-x-1/2 translate-y-1/3 rounded-full bg-steel/[0.06] blur-[140px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_35%,var(--color-ink)_92%)]"
          />
        </>
      ) : (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          >
            <source src="/videos/axion-obra.mp4" type="video/mp4" />
          </video>
          {/* overlays — legibilidade sobre o vídeo sem escondê-lo */}
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-ink/55" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/45 to-ink/15"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-br from-green-deep/25 via-transparent to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(ellipse_at_center,transparent_35%,var(--color-ink)_88%)]"
          />
        </>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-3xl"
      >
        <motion.span
          variants={itemVariants}
          className="font-display text-sm font-bold uppercase tracking-[0.35em] text-fg/85 sm:text-base"
        >
          AXI<span className="text-green">O</span>N
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="mt-4 font-display text-4xl font-bold uppercase leading-[1.1] tracking-[-0.01em] text-fg sm:text-6xl lg:text-7xl"
        >
          Serviços para sua casa,
          <br /> empresa ou comércio.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-7 max-w-xl text-lg text-steel sm:text-xl"
        >
          Elétrica, automação, ar-condicionado, hidráulica, reformas, pintura, drywall e pequenos
          reparos.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <WhatsAppButton
            message={WHATSAPP_GENERIC_MESSAGE}
            location="hero"
            label="Solicitar orçamento pelo WhatsApp"
            variant="primary"
          />
          <a
            href="#servicos"
            onClick={() => trackEvent('click_cta', { location: 'hero' })}
            className="text-sm font-medium text-steel underline-offset-4 transition hover:text-fg hover:underline"
          >
            Ver serviços
          </a>
        </motion.div>

        <motion.ul
          variants={itemVariants}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs uppercase tracking-wide text-steel-dim"
        >
          {trustPoints.map((point, index) => (
            <li key={point} className="flex items-center gap-3">
              {index > 0 && <span aria-hidden className="h-1 w-1 rounded-full bg-line" />}
              {point}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  )
}
