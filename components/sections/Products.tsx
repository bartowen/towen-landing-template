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
              className="relative rounded-2xl overflow-hidden mb-6 transition-all duration-300"
              style={{
                backgroundColor: 'var(--white)',
                border: '2px solid var(--navy-500)',
                boxShadow: '0 4px 24px rgba(37,99,235,0.1)',
              }}
            >
              {featured.imagenUrl && (
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={featured.imagenUrl}
                    alt={featured.nombre}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-7">
                {featured.tag && (
                  <span
                    className="absolute top-3 right-3 font-jakarta font-bold text-xs text-white px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'var(--navy-500)' }}
                  >
                    {featured.tag}
                  </span>
                )}
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: 'rgba(37,99,235,0.08)' }}
                  >
                    {featured.icono}
                  </div>
                  <div>
                    <h3
                      className="font-jakarta font-bold text-lg mb-2"
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
                  className="relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300 cursor-default"
                  style={{
                    backgroundColor: 'var(--white)',
                    border: '1px solid var(--gray-100)',
                    transform: active ? 'translateY(-3px)' : 'none',
                    boxShadow: active
                      ? '0 8px 24px rgba(0,0,0,0.1)'
                      : '0 1px 3px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {item.imagenUrl && (
                    <div className="h-44 w-full overflow-hidden">
                      <img
                        src={item.imagenUrl}
                        alt={item.nombre}
                        className="w-full h-full object-cover transition-transform duration-500"
                        style={{ transform: active ? 'scale(1.03)' : 'scale(1)' }}
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 flex-shrink-0"
                      style={{ backgroundColor: 'rgba(37,99,235,0.08)' }}
                    >
                      {item.icono}
                    </div>
                    <h3
                      className="font-jakarta font-bold text-base mb-2"
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
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <SectionCTA
        texto="¿Cuál necesitas para tu empresa?"
        variante="light"
        ctaUrl={config.hero.cta.url}
        eventName={config.tracking.whatsappEventName}
      />
    </>
  )
}
