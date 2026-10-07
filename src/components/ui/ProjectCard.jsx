export function ProjectCard({ category, title, description, image }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-2xl bg-sage">
        <img
          src={image}
          alt={title}
          className="aspect-4/3 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="mt-4 space-y-1.5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-olive">{category}</p>
        <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">{title}</h3>
        <p className="max-w-md text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  )
}
