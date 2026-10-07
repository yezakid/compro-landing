import { useEffect, useState } from 'react'
import { contentService } from '../services/contentService'

/**
 * Generic loader untuk data dari service layer.
 */
export function useContent(fetcher, initialValue = null) {
  const [data, setData] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const result = await fetcher()
        if (active) setData(result)
      } catch (err) {
        if (active) setError(err)
      } finally {
        if (active) setLoading(false)
      }
    }

    load()
    return () => {
      active = false
    }
  }, [fetcher])

  return { data, loading, error }
}

export function useLandingContent() {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function loadAll() {
      setLoading(true)
      try {
        const [
          company,
          nav,
          hero,
          stats,
          about,
          services,
          projects,
          team,
          testimonial,
          cta,
          footer,
        ] = await Promise.all([
          contentService.getCompanyInfo(),
          contentService.getNavLinks(),
          contentService.getHero(),
          contentService.getStats(),
          contentService.getAbout(),
          contentService.getServices(),
          contentService.getProjects(),
          contentService.getTeam(),
          contentService.getTestimonial(),
          contentService.getCta(),
          contentService.getFooterLinks(),
        ])

        if (!active) return

        setContent({
          company,
          nav,
          hero,
          stats,
          about,
          services,
          projects,
          team,
          testimonial,
          cta,
          footer,
        })
      } finally {
        if (active) setLoading(false)
      }
    }

    loadAll()
    return () => {
      active = false
    }
  }, [])

  return { content, loading }
}
