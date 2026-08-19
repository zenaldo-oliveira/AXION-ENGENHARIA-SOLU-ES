export type AttendantId = 'zenaldo' | 'fagner'

export interface Attendant {
  id: AttendantId
  name: string
  role: string
  whatsappNumber: string
}

export const DEFAULT_ATTENDANT: AttendantId = 'zenaldo'

export const attendants: Record<AttendantId, Attendant> = {
  zenaldo: {
    id: 'zenaldo',
    name: 'Zenaldo Oliveira',
    role: 'Residencial, reformas e manutenção',
    whatsappNumber: '5565992832422',
  },
  fagner: {
    id: 'fagner',
    name: 'Fagner Luiz',
    role: 'Elétrica, automação e soluções industriais',
    whatsappNumber: '5565992833417',
  },
}
