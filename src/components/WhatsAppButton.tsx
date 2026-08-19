import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { buildWhatsAppUrl } from '../lib/whatsapp'
import { trackEvent, type CtaLocation } from '../lib/analytics'

type Variant = 'primary' | 'card' | 'float'

interface WhatsAppButtonProps {
  message: string
  location: CtaLocation
  service?: string
  label?: string
  variant?: Variant
  className?: string
}

const variantClasses: Record<Variant, string> = {
  primary:
    'inline-flex items-center gap-2 rounded-md bg-linear-to-b from-green to-green-dark px-6 py-3.5 text-sm font-semibold text-ink shadow-[0_0_18px_rgba(37,211,102,0.18)] transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(37,211,102,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green',
  card: 'inline-flex items-center gap-2 rounded-md bg-linear-to-b from-green to-green-dark px-4 py-2.5 text-xs font-semibold text-ink shadow-[0_0_10px_rgba(37,211,102,0.12)] transition-shadow duration-300 hover:shadow-[0_0_22px_rgba(37,211,102,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green',
  float:
    'flex h-14 w-14 items-center justify-center rounded-full bg-green text-ink shadow-[0_8px_24px_rgba(0,0,0,0.45),0_0_14px_rgba(37,211,102,0.2)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.5),0_0_28px_rgba(37,211,102,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green',
}

export function WhatsAppButton({
  message,
  location,
  service,
  label = 'Solicitar orçamento',
  variant = 'primary',
  className = '',
}: WhatsAppButtonProps) {
  const handleClick = () => {
    trackEvent(service ? 'whatsapp_service' : 'click_whatsapp', { location, service })
  }

  return (
    <motion.a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      data-location={location}
      data-service={service}
      aria-label={variant === 'float' ? 'Solicitar orçamento pelo WhatsApp' : label}
      whileHover={{ y: variant === 'float' ? 0 : -2, scale: variant === 'float' ? 1.06 : 1 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: 'spring', stiffness: 420, damping: 26 }}
      className={`${variantClasses[variant]} ${className}`}
    >
      {variant === 'float' ? (
        <MessageCircle size={24} aria-hidden />
      ) : (
        <>
          <MessageCircle size={16} aria-hidden />
          {label}
        </>
      )}
    </motion.a>
  )
}
