import { CheckItem } from '../components/ui/CheckItem'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function AboutContainer({ data }) {
  if (!data) return null

  return (
    <section id="tentang" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <div className="overflow-hidden rounded-3xl">
            <img
              src={data.image}
              alt={data.imageAlt}
              className="aspect-5/4 w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <SectionHeading
            eyebrow={data.eyebrow}
            title={data.title}
            description={data.description}
          />
          <ul className="mt-7 space-y-3.5">
            {data.points.map((point) => (
              <CheckItem key={point}>{point}</CheckItem>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
