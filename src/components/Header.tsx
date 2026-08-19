import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { WhatsAppButton } from './WhatsAppButton'
import { WHATSAPP_GENERIC_MESSAGE } from '../lib/whatsapp'
import { attendants } from '../data/attendants'
import { useAttendant } from '../context/attendant-context'

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Soluções Industriais', href: '#industrial' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#site-footer' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { attendant } = useAttendant()
  const phoneNumber = attendants[attendant].whatsappNumber
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  const slideX = prefersReducedMotion ? 0 : '100%'

  const sidebarVariants: Variants = {
    hidden: {
      x: slideX,
      scale: prefersReducedMotion ? 1 : 0.97,
      transition: { duration: prefersReducedMotion ? 0.12 : 0.2, ease: 'easeOut' },
    },
    visible: {
      x: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0.15 : 0.32,
        ease: 'easeOut',
        staggerChildren: prefersReducedMotion ? 0 : 0.05,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: 12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: prefersReducedMotion ? 0.12 : 0.22, ease: 'easeOut' },
    },
  }

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? 'border-b border-line bg-ink/95' : 'border-b border-transparent bg-ink/40'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <span className="font-display text-lg font-bold tracking-[0.15em] text-fg">
          IDEAL <span className="text-green">TÉCNICA</span>
        </span>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-steel transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton
            phoneNumber={phoneNumber}
            message={WHATSAPP_GENERIC_MESSAGE}
            location="header"
            attendant={attendant}
            label="Solicitar orçamento"
            variant="card"
          />
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-fg transition-colors hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green lg:hidden"
        >
          <Menu size={26} aria-hidden />
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="overlay"
              aria-hidden
              onClick={closeMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0.1 : 0.22, ease: 'easeOut' }}
              className="fixed inset-0 z-60 bg-ink/70 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              key="sidebar"
              role="navigation"
              aria-label="Menu mobile"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{ transformOrigin: 'right center' }}
              className="fixed top-0 right-0 z-70 flex h-dvh w-[min(85vw,380px)] flex-col border-l border-line bg-ink/98 p-6 shadow-[-24px_0_48px_-24px_rgba(0,0,0,0.55)] lg:hidden"
            >
              <motion.div variants={itemVariants} className="flex items-center justify-between">
                <span className="font-display text-base font-bold tracking-[0.15em] text-fg">
                  IDEAL <span className="text-green">TÉCNICA</span>
                </span>
                <button
                  type="button"
                  aria-label="Fechar menu"
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-md text-fg transition-colors hover:text-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                >
                  <X size={24} aria-hidden />
                </button>
              </motion.div>

              <nav aria-label="Navegação mobile" className="mt-10 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    variants={itemVariants}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-md px-2 py-3 text-base text-steel transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div variants={itemVariants} aria-hidden className="mt-auto border-t border-line" />

              <motion.div variants={itemVariants} className="mt-6" onClick={closeMenu}>
                <WhatsAppButton
                  phoneNumber={phoneNumber}
                  message={WHATSAPP_GENERIC_MESSAGE}
                  location="header"
                  attendant={attendant}
                  label="Solicitar orçamento"
                  variant="primary"
                  className="w-full justify-center"
                />
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
