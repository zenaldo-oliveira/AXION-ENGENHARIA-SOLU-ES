export const WHATSAPP_NUMBER = '5565992832422'

export const WHATSAPP_GENERIC_MESSAGE =
  'Olá! Vim pelo site da AXION e gostaria de solicitar um orçamento.'

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
