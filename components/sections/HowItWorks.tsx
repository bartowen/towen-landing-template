'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { VerticalConfig } from '@/lib/types'

interface HowItWorksProps {
  config: VerticalConfig
}

export function HowItWorks({ config }: HowItWorksProps) {
  const { comoFunciona } = config
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  if (!comoFunciona.titulo && comoFunciona.pasos.length === 0) return null

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-20"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          {comoFunciona.titulo}
        </h2>

        <div ref={ref} className="relative">
          {/* Animated vertical line */}
          <div
            className="absolute left-8 top-0 w-px"
            style={{ backgroundColor: 'var(--border)', height: '100%' }}
          >
            <motion.div
              className="w-full"
              style={{ backgroundColor: 'var(--color-primario)' }}
              initial={{ height: '0%' }}
              animate={inView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          <div className="space-y-16 pl-24">
            {comoFunciona.pasos.map((paso, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="relative"
              >
                {/* Step circle */}
                <div
                  className="absolute -left-24 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{
                    backgroundColor: 'var(--bg-card)',
                    border: '2px solid var(--color-primario)',
                    color: 'var(--color-primario)',
                  }}
                >
                  {i + 1}
                </div>

                {/* Big number decoration */}
                <div
                  className="text-8xl font-black leading-none mb-3 select-none"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--color-primario)',
                    opacity: 0.08,
                    position: 'absolute',
                    top: '-20px',
                    left: '-10px',
                    pointerEvents: 'none',
                  }}
                >
                  {paso.numero}
                </div>

                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {paso.titulo}
                </h3>
                <p style={{ color: 'var(--text-secondary)' }}>{paso.descripcion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
