'use client'

import { trackWhatsAppClick } from '@/lib/tracking'

interface SectionCTAProps {
  texto: string
  subtexto?: string
  variante: 'dark' | 'light' | 'green'
  ctaUrl: string
  ctaTexto?: string
  eventName: string
}

function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

const VARIANTS = {
  dark: {
    wrapper: 'py-10 px-8 rounded-2xl max-w-2xl mx-auto my-12 text-center',
    bg: 'var(--navy-900)',
    titulo: 'rgba(255,255,255,1)',
    sub: 'rgba(255,255,255,0.6)',
    btn: { bg: '#25D366', color: '#ffffff', hoverBg: '#1db954', icon: 'white' },
  },
  light: {
    wrapper: 'py-12 px-8 text-center w-full',
    bg: 'var(--navy-500)',
    titulo: 'rgba(255,255,255,1)',
    sub: 'rgba(255,255,255,0.75)',
    btn: { bg: '#ffffff', color: 'var(--navy-900)', hoverBg: '#f1f5f9', icon: 'green' },
  },
  green: {
    wrapper: 'py-10 px-8 text-center w-full',
    bg: '#25D366',
    titulo: 'rgba(255,255,255,1)',
    sub: 'rgba(255,255,255,0.8)',
    btn: { bg: '#ffffff', color: '#25D366', hoverBg: '#f1f5f9', icon: 'green' },
  },
}

export function SectionCTA({
  texto,
  subtexto,
  variante,
  ctaUrl,
  ctaTexto = 'Hablar con un experto gratis',
  eventName,
}: SectionCTAProps) {
  const v = VARIANTS[variante]

  return (
    <div style={{ backgroundColor: v.bg }}>
      <div className={v.wrapper}>
        <p
          className="font-jakarta font-bold text-xl mb-2"
          style={{ color: v.titulo }}
        >
          {texto}
        </p>

        {subtexto && (
          <p
            className="font-sans text-sm mb-6"
            style={{ color: v.sub }}
          >
            {subtexto}
          </p>
        )}

        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick(`section_cta_${variante}`, eventName)}
          className="inline-flex items-center gap-3 px-7 py-4 rounded-xl font-jakarta font-bold text-base whatsapp-pulse transition-transform hover:scale-105"
          style={{
            backgroundColor: v.btn.bg,
            color: v.btn.color,
            boxShadow:
              variante === 'dark'
                ? '0 4px 24px rgba(37,211,102,0.35)'
                : '0 4px 16px rgba(0,0,0,0.12)',
          }}
        >
          <span style={{ color: v.btn.icon === 'green' ? '#25D366' : '#ffffff' }}>
            <WAIcon />
          </span>
          {ctaTexto}
        </a>
      </div>
    </div>
  )
}
