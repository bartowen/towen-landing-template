'use client'

import { motion } from 'framer-motion'
import { VerticalConfig } from '@/lib/types'
import { SectionCTA } from '@/components/ui/SectionCTA'

interface TestimonialsProps {
  config: VerticalConfig
}

export function Testimonials({ config }: TestimonialsProps) {
  const { testimonios } = config

  if (!testimonios.titulo && testimonios.items.length === 0) return null

  return (
    <>
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--white)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-jakarta font-extrabold text-3xl md:text-4xl text-center mb-12"
            style={{ color: 'var(--navy-900)' }}
          >
            {testimonios.titulo}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonios.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.13 }}
                className="relative rounded-2xl p-6 flex flex-col"
                style={{
                  backgroundColor: 'var(--gray-50)',
                  border: '1px solid var(--gray-100)',
                }}
              >
                {/* Decorative quote */}
                <div
                  className="font-jakarta font-extrabold text-6xl leading-none select-none pointer-events-none mb-2"
                  style={{ color: 'var(--navy-500)', opacity: 0.18 }}
                >
                  "
                </div>

                <p
                  className="font-sans text-sm leading-relaxed flex-1 mb-5"
                  style={{ color: 'var(--navy-900)' }}
                >
                  {item.texto}
                </p>

                <div
                  className="flex items-center gap-3 pt-4"
                  style={{ borderTop: '1px solid var(--gray-100)' }}
                >
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-jakarta font-bold text-sm text-white flex-shrink-0"
                    style={{ backgroundColor: 'var(--navy-500)' }}
                  >
                    {item.autor.charAt(0)}
                  </div>
                  <div>
                    <p
                      className="font-jakarta font-semibold text-sm"
                      style={{ color: 'var(--navy-900)' }}
                    >
                      {item.autor}
                    </p>
                    <p className="font-sans text-xs" style={{ color: 'var(--gray-400)' }}>
                      {item.empresa} · {item.ciudad}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Logos de aseguradoras */}
          {testimonios.logos && testimonios.logos.length > 0 && (
            <div
              className="mt-14 pt-10"
              style={{ borderTop: '1px solid var(--gray-100)' }}
            >
              <p
                className="font-jakarta font-semibold text-xs uppercase tracking-widest text-center mb-7"
                style={{ color: 'var(--gray-400)' }}
              >
                Respaldado por las mejores aseguradoras
              </p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {testimonios.logos.map((logo, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 rounded-xl font-sans text-sm font-semibold transition-all duration-300 cursor-default"
                    style={{
                      backgroundColor: 'var(--white)',
                      border: '1px solid var(--gray-100)',
                      color: 'var(--gray-400)',
                    }}
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <SectionCTA
        texto="Más de 50 operadores ya operan protegidos en Chile."
        subtexto="¿Cuándo te sumas?"
        variante="dark"
        ctaUrl={config.hero.cta.url}
        eventName={config.tracking.whatsappEventName}
        large
      />
    </>
  )
}
