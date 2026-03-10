import { VerticalConfig } from '@/lib/types'
import { isColorDark } from '@/lib/theme'

interface ClientLogosProps {
  config: VerticalConfig
}

export function ClientLogos({ config }: ClientLogosProps) {
  const { clientLogos } = config
  if (!clientLogos || clientLogos.logos.length === 0) return null

  const dark = isColorDark(config.marca.colorFondo)

  return (
    <section
      className="py-10 px-6"
      style={{
        backgroundColor: dark ? 'rgba(255,255,255,0.02)' : '#f4f7fa',
        borderTop: `1px solid var(--border-sutil)`,
        borderBottom: `1px solid var(--border-sutil)`,
      }}
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-center font-sans text-xs uppercase tracking-widest mb-7"
          style={{ color: 'var(--text-secondary)' }}
        >
          {clientLogos.titulo}
        </p>

        {/* Scrollable on mobile, centered flex on desktop */}
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide justify-start md:justify-center pb-1">
          {clientLogos.logos.map((logo, i) =>
            logo.placeholder ? (
              <div
                key={i}
                className="flex-shrink-0 h-10 w-32 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: dark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                  border: `1px solid var(--border-sutil)`,
                }}
              >
                <span
                  className="font-sans text-xs"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Logo cliente
                </span>
              </div>
            ) : (
              <img
                key={i}
                src={logo.url}
                alt={logo.nombre}
                className="flex-shrink-0 h-9 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}
