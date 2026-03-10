'use client'

import { trackWhatsAppClick } from '@/lib/tracking'
import { VerticalConfig } from '@/lib/types'

interface CTAFinalProps {
  config: VerticalConfig
}

function WAIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function CTAFinal({ config }: CTAFinalProps) {
  const { ctaFinal, tracking } = config

  return (
    <section
      className="py-32 px-6 text-center"
      style={{
        background: 'linear-gradient(135deg, #0f1f3d 0%, #1a3a6b 100%)',
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-jakarta font-extrabold text-4xl md:text-5xl mb-6 leading-tight text-white"
        >
          {ctaFinal.headline}
        </h2>

        <p
          className="font-sans text-lg mb-10"
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          {ctaFinal.subheadline}
        </p>

        <a
          href={ctaFinal.cta.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('cta_final', tracking.whatsappEventName)}
          className="inline-flex items-center gap-3 px-10 py-5 rounded-xl font-jakarta font-bold text-lg transition-all hover:bg-gray-100 hover:-translate-y-0.5"
          style={{
            backgroundColor: 'var(--white)',
            color: 'var(--navy-900)',
            boxShadow: '0 6px 32px rgba(0,0,0,0.2)',
          }}
        >
          <span style={{ color: '#25D366' }}><WAIcon /></span>
          {ctaFinal.cta.texto}
        </a>

        {ctaFinal.microCopy && (
          <p
            className="font-sans mt-4 text-xs"
            style={{ color: 'rgba(255,255,255,0.5)' }}
          >
            {ctaFinal.microCopy}
          </p>
        )}

        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {[
            { icon: '🏛️', text: 'Regulados por la CMF' },
            { icon: '🤝', text: 'Miembros de ACOSEG' },
            { icon: '🏢', text: '+29 compañías disponibles' },
          ].map((b, i) => (
            <span
              key={i}
              className="font-sans text-sm flex items-center gap-2"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              {b.icon} {b.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
