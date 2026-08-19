import type { AttendantId } from '../data/attendants'

export type AnalyticsEventName = 'click_whatsapp' | 'whatsapp_service' | 'click_cta' | 'attendant_selected'

export type CtaLocation =
  | 'header'
  | 'hero'
  | 'service-card'
  | 'mid-cta'
  | 'final-cta'
  | 'whatsapp-float'
  | 'footer'

export type AnalyticsLocation = CtaLocation | 'initial-selector'

interface AnalyticsEventParams {
  location: AnalyticsLocation
  service?: string
  attendant?: AttendantId
}

// Stub sem envio de dados — único ponto a trocar quando GA4 / Google Ads / Meta Pixel forem integrados.
export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsEventParams): void {
  if (import.meta.env.DEV) {
    console.debug('[analytics]', eventName, params)
  }
}
