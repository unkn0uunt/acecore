export default function MenuToggleIcon({ open = false, className = '' }) {
  return (
    <span className={`menu-toggle-icon ${open ? 'is-open' : ''} ${className}`.trim()} aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}
