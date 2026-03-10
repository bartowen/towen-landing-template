'use client'

import { trackWhatsAppClick } from '@/lib/tracking'
import { isColorDark } from '@/lib/theme'
import { VerticalConfig } from '@/lib/types'

interface TopBarProps {
  config: VerticalConfig
}

export function TopBar({ config }: TopBarProps) {
  const dark = isColorDark(config.marca.colorFondo)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-3"
      style={{
        backgroundColor: dark ? 'rgba(10,12,15,0.92)' : 'rgba(255,255,255,0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: `1px solid var(--border-sutil)`,
        boxShadow: dark ? 'none' : '0 1px 20px rgba(0,0,0,0.06)',
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="font-display text-lg font-semibold tracking-tight"
          style={{ color: dark ? 'var(--color-primario)' : '#0f172a' }}
        >
          {config.marca.nombre}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {config.topbar.telefono && (
          <a
            href={`tel:${config.topbar.telefono.replace(/\s/g, '')}`}
            className="hidden md:block font-sans text-sm transition-opacity hover:opacity-80"
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
          className="px-5 py-2 rounded-lg font-sans text-sm font-semibold transition-all duration-200"
          style={{
            backgroundColor: 'var(--color-primario)',
            color: dark ? '#0a0c0f' : '#ffffff',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.opacity = '0.85'
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLAnchorElement).style.opacity = '1'
          }}
        >
          {config.topbar.ctaTexto}
        </a>
      </div>
    </header>
  )
}
