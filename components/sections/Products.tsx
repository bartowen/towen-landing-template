'use client'

import { useState } from 'react'
import { VerticalConfig } from '@/lib/types'
import { SectionCTA } from '@/components/ui/SectionCTA'

interface ProductsProps {
  config: VerticalConfig
}

export function Products({ config }: ProductsProps) {
  const { productos } = config
  const [hovered, setHovered] = useState<number | null>(null)

  if (!productos.titulo && productos.items.length === 0) return null

  const featured = productos.items.find((p) => p.destacado)
  const rest = productos.items.filter((p) => !p.destacado)

  return (
    <>
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--gray-50)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-jakarta font-extrabold text-3xl md:text-4xl text-center mb-12"
            style={{ color: 'var(--navy-900)' }}
          >
            {productos.titulo}
          </h2>

          {/* Featured card — full width */}
          {featured && (
            <div
              className="relative rounded-2xl p-7 mb-6 transition-all duration-300"
              style={{
                backgroundColor: 'var(--white)',
                border: '2px solid var(--navy-500)',
                boxShadow: '0 4px 24px rgba(37,99,235,0.1)',
              }}
            >
              {featured.tag && (
                <span
                  className="absolute top-5 right-5 font-jakarta font-bold text-xs text-white px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--navy-500)' }}
                >
                  {featured.tag}
                </span>
              )}
              <div className="flex items-start gap-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: 'rgba(37,99,235,0.08)' }}
                >
                  {featured.icono}
                </div>
                <div>
                  <h3
                    className="font-jakarta font-semibold text-lg mb-2"
                    style={{ color: 'var(--navy-900)' }}
                  >
                    {featured.nombre}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'var(--gray-400)' }}
                  >
                    {featured.descripcion}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Rest: 2-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rest.map((item, i) => {
              const idx = productos.items.indexOf(item)
              const active = hovered === idx
              return (
                <div
                  key={i}
                  className="relative rounded-2xl p-6 flex flex-col transition-all duration-250 cursor-default"
                  style={{
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--gray-100)',
                    transform: active ? 'translateY(-2px)' : 'none',
                    boxShadow: active
                      ? '0 4px 20px rgba(0,0,0,0.08)'
                      : '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 flex-shrink-0"
                    style={{ backgroundColor: 'rgba(37,99,235,0.08)' }}
                  >
                    {item.icono}
                  </div>
                  <h3
                    className="font-jakarta font-semibold text-lg mb-2"
                    style={{ color: 'var(--navy-900)' }}
                  >
                    {item.nombre}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed flex-1"
                    style={{ color: 'var(--gray-400)' }}
                  >
                    {item.descripcion}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <SectionCTA
        texto="¿No sabes cuál necesitas?"
        subtexto="En 5 minutos te asesoramos sin costo."
        variante="dark"
        ctaUrl={config.hero.cta.url}
        eventName={config.tracking.whatsappEventName}
      />
    </>
  )
}
