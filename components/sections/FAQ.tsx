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
      transition={{ duration: 0.22 }}
      className="flex-shrink-0"
      style={{ color: 'var(--gray-400)' }}
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
    <section className="py-20 px-6" style={{ backgroundColor: 'var(--gray-50)' }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-jakarta font-extrabold text-3xl md:text-4xl text-center mb-14"
          style={{ color: 'var(--navy-900)' }}
        >
          {faq.titulo}
        </h2>

        <div>
          {faq.items.map((item, i) => (
            <div
              key={i}
              style={{ borderBottom: '1px solid var(--gray-100)' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <span
                  className="font-jakarta font-semibold text-base"
                  style={{ color: 'var(--navy-900)' }}
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
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div
                      className="pb-5 font-sans text-sm leading-relaxed"
                      style={{ color: 'var(--gray-400)' }}
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
