export function TeamMemberCard({ name, role, image }) {
  return (
    <article className="group">
      <div className="overflow-hidden rounded-2xl bg-sage">
        <img
          src={image}
          alt={name}
          className="aspect-4/5 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="mt-3">
        <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{name}</h3>
        <p className="text-sm text-muted">{role}</p>
      </div>
    </article>
  )
}
