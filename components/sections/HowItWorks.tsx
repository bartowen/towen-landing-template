'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { VerticalConfig } from '@/lib/types'
import { SectionCTA } from '@/components/ui/SectionCTA'

interface HowItWorksProps {
  config: VerticalConfig
}

export function HowItWorks({ config }: HowItWorksProps) {
  const { comoFunciona } = config

  if (!comoFunciona.titulo && comoFunciona.pasos.length === 0) return null

  return (
    <>
      <section className="py-20 px-6" style={{ backgroundColor: 'var(--white)' }}>
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-jakarta font-extrabold text-3xl md:text-4xl text-center mb-16"
            style={{ color: 'var(--navy-900)' }}
          >
            {comoFunciona.titulo}
          </h2>

          {/* ─── Desktop: horizontal with connectors ─── */}
          <div className="hidden md:flex items-start justify-between">
            {comoFunciona.pasos.map((paso, i) => (
              <React.Fragment key={i}>
                {/* Step */}
                <div className="flex flex-col items-center text-center" style={{ width: 200 }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.38, delay: i * 0.18 }}
                    className="w-14 h-14 rounded-full flex items-center justify-center font-jakarta font-extrabold text-xl text-white mb-5"
                    style={{ backgroundColor: 'var(--navy-500)' }}
                  >
                    {i + 1}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.42, delay: i * 0.18 + 0.12 }}
                  >
                    <h3
                      className="font-jakarta font-semibold text-base mb-2"
                      style={{ color: 'var(--navy-900)' }}
                    >
                      {paso.titulo}
                    </h3>
                    <p
                      className="font-sans text-sm leading-relaxed"
                      style={{ color: 'var(--gray-400)' }}
                    >
                      {paso.descripcion}
                    </p>
                  </motion.div>
                </div>

                {/* Connector (not after last) */}
                {i < comoFunciona.pasos.length - 1 && (
                  <div
                    className="flex-1 self-start mt-7 mx-2"
                    style={{ borderTop: '2px dashed var(--gray-100)' }}
                  />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* ─── Mobile: vertical ─── */}
          <div className="md:hidden space-y-10">
            {comoFunciona.pasos.map((paso, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
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
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: 'var(--gray-400)' }}
                  >
                    {paso.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        texto="Cotiza en minutos. Sin formularios eternos."
        variante="bordered"
        ctaUrl={config.hero.cta.url}
        eventName={config.tracking.whatsappEventName}
      />
    </>
  )
}
