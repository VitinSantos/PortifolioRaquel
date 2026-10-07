import { motion, useReducedMotion } from 'motion/react'
import FitLine from './FitLine'

function Lines({ first, last, fill }) {
  return (
    <>
      <FitLine text={first} ratio={1} align="start" fill={fill} />
      <FitLine text={last} ratio={0.84} align="end" delay={0.25} fill={fill} />
    </>
  )
}

/**
 * Nome em duas camadas sobrepostas:
 *  - fantasma: só contorno, sempre visível
 *  - preenchida: gradiente, revelada por um holofote que segue o ponteiro
 * Decorativo (aria-hidden): o <h1> real fica no Hero.
 */
export default function NameStage({ first, last, stageRef, mask }) {
  const reduce = useReducedMotion()

  return (
    <div ref={stageRef} aria-hidden="true" className="relative select-none">
      <div className="name-ghost">
        <Lines first={first} last={last} />
      </div>
      <motion.div
        className="name-fill absolute inset-0"
        style={reduce ? undefined : { maskImage: mask, WebkitMaskImage: mask }}
      >
        <Lines first={first} last={last} fill />
      </motion.div>
    </div>
  )
}
