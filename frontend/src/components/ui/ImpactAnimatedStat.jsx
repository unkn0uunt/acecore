import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { AnimateNumber } from './AnimateNumber';

const COUNT_DURATION_MS = 2000;

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function subscribeReducedMotion(onStoreChange) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', onStoreChange);
  return () => mq.removeEventListener('change', onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

/**
 * Viewport-triggered count-up that keeps existing `.stat` layout/styles.
 * @param {{ target: number, label: string, prefix?: string, suffix?: string, decimal?: boolean, format?: Intl.NumberFormatOptions, className?: string, delay?: number }} props
 */
export default function ImpactAnimatedStat({
  target,
  label,
  prefix,
  suffix,
  decimal = false,
  format,
  className = '',
}) {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [animatedValue, setAnimatedValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted || prefersReducedMotion) return undefined;

    const startTime = performance.now();
    let frame = 0;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / COUNT_DURATION_MS, 1);
      const eased = easeOutCubic(progress);
      const raw = target * eased;

      setAnimatedValue(decimal ? Math.round(raw * 10) / 10 : Math.round(raw));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setAnimatedValue(target);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [hasStarted, prefersReducedMotion, decimal, target]);

  const displayValue = !hasStarted
    ? 0
    : prefersReducedMotion
      ? target
      : animatedValue;

  return (
    <div ref={ref} className={`stat ${className}`.trim()}>
      <p className="stat__value">
        <AnimateNumber
          value={displayValue}
          prefix={prefix}
          suffix={suffix}
          format={
            format ??
            (decimal
              ? { minimumFractionDigits: 1, maximumFractionDigits: 1 }
              : { maximumFractionDigits: 0 })
          }
          duration={400}
          blur={14}
        />
      </p>
      <p className="stat__label">{label}</p>
    </div>
  );
}
