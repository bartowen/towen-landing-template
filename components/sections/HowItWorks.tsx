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
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl md:text-4xl font-bold text-center mb-20"
          style={{ color: 'var(--text-primary)' }}
        >
          {comoFunciona.titulo}
        </h2>

        {/* ─── Desktop: horizontal with connector lines ─── */}
        <div ref={ref} className="hidden md:flex items-start gap-0">
          {comoFunciona.pasos.map((paso, i) => (
            <div
              key={i}
              className="flex-1 relative flex flex-col items-center text-center px-6"
            >
              {/* Connector line (right half to next step) */}
              {i < comoFunciona.pasos.length - 1 && (
                <div
                  className="absolute top-8 left-1/2 w-full h-px overflow-hidden"
                  style={{ backgroundColor: 'var(--border-sutil)' }}
                >
                  <motion.div
                    className="h-full"
                    style={{ backgroundColor: 'var(--color-primario)', opacity: 0.55 }}
                    initial={{ width: '0%' }}
                    animate={inView ? { width: '100%' } : { width: '0%' }}
                    transition={{ duration: 0.7, delay: i * 0.3 + 0.3, ease: 'easeInOut' }}
                  />
                </div>
              )}

              {/* Number circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                className="w-16 h-16 rounded-full flex items-center justify-center font-sans text-xl font-bold relative z-10 mb-7"
                style={{
                  backgroundColor: 'var(--surface-1)',
                  border: '2px solid var(--color-primario)',
                  color: 'var(--color-primario)',
                  boxShadow: '0 0 24px rgba(212,168,83,0.2)',
                }}
              >
                {i + 1}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ duration: 0.5, delay: i * 0.2 + 0.15 }}
              >
                <h3
                  className="font-jakarta text-base font-semibold mb-2"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {paso.titulo}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {paso.descripcion}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ─── Mobile: vertical with left line ─── */}
        <div className="md:hidden relative pl-6">
          <div
            className="absolute left-6 top-0 bottom-0 w-px overflow-hidden"
            style={{ backgroundColor: 'var(--border-sutil)' }}
          >
            <motion.div
              className="w-full"
              style={{ backgroundColor: 'var(--color-primario)', opacity: 0.5 }}
              initial={{ height: '0%' }}
              animate={inView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 1.3, ease: 'easeInOut' }}
            />
          </div>

          <div className="space-y-12">
            {comoFunciona.pasos.map((paso, i) => (
              <motion.div
                key={i}
                ref={i === 0 ? ref : undefined}
                initial={{ opacity: 0, x: -18 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
                transition={{ duration: 0.45, delay: i * 0.18 }}
                className="flex items-start gap-5"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-sans font-bold relative z-10"
                  style={{
                    backgroundColor: 'var(--surface-1)',
                    border: '2px solid var(--color-primario)',
                    color: 'var(--color-primario)',
                  }}
                >
                  {i + 1}
                </div>
                <div className="pt-1.5">
                  <h3
                    className="font-jakarta text-base font-semibold mb-1"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {paso.titulo}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {paso.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
