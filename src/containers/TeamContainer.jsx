import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { TeamMemberCard } from '../components/ui/TeamMemberCard'

export function TeamContainer({ members }) {
  if (!members?.length) return null

  return (
    <section id="tim" className="bg-white/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Tim"
            title="Orang-orang di balik setiap ide baik."
            description="Tim kecil yang saling melengkapi — dari strategi sampai eksekusi visual."
            className="mb-12"
          />
        </Reveal>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {members.map((member, index) => (
            <Reveal key={member.id} delay={index * 80}>
              <TeamMemberCard name={member.name} role={member.role} image={member.image} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
