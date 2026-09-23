import type { ReactNode } from 'react'

/** Up-right arrow; the font subset carries no arrow glyphs. */
export function Arrow({ className = 'arrow' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

/**
 * A ragged, sawtoothed rule, the spikes of the avatar's mane laid flat.
 * Tooth heights come from a fixed seed so the server and client render the
 * same shape.
 */
export function Serration({ seed = 7, teeth = 56, className = '' }: { seed?: number; teeth?: number; className?: string }) {
  let s = seed
  const rand = () => {
    s = (s * 16807) % 2147483647
    return s / 2147483647
  }
  const w = 1000
  const step = w / teeth
  const pts: string[] = ['0,11']
  for (let i = 0; i < teeth; i++) {
    const x = i * step
    const peak = 1 + rand() * 7
    const lean = 0.35 + rand() * 0.3
    pts.push(`${(x + step * lean).toFixed(1)},${peak.toFixed(1)}`, `${(x + step).toFixed(1)},11`)
  }
  return (
    <svg className={`serration ${className}`} viewBox="0 0 1000 12" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <polyline points={pts.join(' ')} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

export function Section({
  id,
  index,
  kicker,
  children,
  seed,
}: {
  id: string
  index: string
  kicker: string
  children: ReactNode
  seed: number
}) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <Serration seed={seed} teeth={22} className="serration-coarse" />
      <Serration seed={seed} teeth={60} className="serration-fine" />
      <div className="section-grid">
        <p className="kicker section-kicker">
          <span className="kicker-index">{index}</span>
          {kicker}
        </p>
        <div className="section-body">{children}</div>
      </div>
    </section>
  )
}
