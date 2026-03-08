'use client'

import { motion } from 'framer-motion'
import { trackWhatsAppClick } from '@/lib/tracking'
import { VerticalConfig } from '@/lib/types'

interface HeroProps {
  config: VerticalConfig
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
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
          background: `radial-gradient(ellipse 60% 40% at 50% 50%, rgba(212, 168, 83, 0.08) 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Badge */}
        {hero.badge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 rounded-full text-sm font-sans font-medium"
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
          className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight text-white"
        >
          {hero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white drop-shadow-lg"
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
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-sans font-bold text-lg whatsapp-pulse transition-transform hover:scale-105"
            style={{
              backgroundColor: '#25D366',
              boxShadow: '0 0 30px rgba(37,211,102,0.4)',
            }}
          >
            <WhatsAppIcon />
            {hero.cta.texto}
          </a>
          {hero.cta.subTexto && (
            <p className="font-sans text-sm" style={{ color: 'var(--text-secondary)' }}>
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
              className="font-sans text-sm font-medium"
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
