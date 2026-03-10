'use client'

import { trackWhatsAppClick } from '@/lib/tracking'
import { VerticalConfig } from '@/lib/types'

interface TopBarProps {
  config: VerticalConfig
}

export function TopBar({ config }: TopBarProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        backgroundColor: 'var(--white)',
        borderBottom: '1px solid var(--gray-100)',
        boxShadow: '0 1px 20px rgba(0,0,0,0.06)',
      }}
    >
      <span
        className="font-jakarta font-bold text-xl"
        style={{ color: 'var(--navy-900)' }}
      >
        {config.marca.nombre}
      </span>

      <div className="flex items-center gap-4">
        {config.topbar.telefono && (
          <a
            href={`tel:${config.topbar.telefono.replace(/\s/g, '')}`}
            className="hidden md:block font-sans text-sm"
            style={{ color: 'var(--gray-400)' }}
          >
            {config.topbar.telefono}
          </a>
        )}
        <a
          href={config.topbar.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('topbar', config.tracking.whatsappEventName)}
          className="px-5 py-2 rounded-lg font-jakarta font-semibold text-sm text-white transition-colors"
          style={{ backgroundColor: 'var(--navy-500)' }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--navy-700)'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--navy-500)'
          }}
        >
          {config.topbar.ctaTexto}
        </a>
      </div>
    </header>
  )
}
