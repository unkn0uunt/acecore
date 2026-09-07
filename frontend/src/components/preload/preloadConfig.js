import logoWhite from '../../assets/logos/acecore-white.svg';
import heroBackground from '../../assets/images/home/background.png';
import lifestyleImage from '../../assets/images/home/homeframe.png';

export const PRELOAD_MIN_MS = 3000;
export const PRELOAD_MAX_MS = 4000;
export const PRELOAD_EXIT_MS = 550;
export const PRELOAD_SESSION_KEY = 'acecore-preload-seen';

export const PRELOAD_STAGES = {
  shell: 12,
  fonts: 23,
  assets: 25,
  data: 40,
};

/** Critical first-view images for the Assets stage */
export const PRELOAD_ASSET_URLS = [logoWhite, heroBackground, lifestyleImage];

/**
 * Floating card presets for the splash backdrop.
 * Positions are CSS strings; float is driven by framer-motion.
 */
export const PRELOAD_CARDS = [
  {
    id: 'hero-a',
    src: heroBackground,
    width: '42vw',
    top: '8%',
    left: '4%',
    rotate: -8,
    grayscale: 0.35,
    opacity: 0.28,
    floatDuration: 9,
    floatDelay: 0,
    zIndex: 1,
  },
  {
    id: 'life-a',
    src: lifestyleImage,
    width: '36vw',
    top: '18%',
    right: '6%',
    rotate: 7,
    grayscale: 0.45,
    opacity: 0.24,
    floatDuration: 11,
    floatDelay: 0.4,
    zIndex: 2,
  },
  {
    id: 'hero-b',
    src: heroBackground,
    width: '28vw',
    bottom: '14%',
    left: '18%',
    rotate: 5,
    grayscale: 0.55,
    opacity: 0.2,
    floatDuration: 10,
    floatDelay: 0.8,
    zIndex: 1,
  },
  {
    id: 'life-b',
    src: lifestyleImage,
    width: '24vw',
    bottom: '10%',
    right: '16%',
    rotate: -6,
    grayscale: 0.4,
    opacity: 0.22,
    floatDuration: 12,
    floatDelay: 0.2,
    zIndex: 2,
  },
];

export { logoWhite as PRELOAD_LOGO };
