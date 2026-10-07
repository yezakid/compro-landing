import { Reveal } from '../components/ui/Reveal'

export function TestimonialContainer({ data }) {
  if (!data) return null

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-display text-5xl leading-none text-olive/40">“</p>
          <blockquote className="mt-2 font-display text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
            {data.quote}
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-3">
            <img
              src={data.image}
              alt={data.name}
              className="h-11 w-11 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <p className="text-sm font-semibold text-ink">{data.name}</p>
              <p className="text-sm text-muted">{data.role}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
