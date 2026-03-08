'use client'

import { useState } from 'react'
import { VerticalConfig } from '@/lib/types'

interface ProductsProps {
  config: VerticalConfig
}

export function Products({ config }: ProductsProps) {
  const { productos } = config
  const [hovered, setHovered] = useState<number | null>(null)

  if (!productos.titulo && productos.items.length === 0) return null

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          {productos.titulo}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {productos.items.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl transition-all duration-300 cursor-default"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: `1px solid ${hovered === i ? 'var(--color-primario)' : 'var(--border)'}`,
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow:
                  hovered === i ? '0 20px 40px rgba(0,0,0,0.3)' : 'none',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6"
                style={{ backgroundColor: 'rgba(212, 168, 83, 0.15)' }}
              >
                {item.icono}
              </div>

              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.nombre}
              </h3>

              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                {item.descripcion}
              </p>

              <div
                className="px-4 py-2 rounded-lg text-xs font-semibold"
                style={{
                  backgroundColor: 'rgba(212, 168, 83, 0.1)',
                  color: 'var(--color-primario)',
                  border: '1px solid rgba(212, 168, 83, 0.2)',
                }}
              >
                {item.datosClave}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
