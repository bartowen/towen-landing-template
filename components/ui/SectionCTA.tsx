'use client'

import { trackWhatsAppClick } from '@/lib/tracking'

interface SectionCTAProps {
  texto: string
  subtexto?: string
  variante: 'dark' | 'light' | 'bordered' | 'green'
  ctaUrl: string
  ctaTexto?: string
  eventName: string
  large?: boolean
}

function WAIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function SectionCTA({
  texto,
  subtexto,
  variante,
  ctaUrl,
  ctaTexto = 'Hablar con un experto gratis',
  eventName,
  large = false,
}: SectionCTAProps) {
  const tituloClass = large
    ? 'font-jakarta font-extrabold text-3xl mb-3'
    : 'font-jakarta font-bold text-xl mb-2'
  const subClass = large
    ? 'font-sans text-lg mb-8'
    : 'font-sans text-sm mb-6'
  const btnClass = large
    ? 'inline-flex items-center gap-3 px-10 py-5 rounded-xl font-jakarta font-bold text-lg whatsapp-pulse transition-all hover:brightness-105 hover:-translate-y-0.5'
    : 'inline-flex items-center gap-3 px-7 py-4 rounded-xl font-jakarta font-bold text-base whatsapp-pulse transition-all hover:brightness-105 hover:-translate-y-0.5'

  /* ── Bordered variant: contained card on white background ── */
  if (variante === 'bordered') {
    return (
      <div className="px-6 py-4" style={{ backgroundColor: 'var(--white)' }}>
        <div
          className="max-w-2xl mx-auto my-10 py-8 px-8 text-center rounded-2xl"
          style={{ backgroundColor: 'var(--gray-50)', border: '1px solid var(--gray-100)' }}
        >
          <p className={tituloClass} style={{ color: 'var(--navy-900)' }}>
            {texto}
          </p>
          {subtexto && (
            <p className={subClass} style={{ color: 'var(--gray-400)' }}>
              {subtexto}
            </p>
          )}
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('section_cta_bordered', eventName)}
            className={btnClass}
            style={{
              backgroundColor: '#25D366',
              color: '#ffffff',
              boxShadow: '0 4px 24px rgba(37,211,102,0.35)',
            }}
          >
            <WAIcon size={large ? 22 : 18} />
            {ctaTexto}
          </a>
        </div>
      </div>
    )
  }

  /* ── dark / light / green variants: full-width band ── */
  const configs = {
    dark: {
      bg: 'var(--navy-900)',
      titulo: 'rgba(255,255,255,1)',
      sub: 'rgba(255,255,255,0.7)',
      btn: { bg: '#25D366', color: '#ffffff', iconColor: '#ffffff', shadow: '0 4px 24px rgba(37,211,102,0.35)' },
    },
    light: {
      bg: 'var(--navy-500)',
      titulo: 'rgba(255,255,255,1)',
      sub: 'rgba(255,255,255,0.75)',
      btn: { bg: '#ffffff', color: 'var(--navy-900)', iconColor: '#25D366', shadow: '0 4px 16px rgba(0,0,0,0.12)' },
    },
    green: {
      bg: '#25D366',
      titulo: 'rgba(255,255,255,1)',
      sub: 'rgba(255,255,255,0.8)',
      btn: { bg: '#ffffff', color: '#25D366', iconColor: '#25D366', shadow: '0 4px 16px rgba(0,0,0,0.12)' },
    },
  }

  const v = configs[variante as 'dark' | 'light' | 'green']

  return (
    <div style={{ backgroundColor: v.bg }}>
      <div className={`py-12 px-8 text-center w-full${large ? ' py-16' : ''}`}>
        <p className={tituloClass} style={{ color: v.titulo }}>
          {texto}
        </p>
        {subtexto && (
          <p className={subClass} style={{ color: v.sub }}>
            {subtexto}
          </p>
        )}
        <a
          href={ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick(`section_cta_${variante}`, eventName)}
          className={btnClass}
          style={{ backgroundColor: v.btn.bg, color: v.btn.color, boxShadow: v.btn.shadow }}
        >
          <span style={{ color: v.btn.iconColor }}>
            <WAIcon size={large ? 22 : 18} />
          </span>
          {ctaTexto}
        </a>
      </div>
    </div>
  )
}
