'use client'

import { VerticalConfig } from '@/lib/types'

interface TestimonialsProps {
  config: VerticalConfig
}

export function Testimonials({ config }: TestimonialsProps) {
  const { testimonios } = config
  if (!testimonios.titulo && testimonios.items.length === 0) return null

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          {testimonios.titulo}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {testimonios.items.map((item, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Decorative quote */}
              <div
                className="absolute top-4 right-6 text-7xl font-black leading-none select-none pointer-events-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--color-primario)',
                  opacity: 0.15,
                }}
              >
                "
              </div>

              <p
                className="text-sm leading-relaxed mb-6 relative z-10"
                style={{ color: 'var(--text-secondary)' }}
              >
                "{item.texto}"
              </p>

              <div>
                <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                  {item.autor}
                </p>
                <p className="text-xs mt-1" style={{ color: 'var(--text-secondary)' }}>
                  {item.empresa} · {item.ciudad}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Logos */}
        {testimonios.logos && testimonios.logos.length > 0 && (
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <p className="text-xs w-full text-center mb-4" style={{ color: 'var(--text-secondary)' }}>
              Trabajamos con las mejores aseguradoras
            </p>
            {testimonios.logos.map((logo, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  filter: 'grayscale(80%)',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(0%)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.filter = 'grayscale(80%)')
                }
              >
                {logo}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
