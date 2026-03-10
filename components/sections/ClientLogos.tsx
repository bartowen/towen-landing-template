import { VerticalConfig } from '@/lib/types'

interface ClientLogosProps {
  config: VerticalConfig
}

export function ClientLogos({ config }: ClientLogosProps) {
  const { clientLogos } = config
  if (!clientLogos || clientLogos.logos.length === 0) return null

  return (
    <section className="py-14 px-6" style={{ backgroundColor: 'var(--gray-50)' }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-center font-jakarta font-semibold text-xs uppercase tracking-widest mb-8"
           style={{ color: 'var(--gray-400)' }}>
          {clientLogos.titulo}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 overflow-x-auto scrollbar-hide">
          {clientLogos.logos.map((logo, i) =>
            logo.placeholder ? (
              <div
                key={i}
                className="flex-shrink-0 h-10 w-32 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: 'var(--gray-100)',
                  border: '1px solid var(--gray-100)',
                }}
              >
                <span className="font-sans text-xs" style={{ color: 'var(--gray-400)' }}>
                  Logo cliente
                </span>
              </div>
            ) : (
              <img
                key={i}
                src={logo.url}
                alt={logo.nombre}
                className="flex-shrink-0 h-9 w-auto object-contain transition-all duration-300"
                style={{ filter: 'grayscale(1)', opacity: 0.5 }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLImageElement
                  el.style.filter = 'grayscale(0)'
                  el.style.opacity = '1'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLImageElement
                  el.style.filter = 'grayscale(1)'
                  el.style.opacity = '0.5'
                }}
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}
