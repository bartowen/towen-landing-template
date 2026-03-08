'use client'

import { trackWhatsAppClick } from '@/lib/tracking'
import { VerticalConfig } from '@/lib/types'

interface CTAFinalProps {
  config: VerticalConfig
}

export function CTAFinal({ config }: CTAFinalProps) {
  const { ctaFinal, tracking } = config

  return (
    <section
      className="relative py-32 px-6 text-center"
      style={{
        backgroundImage: `url(${ctaFinal.imagenFondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(10,12,15,0.80)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)',
          }}
        >
          {ctaFinal.headline}
        </h2>

        <p className="text-xl mb-10" style={{ color: 'var(--text-secondary)' }}>
          {ctaFinal.subheadline}
        </p>

        <a
          href={ctaFinal.cta.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('cta_final', tracking.whatsappEventName)}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-xl text-white font-bold text-xl whatsapp-pulse transition-transform hover:scale-105"
          style={{
            backgroundColor: '#25D366',
            boxShadow: '0 0 40px rgba(37,211,102,0.4)',
          }}
        >
          {ctaFinal.cta.texto}
        </a>

        {ctaFinal.microCopy && (
          <p className="mt-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
            {ctaFinal.microCopy}
          </p>
        )}
      </div>
    </section>
  )
}
