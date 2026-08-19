export const WHATSAPP_GENERIC_MESSAGE =
  'Olá! Tudo bem? Vi os serviços da Ideal Técnica pelo site e gostaria de solicitar um orçamento. Como podemos começar?'

export function buildWhatsAppUrl(phoneNumber: string, message: string): string {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}
