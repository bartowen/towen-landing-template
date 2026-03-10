'use client'

import { VerticalConfig } from '@/lib/types'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'
import { SectionCTA } from '@/components/ui/SectionCTA'

interface StatsProps {
  config: VerticalConfig
}

export function Stats({ config }: StatsProps) {
  const { stats } = config
  if (!stats.titulo && stats.items.length === 0) return null

  const primerPaso = config.comoFunciona.pasos[0]

  return (
    <>
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          {stats.titulo && (
            <h2
              className="font-jakarta font-extrabold text-3xl md:text-4xl text-center mb-12"
              style={{ color: 'var(--navy-900)' }}
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
                  backgroundColor: 'var(--white)',
                  border: '1px solid var(--gray-100)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                }}
              >
                <div
                  className="font-jakarta font-extrabold text-4xl mb-3"
                  style={{ color: 'var(--navy-500)' }}
                >
                  <AnimatedNumber value={item.valor} />
                </div>

                <p
                  className="font-sans font-medium text-base leading-snug mb-2"
                  style={{ color: 'var(--navy-900)' }}
                >
                  {item.label}
                </p>

                {item.fuente && (
                  <p
                    className="font-sans text-xs mt-1"
                    style={{ color: 'var(--gray-400)' }}
                  >
                    Fuente: {item.fuente}
                  </p>
                )}
              </div>
            ))}
          </div>

          {stats.parrafoLegal && (
            <div
              className="mt-8 p-4 rounded-r-xl font-sans text-sm leading-relaxed flex gap-3 items-start"
              style={{
                backgroundColor: 'var(--gray-50)',
                borderLeft: '4px solid var(--navy-500)',
                color: 'var(--gray-400)',
              }}
            >
              <span className="flex-shrink-0">⚠️</span>
              <span>{stats.parrafoLegal}</span>
            </div>
          )}
        </div>
      </section>

      <SectionCTA
        texto={primerPaso?.titulo ?? 'Cotiza tu seguro en minutos'}
        subtexto={primerPaso?.descripcion}
        variante="dark"
        ctaUrl={config.hero.cta.url}
        eventName={config.tracking.whatsappEventName}
      />
    </>
  )
}
