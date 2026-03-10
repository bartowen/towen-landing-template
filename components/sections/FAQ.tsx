'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { VerticalConfig } from '@/lib/types'

interface FAQProps {
  config: VerticalConfig
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.24 }}
      className="flex-shrink-0"
      style={{ color: 'var(--color-primario)' }}
    >
      <path d="M6 9l6 6 6-6" />
    </motion.svg>
  )
}

export function FAQ({ config }: FAQProps) {
  const { faq } = config
  const [open, setOpen] = useState<number | null>(null)

  if (!faq.titulo && faq.items.length === 0) return null

  return (
    <section className="py-24 px-6" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-display text-3xl md:text-4xl font-bold text-center mb-16"
          style={{ color: 'var(--text-primary)' }}
        >
          {faq.titulo}
        </h2>

        <div
          className="rounded-2xl overflow-hidden"
          style={{
            border: '1px solid var(--border-sutil)',
            backgroundColor: 'var(--surface-1)',
          }}
        >
          {faq.items.map((item, i) => (
            <div
              key={i}
              style={{
                borderBottom:
                  i < faq.items.length - 1
                    ? '1px solid var(--border-sutil)'
                    : 'none',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 transition-colors duration-200"
                style={{
                  backgroundColor: open === i ? 'var(--surface-2)' : 'transparent',
                }}
              >
                <span
                  className="font-sans font-semibold text-sm md:text-base leading-snug"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.pregunta}
                </span>
                <ChevronIcon open={open === i} />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.27, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-6 pt-1 font-sans text-sm leading-relaxed"
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
