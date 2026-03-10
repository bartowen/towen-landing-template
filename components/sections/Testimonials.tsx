'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { trackWhatsAppClick } from '@/lib/tracking'
import { VerticalConfig } from '@/lib/types'

interface TestimonialsProps {
  config: VerticalConfig
}

function WAIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

export function Testimonials({ config }: TestimonialsProps) {
  const { testimonios } = config
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  if (!testimonios.titulo && testimonios.items.length === 0) return null

  return (
    <>
      {/* ─── Testimonial cards ─── */}
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--gray-50)' }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-jakarta font-extrabold text-3xl md:text-4xl text-center mb-12"
            style={{ color: 'var(--navy-900)' }}
          >
            {testimonios.titulo}
          </h2>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonios.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.45, delay: i * 0.13 }}
                className="relative rounded-2xl p-6 flex flex-col"
                style={{
                  backgroundColor: 'var(--white)',
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
                      filter: 'grayscale(60%)',
                      opacity: 0.65,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.filter = 'grayscale(0%)'
                      el.style.opacity = '1'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement
                      el.style.filter = 'grayscale(60%)'
                      el.style.opacity = '0.65'
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

      {/* ─── Post-testimonials CTA strip ─── */}
      <section
        className="py-12 px-6 text-center"
        style={{ backgroundColor: 'var(--navy-500)' }}
      >
        <div className="max-w-2xl mx-auto">
          <p
            className="font-jakarta font-bold text-2xl text-white mb-2"
          >
            Más de 50 operadores ya operan protegidos.
          </p>
          <p
            className="font-sans text-base mb-8"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            {config.ctaFinal.subheadline}
          </p>
          <a
            href={config.hero.cta.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('testimonials_cta', config.tracking.whatsappEventName)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-jakarta font-bold text-base transition-all hover:bg-gray-100"
            style={{
              backgroundColor: 'var(--white)',
              color: 'var(--navy-900)',
              boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            }}
          >
            <span className="text-green-500"><WAIcon /></span>
            Cotizar ahora — sin compromiso
          </a>
        </div>
      </section>
    </>
  )
}
