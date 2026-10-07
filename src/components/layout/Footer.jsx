import { useSmoothScroll } from '../../hooks/useSmoothScroll'

export function Footer({ company, links }) {
  const { handleNavClick } = useSmoothScroll()
  const year = new Date().getFullYear()

  return (
    <footer id="kontak" className="bg-footer text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold tracking-tight">{company.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
            Studio branding yang membantu bisnis menemukan arah kreatif yang jelas dan dapat
            dieksekusi.
          </p>
          <div className="mt-5 flex gap-4">
            {company.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold tracking-wide">Tautan</p>
          <ul className="space-y-2.5">
            {links.tautan.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold tracking-wide">Layanan</p>
          <ul className="space-y-2.5">
            {links.layanan.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold tracking-wide">Kontak</p>
          <ul className="space-y-2.5 text-sm text-white/65">
            <li>{company.email}</li>
            <li>{company.phone}</li>
            <li className="leading-relaxed">{company.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-white/45 sm:px-8">
          © {year} {company.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
