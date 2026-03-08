'use client'

import { VerticalConfig } from '@/lib/types'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'

interface StatsProps {
  config: VerticalConfig
}

export function Stats({ config }: StatsProps) {
  const { stats } = config
  if (!stats.titulo && stats.items.length === 0) return null

  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          {stats.titulo}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stats.items.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl text-center"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
              }}
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-3 font-sans"
                style={{ color: 'var(--color-primario)' }}
              >
                <AnimatedNumber value={item.valor} />
              </div>
              <p className="font-sans text-base text-white mb-3">
                {item.label}
              </p>
              {item.fuente && (
                <p
                  className="font-sans text-xs"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Fuente: {item.fuente}
                </p>
              )}
            </div>
          ))}
        </div>

        {stats.parrafoLegal && (
          <div
            className="mt-12 p-6 rounded-xl font-sans text-sm leading-relaxed"
            style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid var(--border)',
              color: 'var(--text-secondary)',
            }}
          >
            {stats.parrafoLegal}
          </div>
        )}
      </div>
    </section>
  )
}
