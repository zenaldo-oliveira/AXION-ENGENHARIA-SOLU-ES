import { createContext, useContext } from 'react'
import type { AttendantId } from '../data/attendants'

export const STORAGE_KEY = 'axion_selected_attendant'

export interface AttendantContextValue {
  attendant: AttendantId
  setAttendant: (id: AttendantId) => void
}

export const AttendantContext = createContext<AttendantContextValue | null>(null)

export function useAttendant() {
  const context = useContext(AttendantContext)
  if (!context) {
    throw new Error('useAttendant deve ser usado dentro de AttendantProvider')
  }
  return context
}
