'use client'

import { useState } from 'react'
import { VerticalConfig } from '@/lib/types'

interface ProductsProps {
  config: VerticalConfig
}

function hexToRgb(hex: string): string {
  try {
    const h = hex.replace('#', '')
    return `${parseInt(h.slice(0, 2), 16)},${parseInt(h.slice(2, 4), 16)},${parseInt(h.slice(4, 6), 16)}`
  } catch { return '212,168,83' }
}

export function Products({ config }: ProductsProps) {
  const { productos } = config
  const [hovered, setHovered] = useState<number | null>(null)
  const rgb = hexToRgb(config.marca.colorPrimario)

  if (!productos.titulo && productos.items.length === 0) return null

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ color: 'var(--text-primary)' }}
        >
          {productos.titulo}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productos.items.map((item, i) => {
            const isActive = hovered === i
            const featured = item.destacado

            return (
              <div
                key={i}
                className="relative p-7 rounded-2xl flex flex-col transition-all duration-300 cursor-default"
                style={{
                  backgroundColor: 'var(--surface-1)',
                  border: `${featured ? '2px' : '1px'} solid ${
                    featured
                      ? 'var(--color-primario)'
                      : isActive
                      ? `rgba(${rgb},0.5)`
                      : 'var(--border-sutil)'
                  }`,
                  transform: isActive && !featured ? 'translateY(-6px)' : 'none',
                  boxShadow: featured
                    ? `0 0 40px rgba(${rgb},0.18), 0 8px 32px rgba(0,0,0,0.2)`
                    : isActive
                    ? '0 20px 48px rgba(0,0,0,0.25)'
                    : 'none',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Tag badge */}
                {item.tag && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full font-sans text-xs font-bold whitespace-nowrap"
                    style={{
                      backgroundColor: 'var(--color-primario)',
                      color: '#0a0c0f',
                    }}
                  >
                    {item.tag}
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 flex-shrink-0"
                  style={{ backgroundColor: `rgba(${rgb},0.12)` }}
                >
                  {item.icono}
                </div>

                {/* Name */}
                <h3
                  className="font-jakarta text-base font-semibold mb-3 leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.nombre}
                </h3>

                {/* Description */}
                <p
                  className="font-sans text-sm leading-relaxed flex-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.descripcion}
                </p>

                {/* Legacy datosClave */}
                {item.datosClave && (
                  <div
                    className="mt-5 px-3 py-2 rounded-lg font-sans text-xs font-semibold"
                    style={{
                      backgroundColor: `rgba(${rgb},0.08)`,
                      color: 'var(--color-primario)',
                      border: `1px solid rgba(${rgb},0.18)`,
                    }}
                  >
                    {item.datosClave}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
