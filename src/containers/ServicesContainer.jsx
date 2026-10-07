import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ui/ServiceCard'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

export function ServicesContainer({ services }) {
  const { scrollTo } = useSmoothScroll()

  if (!services?.length) return null

  return (
    <section id="layanan" className="bg-white/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Layanan"
            title="Solusi kreatif, dari ide hingga aksi."
            description="Fokus pada tiga area yang paling sering dibutuhkan bisnis saat ingin terlihat lebih jelas dan kredibel."
            className="mb-12"
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 90}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                onLearnMore={() => scrollTo('#kontak')}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
