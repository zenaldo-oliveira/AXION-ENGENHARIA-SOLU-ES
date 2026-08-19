import { useState } from 'react'
import { motion } from 'framer-motion'
import type { Service, ServiceSize } from '../data/services'
import { attendants } from '../data/attendants'
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
  const isIndustrial = service.group === 'industrial'
  const isFeatured = isHero || isIndustrial
  const hasVideo = Boolean(service.video)
  const phoneNumber = attendants[service.attendant].whatsappNumber

  const [videoNearView, setVideoNearView] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const showVideo = hasVideo && videoNearView && !videoFailed

  return (
    <motion.article
      id={service.slug}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={() => setVideoNearView(true)}
      whileHover={{
        y: -3,
        transition: { duration: 0.25, ease: 'easeOut' },
      }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: Math.min(index * 0.05, 0.3) }}
      className={`group relative flex scroll-mt-24 flex-col overflow-hidden rounded-2xl border p-6 transition-[box-shadow,border-color] duration-300 hover:shadow-[0_16px_32px_-16px_rgba(0,0,0,0.5)] ${
        isFeatured
          ? 'border-line bg-card-strong hover:border-green/35'
          : 'border-line bg-card hover:border-green/30'
      } ${sizeClasses[service.size]}`}
    >
      {showVideo && (
        <>
          <video
            aria-hidden
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            onError={() => setVideoFailed(true)}
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          >
            <source src={service.video} type="video/mp4" />
          </video>
          {/* máscara — mantém o vídeo como elemento secundário; conteúdo é o protagonista */}
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-ink/70" />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink/50 via-transparent to-ink/60"
          />
        </>
      )}

      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-lg bg-green/15 text-green">
        <Icon size={18} aria-hidden />
      </span>

      <h3
        className={`relative mt-4 font-display font-bold text-white drop-shadow-sm ${isHero ? 'text-2xl' : 'text-lg'}`}
      >
        {service.name}
      </h3>
      <p className="relative mt-2.5 text-sm leading-relaxed text-fg/75 drop-shadow-sm">
        {service.description}
      </p>

      <ul className="relative mt-5 space-y-2.5 text-xs text-steel">
        {service.highlights.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-green/80" />
            {item}
          </li>
        ))}
      </ul>

      <div className="relative mt-6">
        <WhatsAppButton
          phoneNumber={phoneNumber}
          message={service.whatsappMessage}
          location="service-card"
          service={service.slug}
          attendant={service.attendant}
          variant="card"
        />
      </div>
    </motion.article>
  )
}
