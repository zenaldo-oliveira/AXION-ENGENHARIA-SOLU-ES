import { useState } from 'react'
import { motion, type Variants } from 'framer-motion'
import { WhatsAppButton } from './WhatsAppButton'
import { WHATSAPP_GENERIC_MESSAGE } from '../lib/whatsapp'
import { trackEvent } from '../lib/analytics'
import { attendants } from '../data/attendants'
import { useAttendant } from '../context/attendant-context'

const trustPoints = ['Atendimento profissional', 'Orçamento', 'Soluções residenciais e comerciais']

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Hero() {
  const [videoFailed, setVideoFailed] = useState(false)
  const { attendant } = useAttendant()
  const phoneNumber = attendants[attendant].whatsappNumber

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-svh items-center overflow-hidden border-b border-line bg-ink px-6 py-24 text-center sm:py-28"
    >
      {!videoFailed && (
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
      )}

      {/* fundo — vídeo real quando disponível, gradiente sóbrio como base/fallback */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 -z-10 ${
          videoFailed ? 'bg-linear-to-b from-surface to-ink' : ''
        }`}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/55 to-ink/20"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-3xl"
      >
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl font-bold uppercase leading-[1.1] tracking-[-0.01em] text-fg sm:text-6xl lg:text-7xl"
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
            phoneNumber={phoneNumber}
            message={WHATSAPP_GENERIC_MESSAGE}
            location="hero"
            attendant={attendant}
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
