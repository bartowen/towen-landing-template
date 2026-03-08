'use client'

import { motion } from 'framer-motion'
import { trackWhatsAppClick } from '@/lib/tracking'
import { VerticalConfig } from '@/lib/types'

interface HeroProps {
  config: VerticalConfig
}

export function Hero({ config }: HeroProps) {
  const { hero, tracking } = config

  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `url(${hero.imagenFondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(10,12,15,0.65)' }}
      />

      {/* Radial glow behind headline */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 40% at 50% 50%, rgba(var(--color-primario-rgb, 212, 168, 83), 0.08) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        {hero.badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(212, 168, 83, 0.3)',
              color: 'var(--color-primario)',
            }}
          >
            {hero.badge}
          </motion.div>
        )}

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)',
          }}
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          {hero.subheadline}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-3"
        >
          <a
            href={hero.cta.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero', tracking.whatsappEventName)}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg whatsapp-pulse transition-transform hover:scale-105"
            style={{
              backgroundColor: '#25D366',
              boxShadow: '0 0 30px rgba(37,211,102,0.4)',
            }}
          >
            {hero.cta.texto}
          </a>
          {hero.cta.subTexto && (
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              {hero.cta.subTexto}
            </p>
          )}
        </motion.div>

        {/* Trust items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
        >
          {hero.trustItems.map((item, i) => (
            <span
              key={i}
              className="text-sm font-medium"
              style={{ color: 'var(--color-primario)' }}
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
