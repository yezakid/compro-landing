import {
  aboutContent,
  companyInfo,
  ctaContent,
  footerLinks,
  heroContent,
  navLinks,
  projects,
  services,
  stats,
  teamMembers,
  testimonial,
} from '../data/dummy'

const delay = (ms = 0) => new Promise((resolve) => setTimeout(resolve, ms))

/** Mock service layer — ganti isi dengan API/CMS nanti tanpa ubah UI. */
export const contentService = {
  async getCompanyInfo() {
    await delay()
    return companyInfo
  },

  async getNavLinks() {
    await delay()
    return navLinks
  },

  async getHero() {
    await delay()
    return heroContent
  },

  async getStats() {
    await delay()
    return stats
  },

  async getAbout() {
    await delay()
    return aboutContent
  },

  async getServices() {
    await delay()
    return services
  },

  async getProjects() {
    await delay()
    return projects
  },

  async getTeam() {
    await delay()
    return teamMembers
  },

  async getTestimonial() {
    await delay()
    return testimonial
  },

  async getCta() {
    await delay()
    return ctaContent
  },

  async getFooterLinks() {
    await delay()
    return footerLinks
  },
}
