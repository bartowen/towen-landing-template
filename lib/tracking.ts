declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    fbq: (...args: unknown[]) => void
  }
}

export function trackWhatsAppClick(section: string, eventName: string) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'whatsapp_click',
    section,
    label: eventName,
    timestamp: new Date().toISOString(),
  })
  window.fbq?.('track', 'Contact', {
    content_name: eventName,
    content_category: 'seguros',
  })
}

export function initTracking() {
  if (typeof window === 'undefined') return
  const p = new URLSearchParams(window.location.search)
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'page_view',
    utm_source: p.get('utm_source') || 'direct',
    utm_medium: p.get('utm_medium') || 'none',
    utm_campaign: p.get('utm_campaign') || 'none',
    utm_content: p.get('utm_content') || 'none',
  })
}
