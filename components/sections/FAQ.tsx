'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { VerticalConfig } from '@/lib/types'

interface FAQProps {
  config: VerticalConfig
}

export function FAQ({ config }: FAQProps) {
  const { faq } = config
  const [open, setOpen] = useState<number | null>(null)

  if (!faq.titulo && faq.items.length === 0) return null

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          {faq.titulo}
        </h2>

        <div className="space-y-3">
          {faq.items.map((item, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{
                border: `1px solid ${open === i ? 'var(--color-primario)' : 'var(--border)'}`,
                backgroundColor: 'var(--bg-card)',
                transition: 'border-color 0.2s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                  {item.pregunta}
                </span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-4 flex-shrink-0 text-xl font-light"
                  style={{ color: 'var(--color-primario)' }}
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-5 text-sm leading-relaxed"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {item.respuesta}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
