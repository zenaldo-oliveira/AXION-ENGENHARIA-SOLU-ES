export type AnalyticsEventName = 'click_whatsapp' | 'whatsapp_service' | 'click_cta'

export type CtaLocation = 'hero' | 'service-card' | 'mid-cta' | 'final-cta' | 'whatsapp-float'

interface AnalyticsEventParams {
  location: CtaLocation
  service?: string
}

// Stub sem envio de dados — único ponto a trocar quando GA4 / Google Ads / Meta Pixel forem integrados.
export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsEventParams): void {
  if (import.meta.env.DEV) {
    console.debug('[analytics]', eventName, params)
  }
}
