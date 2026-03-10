'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { VerticalConfig } from '@/lib/types'

interface TestimonialsProps {
  config: VerticalConfig
}

export function Testimonials({ config }: TestimonialsProps) {
  const { testimonios } = config
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  if (!testimonios.titulo && testimonios.items.length === 0) return null

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ color: 'var(--text-primary)' }}
        >
          {testimonios.titulo}
        </h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonios.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.5, delay: i * 0.14 }}
              className="relative p-8 rounded-2xl flex flex-col"
              style={{
                backgroundColor: 'var(--surface-1)',
                border: '1px solid var(--border-sutil)',
              }}
            >
              {/* Decorative quote */}
              <div
                className="absolute top-4 right-5 font-display text-8xl font-black leading-none select-none pointer-events-none"
                style={{ color: 'var(--color-primario)', opacity: 0.13 }}
              >
                "
              </div>

              {/* Quote text */}
              <p
                className="font-sans text-sm leading-relaxed mb-6 relative z-10 flex-1"
                style={{ color: 'var(--text-secondary)' }}
              >
                "{item.texto}"
              </p>

              {/* Author row */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid var(--border-sutil)' }}>
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center font-sans font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-primario)', color: '#0a0c0f' }}
                >
                  {item.autor.charAt(0)}
                </div>
                <div>
                  <p
                    className="font-sans font-semibold text-sm"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.autor}
                  </p>
                  <p
                    className="font-sans text-xs mt-0.5"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item.empresa} · {item.ciudad}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insurance company logos */}
        {testimonios.logos && testimonios.logos.length > 0 && (
          <div
            className="pt-10 mt-4"
            style={{ borderTop: '1px solid var(--border-sutil)' }}
          >
            <p
              className="font-sans text-xs uppercase tracking-widest text-center mb-7"
              style={{ color: 'var(--text-secondary)' }}
            >
              Trabajamos con las mejores aseguradoras
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {testimonios.logos.map((logo, i) => (
                <div
                  key={i}
                  className="px-6 py-3 rounded-xl font-sans text-sm font-semibold transition-all duration-300 cursor-default"
                  style={{
                    backgroundColor: 'var(--surface-1)',
                    border: '1px solid var(--border-sutil)',
                    color: 'var(--text-secondary)',
                    filter: 'grayscale(70%)',
                    opacity: 0.65,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.filter = 'grayscale(0%)'
                    el.style.opacity = '1'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.filter = 'grayscale(70%)'
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
  )
}
