import { useEffect, useState } from 'react'
import { Button } from '../ui/Button'
import { useSmoothScroll } from '../../hooks/useSmoothScroll'

export function Navbar({ companyName, links, ctaLabel = 'Mulai Konsultasi', ctaHref = '#kontak' }) {
  const { handleNavClick } = useSmoothScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-cream/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <a
          href="#beranda"
          onClick={(e) => handleNavClick(e, '#beranda')}
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          {companyName}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={ctaHref} onClick={(e) => handleNavClick(e, ctaHref)}>
            {ctaLabel}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-4 flex-col gap-1">
            <span className={`h-0.5 bg-ink transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`h-0.5 bg-ink transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-ink transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line bg-cream px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href)
                  setOpen(false)
                }}
                className="py-1 text-sm text-ink"
              >
                {link.label}
              </a>
            ))}
            <Button
              href={ctaHref}
              className="mt-2 w-full"
              onClick={(e) => {
                handleNavClick(e, ctaHref)
                setOpen(false)
              }}
            >
              {ctaLabel}
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
