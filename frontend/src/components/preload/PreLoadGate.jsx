import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import usePreLoadProgress from '../../hooks/usePreLoadProgress';
import PreLoadSplash from './PreLoadSplash';
import {
  PRELOAD_EXIT_MS,
  PRELOAD_SESSION_KEY,
} from './preloadConfig';

function readSessionSkip() {
  try {
    return window.sessionStorage.getItem(PRELOAD_SESSION_KEY) === '1';
  } catch {
    return false;
  }
}

export default function PreLoadGate({ children }) {
  const { pathname } = useLocation();
  const reduceMotion = useReducedMotion();
  const [sessionSkip] = useState(() => readSessionSkip() || pathname.startsWith('/admin'));
  const skip = sessionSkip || reduceMotion === true;
  const [visible, setVisible] = useState(!sessionSkip && reduceMotion !== true);
  const { progress, ready } = usePreLoadProgress({ enabled: !skip });

  useEffect(() => {
    if (reduceMotion === true) {
      setVisible(false);
    }
  }, [reduceMotion]);

  useEffect(() => {
    if (skip || !ready || !visible) return;

    setVisible(false);

    try {
      window.sessionStorage.setItem(PRELOAD_SESSION_KEY, '1');
    } catch {
      // ignore
    }
  }, [ready, skip, visible]);

  return (
    <>
      {children}

      <AnimatePresence>
        {visible ? (
          <motion.div
            className="preload-gate"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: PRELOAD_EXIT_MS / 1000,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <PreLoadSplash progress={progress} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
