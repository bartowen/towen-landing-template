import { VerticalConfig } from './types'

export async function getVerticalConfig(
  slug: string
): Promise<VerticalConfig | null> {
  try {
    const mod = await import(`@/verticals/${slug}/config`)
    return mod.config as VerticalConfig
  } catch {
    return null
  }
}
