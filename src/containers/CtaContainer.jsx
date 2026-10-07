import { Button } from '../components/ui/Button'
import { Reveal } from '../components/ui/Reveal'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

export function CtaContainer({ data }) {
  const { handleNavClick } = useSmoothScroll()

  if (!data) return null

  return (
    <section className="pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="rounded-3xl bg-sage px-6 py-14 text-center sm:px-12">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {data.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted">{data.description}</p>
            <div className="mt-8">
              <Button
                size="lg"
                href={data.button.href}
                onClick={(e) => handleNavClick(e, data.button.href)}
              >
                {data.button.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
