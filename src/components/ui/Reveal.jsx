import { useReveal } from '../../hooks/useReveal'

export function Reveal({ children, className = '', delay = 0 }) {
  const { ref, isVisible } = useReveal()

  return (
    <div
      ref={ref}
      className={[
        'transition-all duration-700 ease-out motion-reduce:transition-none',
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-5 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
