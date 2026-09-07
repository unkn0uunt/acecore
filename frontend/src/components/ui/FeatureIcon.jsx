const icons = {
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 2 4.5 13.2h6.1L9.8 22 19 9.8h-6.2L13 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 14.5c2.8 3.8 8.2 4.4 11.8 1.2 2.4-2.2 3.4-6.2 2.5-9.7-3.7-.3-7.7.8-10 3.2-1.5 1.5-2.8 3.5-3.4 5.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M6.2 17.8c2.4-2.5 5.4-4.2 8.8-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.2 19 6v5.2c0 4.4-2.9 7.7-7 8.8-4.1-1.1-7-4.4-7-8.8V6l7-2.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m9.2 12.1 1.9 1.9 3.8-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  play: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.2 8.8v6.4L15.6 12 10.2 8.8Z" fill="currentColor" />
    </svg>
  ),
  fridge: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6.5" y="3" width="11" height="18" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6.5 11h11" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9.2 6.4v2.2M9.2 13.4v2.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  lamp: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3v3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 10.4 10.2 6.2h3.6L16 10.4H8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M12 10.4V18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M9.2 21h5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  tv: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="11.5" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 20h6M12 16.5V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  ac: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="8.5" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6.2 10h11.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 16.2v2.4M12 16.2v2.8M16 16.2v2.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  computer: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="4.5" width="16" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 21h6M12 15v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  battery: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="8" width="17.5" height="8.5" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 10.4v3.7c.9 0 1.6-.7 1.6-1.85S20.9 10.4 20 10.4Z" fill="currentColor" />
      <path d="M5.4 10.6h4.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="6.2" rx="7.2" ry="2.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.8 6.2v4.4c0 1.3 3.2 2.4 7.2 2.4s7.2-1.1 7.2-2.4V6.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.8 10.6v4.4c0 1.3 3.2 2.4 7.2 2.4s7.2-1.1 7.2-2.4v-4.4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4.8 15v2.8c0 1.3 3.2 2.4 7.2 2.4s7.2-1.1 7.2-2.4V15" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M19.1 12.9v-1.8l1.7-1.3-1.6-2.8-2 .7c-.5-.4-1-.7-1.6-.9L15.2 4h-3.3l-.4 2.8c-.6.2-1.1.5-1.6.9l-2-.7-1.6 2.8 1.7 1.3v1.8l-1.7 1.3 1.6 2.8 2-.7c.5.4 1 .7 1.6.9l.4 2.8h3.3l.4-2.8c.6-.2 1.1-.5 1.6-.9l2 .7 1.6-2.8-1.7-1.3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export default function FeatureIcon({ name, className = '' }) {
  return <span className={`feature-icon ${className}`.trim()}>{icons[name]}</span>;
}
