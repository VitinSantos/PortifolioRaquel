const variants = {
  primary: 'bg-ink text-night hover:bg-lilac',
  ghost: 'border border-white/25 text-ink hover:border-lilac hover:text-lilac',
}

/** Link (quando tem href) ou botão. Links externos abrem em nova aba com segurança. */
export default function Button({ href, variant = 'primary', external = false, className = '', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${variants[variant]} ${className}`
  const extra = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return href ? (
    <a href={href} className={cls} {...extra} {...rest}>
      {children}
    </a>
  ) : (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}
