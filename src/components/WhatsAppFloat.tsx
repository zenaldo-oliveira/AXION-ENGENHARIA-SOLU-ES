import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { WhatsAppButton } from './WhatsAppButton'
import { WHATSAPP_GENERIC_MESSAGE } from '../lib/whatsapp'
import { attendants } from '../data/attendants'
import { useAttendant } from '../context/attendant-context'

export function WhatsAppFloat() {
  const [nearFooter, setNearFooter] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)
  const { attendant } = useAttendant()
  const phoneNumber = attendants[attendant].whatsappNumber
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const footer = document.getElementById('site-footer')
    if (!footer) return

    const observer = new IntersectionObserver(([entry]) => setNearFooter(entry.isIntersecting), {
      rootMargin: '0px 0px -10% 0px',
    })
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  // a respiração 3D contínua só começa depois que a entrada (spring) termina
  useEffect(() => {
    const timer = setTimeout(() => setHasEntered(true), prefersReducedMotion ? 0 : 650)
    return () => clearTimeout(timer)
  }, [prefersReducedMotion])

  // "vivo esperando o cliente clicar": respiração 3D contínua, pausada no hover e em prefers-reduced-motion
  const breathe = hasEntered && !prefersReducedMotion && !isHovered

  const containerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.82, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: prefersReducedMotion
        ? { duration: 0.2, ease: 'easeOut' }
        : { type: 'spring', stiffness: 280, damping: 22, mass: 0.9 },
    },
    hiddenNearFooter: {
      opacity: 0,
      scale: 0.9,
      y: 16,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  }

  const tooltipVariants: Variants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: prefersReducedMotion ? 0.12 : 0.18, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={nearFooter ? 'hiddenNearFooter' : 'visible'}
      style={{ pointerEvents: nearFooter ? 'none' : 'auto' }}
      className="fixed bottom-4 left-4 z-50 sm:bottom-6 sm:left-6"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative" style={{ perspective: 600 }}>
        {/* brilho respirando */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-green/40 blur-lg"
          animate={
            breathe
              ? { opacity: [0.35, 0.6, 0.35], scale: [0.92, 1.12, 0.92] }
              : { opacity: 0.25, scale: 0.95 }
          }
          transition={
            breathe
              ? { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.3, ease: 'easeOut' }
          }
        />

        {/* ripple circular sutil — contínuo, só depois da entrada */}
        {breathe && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full border border-green/50"
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{ opacity: [0.4, 0], scale: [1, 1.7] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeOut' }}
          />
        )}

        {/* chamada de atenção inicial — 1-2 ondas ao carregar, depois para de vez */}
        {!prefersReducedMotion && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full border border-green/60"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.5, 0], scale: [1, 1.65, 1.65] }}
            transition={{ duration: 0.9, delay: 0.5, repeat: 1, repeatDelay: 0.2, ease: 'easeOut' }}
          />
        )}

        {/* corpo 3D — leve escala, tilt de perspectiva e flutuação vertical */}
        <motion.div
          animate={
            breathe
              ? { scale: [1, 1.04, 1], y: [0, -3, 0], rotateX: [0, 4, 0], rotateY: [0, -3, 0] }
              : { scale: 1, y: 0, rotateX: 0, rotateY: 0 }
          }
          transition={
            breathe
              ? { duration: 3.6, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.3, ease: 'easeOut' }
          }
          style={{ transformStyle: 'preserve-3d' }}
          className="relative"
        >
          <WhatsAppButton
            phoneNumber={phoneNumber}
            message={WHATSAPP_GENERIC_MESSAGE}
            location="whatsapp-float"
            attendant={attendant}
            variant="float"
          />
          {/* highlight sutil — sensação de volume/vidro no topo do botão */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-white/25 via-transparent to-transparent"
          />
        </motion.div>

        {/* tooltip — só desktop/hover-capable, nunca no mobile */}
        <AnimatePresence>
          {isHovered && (
            <motion.span
              aria-hidden
              role="tooltip"
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="pointer-events-none absolute left-full top-1/2 ml-3 hidden -translate-y-1/2 whitespace-nowrap rounded-md border border-line bg-card-strong px-3 py-1.5 text-xs font-medium text-fg shadow-[0_8px_20px_-6px_rgba(0,0,0,0.5)] sm:block"
            >
              Fale conosco pelo WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
