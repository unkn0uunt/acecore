import { motion } from 'framer-motion';
import { PRELOAD_CARDS } from './preloadConfig';

export default function PreLoadShowcase() {
  return (
    <div className="preload-showcase" aria-hidden="true">
      <div className="preload-showcase__marquee">
        <div className="preload-showcase__marquee-track">
          {[...PRELOAD_CARDS, ...PRELOAD_CARDS].map((card, index) => (
            <img
              key={`${card.id}-mq-${index}`}
              className="preload-showcase__marquee-img"
              src={card.src}
              alt=""
            />
          ))}
        </div>
      </div>

      {PRELOAD_CARDS.map((card) => (
        <motion.img
          key={card.id}
          className="preload-showcase__card"
          src={card.src}
          alt=""
          style={{
            width: card.width,
            top: card.top,
            left: card.left,
            right: card.right,
            bottom: card.bottom,
            rotate: `${card.rotate}deg`,
            filter: `grayscale(${card.grayscale})`,
            opacity: card.opacity,
            zIndex: card.zIndex,
          }}
          animate={{ y: [0, -14, 0] }}
          transition={{
            duration: card.floatDuration,
            delay: card.floatDelay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
