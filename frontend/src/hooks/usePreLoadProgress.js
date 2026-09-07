import { useEffect, useMemo, useState } from 'react';
import {
  PRELOAD_ASSET_URLS,
  PRELOAD_MAX_MS,
  PRELOAD_MIN_MS,
  PRELOAD_STAGES,
} from '../components/preload/preloadConfig';

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

/**
 * Staged preload progress: shell → fonts → assets → data.
 * Ready when min time elapsed AND (all stages done OR max timeout).
 */
export default function usePreLoadProgress({ enabled = true } = {}) {
  const [stages, setStages] = useState({
    shell: false,
    fonts: false,
    assets: false,
    data: false,
  });
  const [minElapsed, setMinElapsed] = useState(false);
  const [timedOut, setTimedOut] = useState(false);

  useEffect(() => {
    if (!enabled) return undefined;

    let cancelled = false;
    let raf1 = 0;
    let raf2 = 0;

    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (!cancelled) {
          setStages((prev) => ({ ...prev, shell: true }));
        }
      });
    });

    const minTimer = window.setTimeout(() => {
      if (!cancelled) setMinElapsed(true);
    }, PRELOAD_MIN_MS);

    const maxTimer = window.setTimeout(() => {
      if (!cancelled) setTimedOut(true);
    }, PRELOAD_MAX_MS);

    const fontsReady =
      document.fonts?.ready?.then(() => true).catch(() => false) ?? Promise.resolve(true);

    fontsReady.then(() => {
      if (!cancelled) setStages((prev) => ({ ...prev, fonts: true }));
    });

    Promise.all(PRELOAD_ASSET_URLS.map(loadImage)).then(() => {
      if (!cancelled) setStages((prev) => ({ ...prev, assets: true }));
    });

    // No React Query in this project — treat first paint data as a short settle.
    const dataTimer = window.setTimeout(() => {
      if (!cancelled) setStages((prev) => ({ ...prev, data: true }));
    }, 420);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.clearTimeout(minTimer);
      window.clearTimeout(maxTimer);
      window.clearTimeout(dataTimer);
    };
  }, [enabled]);

  const progress = useMemo(() => {
    return Object.entries(PRELOAD_STAGES).reduce((sum, [key, weight]) => {
      return sum + (stages[key] ? weight : 0);
    }, 0);
  }, [stages]);

  const allDone = Object.values(stages).every(Boolean);
  const ready = enabled && minElapsed && (allDone || timedOut);

  return { progress, ready, stages, timedOut };
}
