import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

export function HeroContainer({ data }) {
  const { handleNavClick } = useSmoothScroll()

  if (!data) return null

  return (
    <section id="beranda" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-sage/70 blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-olive/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pb-20">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-olive">
            {data.eyebrow}
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            {data.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {data.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              href={data.primaryCta.href}
              onClick={(e) => handleNavClick(e, data.primaryCta.href)}
            >
              {data.primaryCta.label}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              href={data.secondaryCta.href}
              onClick={(e) => handleNavClick(e, data.secondaryCta.href)}
            >
              {data.secondaryCta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={data.image}
              alt={data.imageAlt}
              className="aspect-5/4 w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
