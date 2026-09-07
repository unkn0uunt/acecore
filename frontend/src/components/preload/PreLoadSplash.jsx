import { motion } from 'framer-motion';
import PreLoadShowcase from './PreLoadShowcase';
import { PRELOAD_LOGO } from './preloadConfig';

export default function PreLoadSplash({ progress }) {
  const shimmer = progress < 100;

  return (
    <div
      className="preload-splash"
      role="status"
      aria-live="polite"
      aria-label="Loading Acecore"
    >
      <PreLoadShowcase />

      <div className="preload-splash__foreground">
        <motion.img
          className="preload-splash__logo"
          src={PRELOAD_LOGO}
          alt="Acecore"
          animate={{
            opacity: [0.42, 1, 0.42],
            filter: [
              'brightness(0.85)',
              'brightness(1.35)',
              'brightness(0.85)',
            ],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="preload-splash__track" aria-hidden="true">
          <motion.div
            className={`preload-splash__fill${shimmer ? ' is-shimmer' : ''}`}
            initial={false}
            animate={{ width: `${Math.max(progress, 4)}%` }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <p className="preload-splash__label">Loading</p>
      </div>
    </div>
  );
}
