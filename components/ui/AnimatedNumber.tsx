'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedNumberProps {
  value: string
  className?: string
}

function parseValue(val: string): { prefix: string; number: number; suffix: string } {
  const match = val.match(/^([^0-9]*)([0-9,\.]+)(.*)$/)
  if (!match) return { prefix: '', number: 0, suffix: val }
  return {
    prefix: match[1],
    number: parseFloat(match[2].replace(/,/g, '')),
    suffix: match[3],
  }
}

export function AnimatedNumber({ value, className }: AnimatedNumberProps) {
  const [displayed, setDisplayed] = useState('0')
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const { prefix, number, suffix } = parseValue(value)

    if (isNaN(number)) {
      setDisplayed(value)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true
          const duration = 1500
          const start = performance.now()

          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const current = Math.round(eased * number)

            if (Number.isInteger(number)) {
              setDisplayed(`${prefix}${current.toLocaleString('es-CL')}${suffix}`)
            } else {
              setDisplayed(`${prefix}${(eased * number).toFixed(1)}${suffix}`)
            }

            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className={className}>
      {displayed || value}
    </span>
  )
}
