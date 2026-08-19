import { motion } from 'framer-motion'
import { WhatsAppButton } from './WhatsAppButton'
import { WHATSAPP_GENERIC_MESSAGE } from '../lib/whatsapp'

export function MidCta() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface px-6 py-16 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/[0.05] blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto flex max-w-xl flex-col items-center gap-5"
      >
        <p className="text-base text-fg sm:text-lg">Não encontrou o que precisa? Fale com a gente.</p>
        <WhatsAppButton message={WHATSAPP_GENERIC_MESSAGE} location="mid-cta" variant="primary" />
      </motion.div>
    </section>
  )
}
