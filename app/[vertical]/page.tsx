import { getVerticalConfig } from '@/lib/config-loader'
import { LandingPage } from '@/components/LandingPage'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { vertical: string }
}): Promise<Metadata> {
  const config = await getVerticalConfig(params.vertical)
  if (!config) return {}
  return {
    title: config.meta.titulo,
    description: config.meta.descripcion,
  }
}

export default async function VerticalLanding({
  params,
}: {
  params: { vertical: string }
}) {
  const config = await getVerticalConfig(params.vertical)
  if (!config) notFound()
  return <LandingPage config={config} />
}

export function generateStaticParams() {
  return [{ vertical: 'turismo' }, { vertical: 'comunidades' }]
}
