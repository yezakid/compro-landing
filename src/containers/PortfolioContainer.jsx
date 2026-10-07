import { ProjectCard } from '../components/ui/ProjectCard'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'

export function PortfolioContainer({ projects }) {
  if (!projects?.length) return null

  return (
    <section id="proyek" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Proyek"
            title="Cerita yang kami wujudkan."
            description="Beberapa contoh kolaborasi yang menekankan kejelasan brand dan eksekusi visual yang tenang."
            className="mb-12"
          />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <ProjectCard
                category={project.category}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
