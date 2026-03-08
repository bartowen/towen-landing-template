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
      style={{
        background: `linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 100%)`,
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
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
                className="text-5xl font-bold mb-3"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-primario)',
                }}
              >
                <AnimatedNumber value={item.valor} />
              </div>
              <p className="text-base" style={{ color: 'var(--text-secondary)' }}>
                {item.descripcion}
              </p>
            </div>
          ))}
        </div>

        {stats.parrafoLegal && (
          <div
            className="mt-12 p-6 rounded-xl text-sm leading-relaxed"
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
