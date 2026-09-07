import { NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import logoWhite from '../../assets/logos/acecore-white.svg';
import { contactCta, primaryNav } from '../../data/navigation';
import { useScroll } from '../../hooks/useScroll';
import Button from '../ui/Button';
import MenuToggleIcon from '../ui/MenuToggleIcon';
import ServicesDropdown from './ServicesDropdown';

const easeOut = [0.16, 1, 0.3, 1];

function NavItems({ onNavigate }) {
  return (
    <ul className="navbar__list">
      {primaryNav.map((item) => (
        <li key={item.label}>
          {item.children ? (
            <ServicesDropdown item={item} onNavigate={onNavigate} />
          ) : (
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                `navbar__link${isActive ? ' is-active' : ''}`
              }
              onClick={onNavigate}
            >
              {item.label}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function Navbar({
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  announcementVisible,
}) {
  const scrolled = useScroll(12);
  const floating = scrolled && !menuOpen;

  useEffect(() => {
    // Lock page scrolling while the full-screen mobile navigation is active.
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <motion.div
      className={`navbar-shell${floating ? ' is-floating' : ' is-flush'}${menuOpen ? ' is-menu-open' : ''}${announcementVisible ? ' has-announcement' : ''}`}
      initial={false}
      animate={{
        paddingTop: floating ? 8 : 0,
      }}
      transition={{ duration: 0.5, ease: easeOut }}
    >
      <motion.header
        className={`navbar${floating ? ' is-floating' : ' is-flush'}`}
        initial={false}
        animate={{
          maxWidth: floating ? 'min(100% - 0.5rem, 98rem)' : '100%',
          borderRadius: floating ? 14 : 0,
        }}
        transition={{ duration: 0.5, ease: easeOut }}
        style={{
          background: 'transparent',
          border: 'none',
          boxShadow: 'none',
          backdropFilter: 'none',
          WebkitBackdropFilter: 'none',
        }}
      >
        <div className="navbar__inner">
          <NavLink to="/" className="navbar__logo" aria-label="Acecore home" onClick={onCloseMenu}>
            <motion.img
              src={logoWhite}
              alt="Acecore"
              initial={false}
              animate={{ height: floating ? 32 : 36 }}
              transition={{ duration: 0.5, ease: easeOut }}
            />
          </NavLink>

          <nav className="navbar__nav" aria-label="Primary">
            <NavItems />
          </nav>

          <Button as={NavLink} to={contactCta.to} variant="brand" className="navbar__cta navbar__cta--desktop">
            {contactCta.label}
          </Button>

          <button
            type="button"
            className="navbar__menu-trigger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={onToggleMenu}
          >
            <MenuToggleIcon open={menuOpen} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: easeOut }}
          >
            <nav aria-label="Mobile">
              <NavItems onNavigate={onCloseMenu} />
            </nav>

            <Button as={NavLink} to={contactCta.to} variant="brand" onClick={onCloseMenu}>
              {contactCta.label}
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
