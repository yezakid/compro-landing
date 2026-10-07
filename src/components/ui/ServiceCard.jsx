const icons = {
  brand: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <path
        d="M12 3 4.5 7v10L12 21l7.5-4V7L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M12 12 4.5 7M12 12l7.5-5M12 12v9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  digital: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  campaign: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
      <path
        d="M4 12c4-6 12-6 16 0-4 6-12 6-16 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
}

export function ServiceCard({ title, description, icon = 'brand', onLearnMore }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-olive/25 hover:shadow-[0_18px_40px_rgba(50,55,40,0.08)]">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sage text-olive">
        {icons[icon] ?? icons.brand}
      </div>
      <h3 className="mb-2 font-display text-xl font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">{description}</p>
      <button
        type="button"
        onClick={onLearnMore}
        className="inline-flex items-center gap-1 text-sm font-medium text-olive transition-colors group-hover:text-olive-dark"
      >
        Pelajari lebih lanjut
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      </button>
    </article>
  )
}
