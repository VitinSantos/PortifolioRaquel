import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform } from 'motion/react'

/**
 * Imagem decorativa ancorada numa lateral, parcialmente fora da viewport.
 * O pai precisa ter `relative` (o recorte horizontal é feito no <html>).
 *
 * side     'left' | 'right'
 * top      posição vertical dentro do pai (ex.: '-10%', '20vh')
 * width    largura (aceita clamp)
 * offset   % da própria largura empurrada para fora da tela
 * blur     px de desfoque (profundidade)
 * glow     brilho projetado (drop-shadow), ex.: 'rgba(124,58,237,.5)'
 * tint     filtro extra, ex.: 'hue-rotate(40deg)'
 * depth    px de parallax no scroll
 * pointer  { x, y } MotionValues (-1..1) vindos de usePointerFx
 * pull     px de deslocamento seguindo o ponteiro (negativo = sentido oposto)
 * mask     CSS mask-image para fundir bordas
 */
export default function SideArt({
  src,
  side = 'right',
  top = '0',
  width = 'clamp(220px, 44vw, 720px)',
  offset = 30,
  blur = 0,
  opacity = 1,
  depth = 60,
  rotate = 0,
  flip = false,
  glow,
  tint,
  pointer,
  pull = 0,
  float = true,
  mask,
  className = '',
}) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const idle = useMotionValue(0)
  const dx = useTransform(pointer?.x ?? idle, (v) => v * pull)
  const dy = useTransform(pointer?.y ?? idle, (v) => v * pull)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [depth, -depth])

  const filter =
    [blur > 0 && `blur(${blur}px)`, tint, glow && `drop-shadow(0 0 70px ${glow})`]
      .filter(Boolean)
      .join(' ') || 'none'

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute z-0 ${className}`}
      style={{ top, width, [side]: 0 }}
    >
      <motion.div style={{ x: dx, y: dy }}>
        <motion.div style={{ x: side === 'right' ? `${offset}%` : `-${offset}%`, y }}>
          <motion.img
            src={src}
            alt=""
            draggable={false}
            decoding="async"
            className="block h-auto w-full select-none"
            style={{
              opacity,
              rotate,
              scaleX: flip ? -1 : 1,
              filter,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
            animate={reduce || !float ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
