import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { WhatsAppButton } from './WhatsAppButton'
import { WHATSAPP_GENERIC_MESSAGE } from '../lib/whatsapp'

export function WhatsAppFloat() {
  const [nearFooter, setNearFooter] = useState(false)

  useEffect(() => {
    const footer = document.getElementById('site-footer')
    if (!footer) return

    const observer = new IntersectionObserver(([entry]) => setNearFooter(entry.isIntersecting), {
      rootMargin: '0px 0px -10% 0px',
    })
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={
        nearFooter ? { opacity: 0, scale: 0.9, y: 16 } : { opacity: 1, scale: 1, y: 0 }
      }
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{ pointerEvents: nearFooter ? 'none' : 'auto' }}
      className="fixed bottom-6 right-6 z-50"
    >
      <WhatsAppButton message={WHATSAPP_GENERIC_MESSAGE} location="whatsapp-float" variant="float" />
    </motion.div>
  )
}
