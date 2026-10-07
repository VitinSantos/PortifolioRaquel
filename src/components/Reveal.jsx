import { motion, useReducedMotion } from 'motion/react'

/** Entrada suave ao rolar. Use com moderação, só onde ajuda a leitura. */
export default function Reveal({ as = 'div', delay = 0, y = 28, blur = 8, className = '', children }) {
  const reduce = useReducedMotion()
  const Tag = motion[as]

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y, filter: reduce ? 'blur(0px)' : `blur(${blur}px)` }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: reduce ? 0.3 : 0.9, delay: reduce ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  )
}
