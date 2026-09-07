import { useEffect, useId, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function ServicesDropdown({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const closeTimer = useRef(null);
  const menuId = useId();
  const location = useLocation();
  // Mobile menu passes onNavigate — use click-only there (hover/focus fights touch).
  const hoverEnabled = !onNavigate;

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => () => clearCloseTimer(), []);

  useEffect(() => {
    if (!open || !hoverEnabled) return undefined;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, hoverEnabled]);

  return (
    <div
      className={`nav-dropdown ${open ? 'is-open' : ''}${onNavigate ? ' is-mobile' : ''}`}
      ref={rootRef}
      onMouseEnter={hoverEnabled ? openMenu : undefined}
      onMouseLeave={hoverEnabled ? scheduleClose : undefined}
    >
      <button
        type="button"
        className="nav-dropdown__trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setOpen((value) => !value);
        }}
      >
        {item.label}
        <span className="nav-dropdown__chevron" aria-hidden="true" />
      </button>

      {open ? (
        <ul id={menuId} className="nav-dropdown__menu" role="menu">
          {item.children.map((child) => (
            <li key={child.label} role="none">
              <NavLink
                to={child.to}
                role="menuitem"
                className="nav-dropdown__link"
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
