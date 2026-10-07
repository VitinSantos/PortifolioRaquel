import site from '../data/site'

export default function Nav() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-night"
      >
        Pular para o conteúdo
      </a>

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          aria-label="Principal"
          className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-night/50 px-5 py-2.5 backdrop-blur-xl"
        >
          <a href="#inicio" className="font-display text-base font-bold tracking-tight">
            {site.name}
          </a>
          <ul className="flex items-center gap-5 text-sm text-ink-soft sm:gap-8">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
