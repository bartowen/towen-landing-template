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
  const inView = useInView(ref, { once: true, margin: '-80px' })

  if (!comoFunciona.titulo && comoFunciona.pasos.length === 0) return null

  return (
    <section className="py-20 px-6" style={{ backgroundColor: 'var(--white)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-jakarta font-extrabold text-3xl md:text-4xl text-center mb-16"
          style={{ color: 'var(--navy-900)' }}
        >
          {comoFunciona.titulo}
        </h2>

        {/* ─── Desktop: horizontal ─── */}
        <div ref={ref} className="hidden md:flex items-start">
          {comoFunciona.pasos.map((paso, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center relative">
              {/* Dashed connector (not last) */}
              {i < comoFunciona.pasos.length - 1 && (
                <div
                  className="absolute top-7 left-1/2 w-full"
                  style={{
                    borderTop: '2px dashed var(--gray-100)',
                    marginTop: '-1px',
                  }}
                />
              )}

              {/* Number circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.38, delay: i * 0.18 }}
                className="w-14 h-14 rounded-full flex items-center justify-center font-jakarta font-extrabold text-xl text-white relative z-10 mb-5"
                style={{ backgroundColor: 'var(--navy-500)' }}
              >
                {i + 1}
              </motion.div>

              <motion.div
                className="px-4"
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: 0.42, delay: i * 0.18 + 0.12 }}
              >
                <h3
                  className="font-jakarta font-semibold text-base mb-2"
                  style={{ color: 'var(--navy-900)' }}
                >
                  {paso.titulo}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--gray-400)' }}>
                  {paso.descripcion}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ─── Mobile: vertical ─── */}
        <div className="md:hidden space-y-10">
          {comoFunciona.pasos.map((paso, i) => (
            <motion.div
              key={i}
              ref={i === 0 ? ref : undefined}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="flex items-start gap-5"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-jakarta font-extrabold text-base text-white flex-shrink-0"
                style={{ backgroundColor: 'var(--navy-500)' }}
              >
                {i + 1}
              </div>
              <div className="pt-1">
                <h3
                  className="font-jakarta font-semibold text-base mb-1"
                  style={{ color: 'var(--navy-900)' }}
                >
                  {paso.titulo}
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: 'var(--gray-400)' }}>
                  {paso.descripcion}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
