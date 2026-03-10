'use client'

import { useState } from 'react'
import { trackWhatsAppClick } from '@/lib/tracking'
import { VerticalConfig } from '@/lib/types'

interface ProductsProps {
  config: VerticalConfig
}

function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function Products({ config }: ProductsProps) {
  const { productos } = config
  const [hovered, setHovered] = useState<number | null>(null)

  if (!productos.titulo && productos.items.length === 0) return null

  const featured = productos.items.find((p) => p.destacado)
  const rest = productos.items.filter((p) => !p.destacado)

  return (
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

        {/* Inline CTA */}
        <div
          className="mt-12 py-10 px-8 rounded-2xl text-center max-w-2xl mx-auto"
          style={{ backgroundColor: 'var(--navy-900)' }}
        >
          <p
            className="font-jakarta font-bold text-xl text-white mb-2"
          >
            ¿No sabes cuál necesitas?
          </p>
          <p
            className="font-sans text-sm mb-6"
            style={{ color: 'rgba(255,255,255,0.65)' }}
          >
            En 5 minutos te asesoramos sin costo.
          </p>
          <a
            href={config.hero.cta.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('products_cta', config.tracking.whatsappEventName)}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl text-white font-jakarta font-bold text-base whatsapp-pulse transition-transform hover:scale-105"
            style={{
              backgroundColor: 'var(--cta-green)',
              boxShadow: '0 4px 24px rgba(37,211,102,0.35)',
            }}
          >
            <WAIcon />
            Hablar con un experto gratis
          </a>
        </div>
      </div>
    </section>
  )
}
