import { motion, useReducedMotion } from 'framer-motion';

const easeOut = [0.16, 1, 0.3, 1];

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 28,
  once = true,
  as = 'div',
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (reduceMotion) {
    const Static = as === 'div' ? 'div' : as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2, margin: '0px 0px -6% 0px' }}
      transition={{ duration: 1.15, delay, ease: easeOut }}
    >
      {children}
    </Component>
  );
}
