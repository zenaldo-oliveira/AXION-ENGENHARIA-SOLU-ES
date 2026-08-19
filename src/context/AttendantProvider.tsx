import { useState, type ReactNode } from 'react'
import { DEFAULT_ATTENDANT, type AttendantId } from '../data/attendants'
import { AttendantContext, STORAGE_KEY } from './attendant-context'

function readStoredAttendant(): AttendantId {
  const stored = window.sessionStorage.getItem(STORAGE_KEY)
  return stored === 'zenaldo' || stored === 'fagner' ? stored : DEFAULT_ATTENDANT
}

export function AttendantProvider({ children }: { children: ReactNode }) {
  const [attendant, setAttendantState] = useState<AttendantId>(readStoredAttendant)

  const setAttendant = (id: AttendantId) => {
    setAttendantState(id)
    window.sessionStorage.setItem(STORAGE_KEY, id)
  }

  return (
    <AttendantContext.Provider value={{ attendant, setAttendant }}>
      {children}
    </AttendantContext.Provider>
  )
}
