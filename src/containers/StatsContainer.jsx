import { Reveal } from '../components/ui/Reveal'
import { StatItem } from '../components/ui/StatItem'

export function StatsContainer({ stats }) {
  if (!stats?.length) return null

  return (
    <section className="border-y border-line bg-white/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-12 sm:px-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 80}>
            <StatItem value={stat.value} label={stat.label} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
