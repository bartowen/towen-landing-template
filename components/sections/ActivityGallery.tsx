'use client'

import { motion } from 'framer-motion'
import { VerticalConfig } from '@/lib/types'

interface ActivityGalleryProps {
  config: VerticalConfig
}

export function ActivityGallery({ config }: ActivityGalleryProps) {
  const { galeria } = config
  if (!galeria || galeria.imagenes.length === 0) return null

  const imgs = galeria.imagenes
  // Fill to at least 6 images
  const col1 = [imgs[0], imgs[1]].filter(Boolean)
  const col2 = [imgs[2], imgs[3]].filter(Boolean)
  const col3 = [imgs[4], imgs[5]].filter(Boolean)

  const heights = {
    col1: ['h-64', 'h-40'],
    col2: ['h-52', 'h-52'],
    col3: ['h-40', 'h-64'],
  }

  const imgVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.08 },
    }),
  }

  function renderColumn(images: string[], colHeights: string[], colOffset: number) {
    return (
      <div className="flex flex-col gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            custom={colOffset + i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imgVariant}
            className={`${colHeights[i]} w-full rounded-2xl overflow-hidden`}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover transition-all duration-500 hover:scale-105 hover:brightness-105"
            />
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <section className="py-20 px-6" style={{ backgroundColor: 'var(--gray-50)' }}>
      <div className="max-w-6xl mx-auto">
        <h2
          className="font-jakarta font-extrabold text-3xl md:text-4xl text-center mb-12"
          style={{ color: 'var(--navy-900)' }}
        >
          {galeria.titulo}
        </h2>

        {/* Desktop: 3 col masonry */}
        <div className="hidden md:grid grid-cols-3 gap-4">
          {renderColumn(col1, heights.col1, 0)}
          {renderColumn(col2, heights.col2, 2)}
          {renderColumn(col3, heights.col3, 4)}
        </div>

        {/* Mobile: 2 col grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {imgs.slice(0, 6).map((src, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imgVariant}
              className="h-40 rounded-xl overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
