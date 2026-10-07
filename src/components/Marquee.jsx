function Star() {
  return (
    <svg viewBox="0 0 24 24" className="mx-8 h-5 w-5 shrink-0 text-magenta sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
      <path d="M12 0c.6 6.6 5.4 11.4 12 12-6.6.6-11.4 5.4-12 12-.6-6.6-5.4-11.4-12-12C6.6 11.4 11.4 6.6 12 0Z" />
    </svg>
  )
}

/** Faixa inclinada de palavras em movimento contínuo (pausa ao passar o mouse). */
export default function Marquee({ items, className = '' }) {
  return (
    <div className={`marquee-wrap -ml-[5%] w-[110%] -rotate-2 border-y border-white/10 bg-night/50 py-3 backdrop-blur-sm ${className}`}>
      <p className="sr-only">Áreas: {items.join(', ')}</p>
      <div className="marquee flex w-max" aria-hidden="true">
        {[0, 1].map((group) => (
          <ul key={group} className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <li
                key={item}
                className={`flex items-center whitespace-nowrap font-display text-[clamp(1.75rem,5vw,3.75rem)] font-bold ${
                  i % 2 ? 'text-ink' : 'text-outline'
                }`}
              >
                {item}
                <Star />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
