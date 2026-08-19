import { motion } from 'framer-motion'
import { WhatsAppButton } from './WhatsAppButton'
import { TechGrid } from './TechGrid'
import { WHATSAPP_GENERIC_MESSAGE } from '../lib/whatsapp'

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line bg-ink px-6 py-24 text-center sm:py-32">
      {/* linha de assinatura — marca este como o ponto de maior contraste da página */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-green/50 to-transparent"
      />
      <TechGrid opacityClassName="opacity-35" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-deep/[0.18] blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green/[0.14] blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_30%,var(--color-ink)_92%)]"
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-2xl"
      >
        <h2 className="font-display text-3xl font-bold uppercase leading-[1.15] text-fg sm:text-5xl">
          Precisou de um serviço?
          <br /> A AXION resolve.
        </h2>
        <div className="relative mt-10 inline-block">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-md bg-green/25 blur-2xl"
          />
          <WhatsAppButton
            message={WHATSAPP_GENERIC_MESSAGE}
            location="final-cta"
            label="Solicitar orçamento pelo WhatsApp"
            variant="primary"
          />
        </div>
      </motion.div>
    </section>
  )
}
