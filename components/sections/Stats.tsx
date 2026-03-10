'use client'

import { VerticalConfig } from '@/lib/types'
import { isColorDark } from '@/lib/theme'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'

interface StatsProps {
  config: VerticalConfig
}

export function Stats({ config }: StatsProps) {
  const { stats } = config
  if (!stats.titulo && stats.items.length === 0) return null

  const dark = isColorDark(config.marca.colorFondo)

  return (
    <section
      className="py-24 px-6"
      style={{ backgroundColor: dark ? '#090909' : 'var(--bg-surface)' }}
    >
      <div className="max-w-5xl mx-auto">
        {stats.titulo && (
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ color: 'var(--text-primary)' }}
          >
            {stats.titulo}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.items.map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl flex flex-col items-center text-center"
              style={{
                backgroundColor: 'var(--surface-1)',
                border: '1px solid var(--border-sutil)',
              }}
            >
              <div
                className="font-display text-4xl md:text-5xl font-bold mb-3"
                style={{ color: 'var(--color-primario)' }}
              >
                <AnimatedNumber value={item.valor} />
              </div>

              <p
                className="font-sans text-base leading-snug mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
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
            className="mt-10 p-5 rounded-xl font-sans text-sm leading-relaxed flex gap-3"
            style={{
              backgroundColor: dark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)',
              border: '1px solid var(--border-sutil)',
              color: 'var(--text-secondary)',
            }}
          >
            <span className="flex-shrink-0 text-base">⚠️</span>
            <span>{stats.parrafoLegal}</span>
          </div>
        )}
      </div>
    </section>
  )
}
