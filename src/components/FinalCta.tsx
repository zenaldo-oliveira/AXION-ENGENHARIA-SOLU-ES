import { motion } from 'framer-motion'
import { WhatsAppButton } from './WhatsAppButton'
import { WHATSAPP_GENERIC_MESSAGE } from '../lib/whatsapp'
import { attendants } from '../data/attendants'
import { useAttendant } from '../context/attendant-context'

export function FinalCta() {
  const { attendant } = useAttendant()
  const phoneNumber = attendants[attendant].whatsappNumber

  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-ink px-6 py-24 text-center sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-line" />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-2xl"
      >
        <h2 className="font-display text-3xl font-bold uppercase leading-[1.15] text-fg sm:text-5xl">
          Precisou de um serviço?
          <br /> A Ideal Técnica resolve.
        </h2>
        <div className="relative mt-10 inline-block">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-md bg-green/15 blur-xl"
          />
          <WhatsAppButton
            phoneNumber={phoneNumber}
            message={WHATSAPP_GENERIC_MESSAGE}
            location="final-cta"
            attendant={attendant}
            label="Solicitar orçamento pelo WhatsApp"
            variant="primary"
          />
        </div>
      </motion.div>
    </section>
  )
}
