/**
 * Returns true if the hex color is dark (luminance < 0.5).
 * Used to toggle dark/light mode styling in components.
 */
export function isColorDark(hex: string): boolean {
  try {
    const h = hex.replace('#', '')
    const r = parseInt(h.slice(0, 2), 16)
    const g = parseInt(h.slice(2, 4), 16)
    const b = parseInt(h.slice(4, 6), 16)
    return (0.299 * r + 0.587 * g + 0.114 * b) / 255 < 0.5
  } catch {
    return true
  }
}

/**
 * Darkens a hex color by the given percentage (0–100).
 */
export function darkenColor(hex: string, pct: number): string {
  try {
    const h = hex.replace('#', '')
    const factor = 1 - pct / 100
    const r = Math.round(parseInt(h.slice(0, 2), 16) * factor)
    const g = Math.round(parseInt(h.slice(2, 4), 16) * factor)
    const b = Math.round(parseInt(h.slice(4, 6), 16) * factor)
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
  } catch {
    return hex
  }
}
