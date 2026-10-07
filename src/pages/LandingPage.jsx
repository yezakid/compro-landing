import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import { AboutContainer } from '../containers/AboutContainer'
import { CtaContainer } from '../containers/CtaContainer'
import { HeroContainer } from '../containers/HeroContainer'
import { PortfolioContainer } from '../containers/PortfolioContainer'
import { ServicesContainer } from '../containers/ServicesContainer'
import { StatsContainer } from '../containers/StatsContainer'
import { TeamContainer } from '../containers/TeamContainer'
import { TestimonialContainer } from '../containers/TestimonialContainer'
import { useLandingContent } from '../hooks/useContent'

export function LandingPage() {
  const { content, loading } = useLandingContent()

  if (loading || !content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-cream font-sans antialiased">
        <p className="text-sm tracking-wide text-muted">Memuat...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream font-sans text-ink antialiased">
      <Navbar companyName={content.company.name} links={content.nav} />
      <main>
        <HeroContainer data={content.hero} />
        <StatsContainer stats={content.stats} />
        <AboutContainer data={content.about} />
        <ServicesContainer services={content.services} />
        <PortfolioContainer projects={content.projects} />
        <TeamContainer members={content.team} />
        <TestimonialContainer data={content.testimonial} />
        <CtaContainer data={content.cta} />
      </main>
      <Footer company={content.company} links={content.footer} />
    </div>
  )
}
