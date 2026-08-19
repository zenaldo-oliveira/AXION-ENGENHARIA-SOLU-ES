import { motion } from 'framer-motion'
import type { Service, ServiceSize } from '../data/services'
import { WhatsAppButton } from './WhatsAppButton'

const sizeClasses: Record<ServiceSize, string> = {
  hero: 'sm:col-span-2 lg:row-span-2',
  'hero-wide': 'sm:col-span-2',
  standard: '',
  'standard-wide': 'sm:col-span-2',
}

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon
  const isHero = service.size === 'hero'

  return (
    <motion.article
      id={service.slug}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.25, ease: 'easeOut' } }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: Math.min(index * 0.06, 0.36) }}
      className={`group relative flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border p-6 transition-shadow duration-300 hover:shadow-[0_16px_40px_-12px_rgba(0,0,0,0.5)] ${
        isHero
          ? 'border-green/15 bg-card-strong hover:border-green/50 hover:shadow-[0_0_36px_rgba(37,211,102,0.14)]'
          : 'border-line bg-card hover:border-green/40 hover:shadow-[0_0_28px_rgba(37,211,102,0.1)]'
      } ${sizeClasses[service.size]}`}
    >
      {/* sheen — leve iluminação vinda do topo, dá sensação de profundidade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(120%_60%_at_50%_-15%,rgba(255,255,255,0.05),transparent_60%)]"
      />

      {isHero && (
        <>
          <span aria-hidden className="absolute left-4 top-4 h-3 w-3 border-l border-t border-green/40" />
          <span
            aria-hidden
            className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-green/40"
          />
        </>
      )}

      <Icon
        aria-hidden
        className="pointer-events-none absolute -right-4 -top-4 text-green/[0.06] transition-transform duration-500 group-hover:scale-105 group-hover:text-green/[0.1]"
        size={isHero ? 180 : 120}
        strokeWidth={1}
      />

      <span className="relative font-display text-xs tracking-[0.2em] text-green">
        {service.number}
      </span>

      <div className="relative mt-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-green/15 text-green transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
        <Icon size={22} aria-hidden />
      </div>

      <h3
        className={`relative mt-4 font-display font-bold text-fg ${isHero ? 'text-2xl' : 'text-lg'}`}
      >
        {service.name}
      </h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-steel transition-colors duration-300 group-hover:text-fg/90">
        {service.description}
      </p>

      <ul className="relative mt-5 space-y-2 text-xs text-steel-dim">
        {service.highlights.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-green/70" />
            {item}
          </li>
        ))}
      </ul>

      <div className="relative mt-6">
        <WhatsAppButton
          message={service.whatsappMessage}
          location="service-card"
          service={service.slug}
          variant="card"
          className="transition-shadow duration-300 group-hover:shadow-[0_0_22px_rgba(37,211,102,0.3)]"
        />
      </div>
    </motion.article>
  )
}
