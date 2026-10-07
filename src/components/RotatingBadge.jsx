/** Selo circular com texto girando devagar. Vira link para uma seção. */
export default function RotatingBadge({ href, label, text, className = '' }) {
  return (
    <a href={href} aria-label={label} className={`group absolute z-10 ${className}`}>
      <svg viewBox="0 0 200 200" className="spin-slow h-full w-full" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text
          fill="#f4f1fa"
          fontSize="19"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          textLength="484"
          lengthAdjust="spacing"
        >
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 m-auto h-3 w-3 rounded-full bg-magenta shadow-[0_0_30px_8px_rgba(214,51,159,0.6)] transition-transform duration-500 group-hover:scale-[2.4]" />
    </a>
  )
}
