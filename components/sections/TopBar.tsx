'use client'

import { trackWhatsAppClick } from '@/lib/tracking'
import { VerticalConfig } from '@/lib/types'

interface TopBarProps {
  config: VerticalConfig
}

export function TopBar({ config }: TopBarProps) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-3"
      style={{
        backgroundColor: 'rgba(10, 12, 15, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="text-lg font-semibold tracking-tight"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primario)' }}
        >
          {config.marca.nombre}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {config.topbar.telefono && (
          <a
            href={`tel:${config.topbar.telefono.replace(/\s/g, '')}`}
            className="hidden md:block text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            {config.topbar.telefono}
          </a>
        )}
        <a
          href={config.topbar.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick('topbar', config.tracking.whatsappEventName)}
          className="px-4 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
          style={{
            backgroundColor: 'var(--color-primario)',
            color: '#0a0c0f',
          }}
        >
          {config.topbar.ctaTexto}
        </a>
      </div>
    </header>
  )
}
