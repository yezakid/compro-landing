import { useCallback } from 'react'

/**
 * Smooth scroll ke anchor internal (#section).
 */
export function useSmoothScroll() {
  const scrollTo = useCallback((href) => {
    if (!href || !href.startsWith('#')) return

    const target = document.querySelector(href)
    if (!target) return

    const headerOffset = 80
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset

    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  const handleNavClick = useCallback(
    (event, href) => {
      if (!href?.startsWith('#')) return
      event.preventDefault()
      scrollTo(href)
    },
    [scrollTo],
  )

  return { scrollTo, handleNavClick }
}
