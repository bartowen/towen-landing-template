'use client'

import { motion } from 'framer-motion'
import { trackWhatsAppClick } from '@/lib/tracking'
import { VerticalConfig } from '@/lib/types'

interface HeroProps {
  config: VerticalConfig
}

function WAIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function Hero({ config }: HeroProps) {
  const { hero, tracking } = config

  return (
    <section
      className="min-h-screen flex flex-col md:grid md:grid-cols-2 pt-[72px]"
      style={{ backgroundColor: 'var(--white)' }}
    >
      {/* ── Mobile: image on top ── */}
      <div className="md:hidden w-full h-64 overflow-hidden">
        <img
          src={hero.imagenFondo}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Left column ── */}
      <div className="flex flex-col justify-center px-8 md:px-12 py-12 md:py-20">
        {hero.badge && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full font-jakarta font-semibold text-xs uppercase tracking-widest mb-8"
            style={{
              backgroundColor: 'rgba(8,145,178,0.08)',
              border: '1px solid rgba(8,145,178,0.25)',
              color: 'var(--teal-500)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: 'var(--teal-500)' }}
            />
            {hero.badge}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-jakarta font-extrabold text-4xl md:text-5xl lg:text-6xl leading-none mb-6"
          style={{ color: 'var(--navy-900)', lineHeight: 1.05 }}
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="font-sans text-lg leading-relaxed mb-10 max-w-md"
          style={{ color: 'var(--gray-400)' }}
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
        >
          <a
            href={hero.cta.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('hero', tracking.whatsappEventName)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-jakarta font-bold text-base text-white whatsapp-pulse transition-all hover:brightness-105 hover:-translate-y-0.5"
            style={{
              backgroundColor: '#25D366',
              boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
            }}
          >
            <WAIcon />
            {hero.cta.texto}
          </a>
          {hero.cta.subTexto && (
            <p className="font-sans text-xs mt-3" style={{ color: 'var(--gray-400)' }}>
              {hero.cta.subTexto}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.52 }}
          className="mt-10 flex flex-col gap-3"
        >
          {hero.trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span style={{ color: 'var(--teal-500)' }}>
                <CheckIcon />
              </span>
              <span className="font-sans text-sm" style={{ color: 'var(--navy-900)' }}>
                {item.replace(/^[✓✔]\s*/, '')}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Right column: image (desktop only) ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="hidden md:block relative overflow-hidden"
        style={{ minHeight: 600 }}
      >
        <img
          src={hero.imagenFondo}
          alt=""
          className="w-full h-full object-cover"
          style={{ borderRadius: '1.5rem 0 0 1.5rem' }}
        />

        {/* Floating glassmorphism card */}
        <div
          className="absolute bottom-8 left-8 flex items-center gap-3 rounded-2xl p-4 shadow-xl"
          style={{
            backgroundColor: 'rgba(255,255,255,0.9)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.5)',
          }}
        >
          <span className="text-2xl">🛡️</span>
          <div>
            <p className="font-jakarta font-semibold text-sm" style={{ color: 'var(--navy-900)' }}>
              50+ operadores protegidos
            </p>
            <p className="font-sans text-xs" style={{ color: 'var(--gray-400)' }}>Chile</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
