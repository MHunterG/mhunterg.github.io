import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

const KEY = 'theme'

function current(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function ThemeToggle() {
  // Unknown until mounted, so the prerendered markup matches the first render.
  const [theme, setTheme] = useState<Theme | null>(null)

  useEffect(() => {
    setTheme(current())
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const follow = () => {
      let stored: string | null = null
      try {
        stored = localStorage.getItem(KEY)
      } catch {
        /* storage blocked */
      }
      if (stored) return
      const next: Theme = mq.matches ? 'light' : 'dark'
      document.documentElement.dataset.theme = next
      setTheme(next)
    }
    mq.addEventListener('change', follow)
    return () => mq.removeEventListener('change', follow)
  }, [])

  const flip = () => {
    const next: Theme = current() === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(KEY, next)
    } catch {
      /* storage blocked: the choice lasts for this page view */
    }
    setTheme(next)
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={flip}
      aria-label={theme === 'light' ? 'Switch to dark theme' : theme === 'dark' ? 'Switch to light theme' : 'Switch theme'}
    >
      {/* A half-filled ring: which half is ink depends on the theme. */}
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="8.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path className="theme-toggle-fill" d="M12 3.75a8.25 8.25 0 0 1 0 16.5z" fill="currentColor" />
      </svg>
    </button>
  )
}
