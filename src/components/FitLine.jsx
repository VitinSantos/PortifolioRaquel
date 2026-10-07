import { useLayoutEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const ease = [0.16, 1, 0.3, 1]

const fillStyle = {
  backgroundImage: 'linear-gradient(160deg, #f4f1fa 25%, #b79cff 62%, #d6339f 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
}

/**
 * Uma linha de texto que se ajusta sozinha à largura do pai (nunca estoura),
 * com as letras subindo de uma máscara no carregamento.
 *
 * ratio   fração da largura do pai que a linha ocupa
 * align   'start' | 'end'
 * fill    true = letras com gradiente (camada do holofote)
 */
export default function FitLine({ text, ratio = 1, align = 'start', delay = 0, fill = false, maxVh = 0.3 }) {
  const wrap = useRef(null)
  const inner = useRef(null)
  const reduce = useReducedMotion()

  useLayoutEffect(() => {
    const w = wrap.current
    const el = inner.current
    if (!w || !el) return undefined
    const parent = w.parentElement

    const fit = () => {
      w.style.fontSize = '100px'
      const natural = el.offsetWidth
      if (!natural) return
      const size = Math.min((100 * parent.clientWidth * ratio) / natural, window.innerHeight * maxVh)
      w.style.fontSize = `${size}px`
    }

    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(parent)
    window.addEventListener('resize', fit)
    document.fonts?.ready.then(fit)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', fit)
    }
  }, [text, ratio, maxVh])

  return (
    <div
      ref={wrap}
      className={`flex overflow-hidden ${align === 'end' ? 'justify-end' : 'justify-start'}`}
      style={{ padding: '0.08em 0.04em 0.22em', margin: '-0.08em -0.04em -0.22em' }}
    >
      <span
        ref={inner}
        className="inline-flex whitespace-nowrap font-display font-extrabold"
        style={{ lineHeight: 0.95, letterSpacing: '-0.02em' }}
      >
        {[...text].map((ch, i) => (
          <motion.span
            key={i}
            className="inline-block"
            style={fill ? fillStyle : undefined}
            initial={reduce ? false : { y: '120%', rotate: 7 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 1.1, ease, delay: delay + i * 0.05 }}
          >
            {ch}
          </motion.span>
        ))}
      </span>
    </div>
  )
}
