import { useEffect, useRef } from 'react'
import {
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react'

/**
 * Efeitos ligados ao ponteiro do hero:
 *  - `pointer`: posição normalizada (-1..1) suavizada, usada no parallax das formas
 *  - `mask`: máscara radial (holofote) que revela o preenchimento do nome
 * Sem ponteiro (celular) ou parado por 2,5 s, o holofote passeia sozinho.
 * Com prefers-reduced-motion: nada se move.
 */
export default function usePointerFx(stageRef) {
  const reduce = useReducedMotion()

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 60, damping: 18 })
  const sy = useSpring(py, { stiffness: 60, damping: 18 })

  const mx = useMotionValue(-400)
  const my = useMotionValue(0)
  const r = useMotionValue(220)
  const smx = useSpring(mx, { stiffness: 110, damping: 18, mass: 0.6 })
  const smy = useSpring(my, { stiffness: 110, damping: 18, mass: 0.6 })

  const lastMove = useRef(-Infinity)

  useEffect(() => {
    if (reduce) return undefined
    const onMove = (e) => {
      px.set((e.clientX / window.innerWidth - 0.5) * 2)
      py.set((e.clientY / window.innerHeight - 0.5) * 2)
      const box = stageRef.current?.getBoundingClientRect()
      if (!box) return
      mx.set(e.clientX - box.left)
      my.set(e.clientY - box.top)
      lastMove.current = performance.now()
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, px, py, mx, my, stageRef])

  useAnimationFrame((t) => {
    const el = stageRef.current
    if (!el || reduce) return
    const w = el.offsetWidth
    const h = el.offsetHeight
    r.set(Math.min(Math.max(w * 0.22, 130), 360))
    if (performance.now() - lastMove.current > 2500) {
      mx.set(w * (0.5 + 0.42 * Math.sin(t / 1900)))
      my.set(h * (0.5 + 0.4 * Math.sin(t / 1300 + 1)))
    }
  })

  const mask = useMotionTemplate`radial-gradient(circle ${r}px at ${smx}px ${smy}px, #000 0%, rgba(0,0,0,0.9) 30%, transparent 100%)`

  return { pointer: { x: sx, y: sy }, mask }
}
