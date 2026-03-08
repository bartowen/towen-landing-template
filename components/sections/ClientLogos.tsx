import { VerticalConfig } from '@/lib/types'

interface ClientLogosProps {
  config: VerticalConfig
}

export function ClientLogos({ config }: ClientLogosProps) {
  const { clientLogos } = config
  if (!clientLogos || clientLogos.logos.length === 0) return null

  return (
    <section className="py-10 px-6" style={{ backgroundColor: '#f8f8f8' }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-sm text-gray-400 mb-6 font-sans">
          {clientLogos.titulo}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {clientLogos.logos.map((logo, i) =>
            logo.placeholder ? (
              <div
                key={i}
                className="h-10 w-32 bg-gray-200 rounded-lg flex items-center justify-center"
              >
                <span className="text-xs text-gray-400 font-sans">Logo cliente</span>
              </div>
            ) : (
              <img
                key={i}
                src={logo.url}
                alt={logo.nombre}
                className="h-10 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            )
          )}
        </div>
      </div>
    </section>
  )
}
