export function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-ink sm:text-base">
      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-olive text-white">
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3 w-3">
          <path
            d="M3.5 8.5 6.5 11.5 12.5 4.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{children}</span>
    </li>
  )
}
