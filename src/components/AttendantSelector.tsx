import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { attendants, type AttendantId } from '../data/attendants'
import { buildWhatsAppUrl, WHATSAPP_GENERIC_MESSAGE } from '../lib/whatsapp'
import { trackEvent } from '../lib/analytics'
import { useAttendant } from '../context/attendant-context'

const SEEN_KEY = 'axion_attendant_selector_seen'
const SHOW_DELAY_MS = 1200

export function AttendantSelector() {
  const [visible, setVisible] = useState(false)
  const { setAttendant } = useAttendant()

  useEffect(() => {
    if (window.sessionStorage.getItem(SEEN_KEY) === 'true') return

    const timer = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  const dismiss = () => {
    window.sessionStorage.setItem(SEEN_KEY, 'true')
    setVisible(false)
  }

  const handleSelect = (id: AttendantId) => {
    setAttendant(id)
    trackEvent('attendant_selected', { attendant: id, location: 'initial-selector' })
    window.sessionStorage.setItem(SEEN_KEY, 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Seletor de atendimento Ideal Técnica"
          aria-live="polite"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-24 left-6 right-6 z-50 rounded-2xl border border-line bg-card/90 p-5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl sm:left-auto sm:right-6 sm:w-96"
        >
          <button
            type="button"
            onClick={dismiss}
            aria-label="Fechar seletor de atendimento"
            className="absolute right-3 top-3 rounded-full p-1.5 text-steel-dim transition-colors hover:text-fg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
          >
            <X size={16} aria-hidden />
          </button>

          <p className="pr-6 font-display text-base font-bold text-fg">Olá! Como podemos ajudar?</p>
          <p className="mt-1 text-sm text-steel">Escolha com quem deseja falar:</p>

          <div className="mt-4 flex flex-col gap-2">
            {Object.values(attendants).map((person) => (
              <motion.a
                key={person.id}
                href={buildWhatsAppUrl(person.whatsappNumber, WHATSAPP_GENERIC_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleSelect(person.id)}
                whileHover={{ x: 2 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-left transition-colors duration-200 hover:border-green/40 hover:bg-surface/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green/15 text-green">
                  <MessageCircle size={16} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-fg">{person.name}</span>
                  <span className="block truncate text-xs text-steel">{person.role}</span>
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
