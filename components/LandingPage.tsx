'use client'

import { useEffect } from 'react'
import { VerticalConfig } from '@/lib/types'
import { isColorDark } from '@/lib/theme'
import { initTracking } from '@/lib/tracking'
import { TopBar } from '@/components/sections/TopBar'
import { Hero } from '@/components/sections/Hero'
import { ClientLogos } from '@/components/sections/ClientLogos'
import { Stats } from '@/components/sections/Stats'
import { Products } from '@/components/sections/Products'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTAFinal } from '@/components/sections/CTAFinal'
import { Footer } from '@/components/sections/Footer'
import { WhatsAppButtonSticky } from '@/components/ui/WhatsAppButtonSticky'

interface LandingPageProps {
  config: VerticalConfig
}

export function LandingPage({ config }: LandingPageProps) {
  useEffect(() => {
    const root = document.documentElement
    const { colorPrimario, colorFondo, colorTexto } = config.marca
    const dark = isColorDark(colorFondo)

    root.style.setProperty('--color-primario', colorPrimario)
    root.style.setProperty('--color-fondo', colorFondo)
    root.style.setProperty('--color-texto', colorTexto)

    if (dark) {
      root.style.setProperty('--text-primary',   colorTexto)
      root.style.setProperty('--text-secondary', 'rgba(248,249,250,0.55)')
      root.style.setProperty('--surface-1',      'rgba(255,255,255,0.04)')
      root.style.setProperty('--surface-2',      'rgba(255,255,255,0.08)')
      root.style.setProperty('--border-sutil',   'rgba(255,255,255,0.08)')
      root.style.setProperty('--bg-base',        colorFondo)
      root.style.setProperty('--bg-surface',     '#111418')
      root.style.setProperty('--bg-card',        'rgba(255,255,255,0.04)')
      root.style.setProperty('--border',         'rgba(255,255,255,0.08)')
    } else {
      root.style.setProperty('--text-primary',   colorTexto || '#0f172a')
      root.style.setProperty('--text-secondary', 'rgba(15,23,42,0.55)')
      root.style.setProperty('--surface-1',      '#ffffff')
      root.style.setProperty('--surface-2',      '#f1f5f9')
      root.style.setProperty('--border-sutil',   'rgba(0,0,0,0.08)')
      root.style.setProperty('--bg-base',        colorFondo)
      root.style.setProperty('--bg-surface',     '#f8fafc')
      root.style.setProperty('--bg-card',        '#ffffff')
      root.style.setProperty('--border',         'rgba(0,0,0,0.08)')
    }

    document.body.style.backgroundColor = colorFondo
    root.setAttribute('data-theme', dark ? 'dark' : 'light')

    initTracking()
  }, [config.marca])

  return (
    <main>
      <TopBar config={config} />
      <Hero config={config} />
      <ClientLogos config={config} />
      <Stats config={config} />
      <Products config={config} />
      <HowItWorks config={config} />
      <Testimonials config={config} />
      <FAQ config={config} />
      <CTAFinal config={config} />
      <Footer config={config} />
      <WhatsAppButtonSticky
        url={config.hero.cta.url}
        eventName={config.tracking.whatsappEventName}
      />
    </main>
  )
}
