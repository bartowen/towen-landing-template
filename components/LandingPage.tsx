'use client'

import { useEffect } from 'react'
import { VerticalConfig } from '@/lib/types'
import { initTracking } from '@/lib/tracking'
import { TopBar } from '@/components/sections/TopBar'
import { Hero } from '@/components/sections/Hero'
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
    document.documentElement.style.setProperty(
      '--color-primario',
      config.marca.colorPrimario
    )
    initTracking()
  }, [config.marca.colorPrimario])

  return (
    <main>
      <TopBar config={config} />
      <Hero config={config} />
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
