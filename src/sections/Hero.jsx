import { useRef } from 'react'
import Button from '../components/Button'
import Marquee from '../components/Marquee'
import NameStage from '../components/NameStage'
import Reveal from '../components/Reveal'
import RotatingBadge from '../components/RotatingBadge'
import SideArt from '../components/SideArt'
import { InstagramIcon, LinkedInIcon } from '../components/icons'
import { art } from '../data/art'
import { areas } from '../data/skills'
import site from '../data/site'
import usePointerFx from '../hooks/usePointerFx'

const [firstName, ...rest] = site.name.split(' ')
const lastName = rest.join(' ')

const socialLinks = [
  { ...site.social.instagram, Icon: InstagramIcon },
  { ...site.social.linkedin, Icon: LinkedInIcon },
]

export default function Hero() {
  const stageRef = useRef(null)
  const { pointer, mask } = usePointerFx(stageRef)

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-svh flex-col justify-center overflow-x-clip px-4 pb-48 pt-28 sm:px-10"
    >
      {/* halos de cor ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_18%_28%,rgba(42,15,92,0.6),transparent_70%),radial-gradient(50%_40%_at_88%_72%,rgba(59,91,255,0.2),transparent_70%)]"
      />

      {/* formas laterais em três profundidades */}
      <SideArt src={art.formaDireita} side="right" top="-6%" width="clamp(280px, 58vw, 900px)"
        offset={30} glow="rgba(124,58,237,.45)" depth={50} pointer={pointer} pull={30} />
      <SideArt src={art.formaEsquerda} side="left" top="50%" width="clamp(240px, 46vw, 720px)"
        offset={36} blur={1} depth={-40} pointer={pointer} pull={-22} />
      <SideArt src={art.formaEsquerda} side="left" top="2%" width="clamp(170px, 28vw, 440px)"
        offset={58} blur={5} opacity={0.55} depth={30} rotate={-12} flip
        tint="hue-rotate(-35deg) saturate(1.3)" pointer={pointer} pull={14} />

      <div className="relative z-10 mx-auto w-full max-w-[1500px]">
        <h1 className="sr-only">
          {site.name}, {site.role}
        </h1>
        <NameStage first={firstName} last={lastName} stageRef={stageRef} mask={mask} />

        <Reveal delay={1.1} className="mt-8 grid gap-8 md:mt-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="mb-3 text-sm text-ink-soft">{site.role}</p>
            <p className="max-w-xl font-display text-[clamp(1.5rem,3.2vw,2.5rem)] font-semibold leading-tight [text-shadow:0_2px_30px_rgba(7,5,13,0.9)]">
              {site.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:col-span-5 md:col-start-8 md:justify-end md:self-end">
            <Button href="#projetos">Ver projetos</Button>
            <Button href="#contato" variant="ghost">
              Falar comigo
            </Button>
            <ul className="flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} de ${site.name} (abre em nova aba)`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-ink transition-colors duration-300 hover:border-lilac hover:text-lilac"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <RotatingBadge
        href="#projetos"
        label="Ver projetos"
        text="Designer • Portfólio • Designer • Portfólio • "
        className="hidden h-28 w-28 sm:block lg:bottom-56 lg:right-[7vw] lg:h-40 lg:w-40 sm:bottom-52 sm:right-8"
      />

      <Marquee items={areas} className="absolute bottom-8" />
    </section>
  )
}
