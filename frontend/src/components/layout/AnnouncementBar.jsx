import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { announcement } from '../../data/navigation';

const STORAGE_KEY = 'acecore-announcement-dismissed';

export default function AnnouncementBar({ visible, onDismiss }) {
  if (!visible) return null;

  const linkProps = announcement.external
    ? {
        href: announcement.href,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : { to: announcement.href };

  const LinkComponent = announcement.external ? 'a' : Link;

  return (
    <div className="announcement-bar" role="region" aria-label="Site announcement">
      <p className="announcement-bar__copy">
        <span>{announcement.text}</span>{' '}
        <LinkComponent {...linkProps} className="announcement-bar__link">
          {announcement.linkLabel}
          <span aria-hidden="true"> ↗</span>
        </LinkComponent>
      </p>

      <button
        type="button"
        className="announcement-bar__dismiss"
        aria-label="Dismiss announcement"
        onClick={onDismiss}
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}

export function useAnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = window.sessionStorage.getItem(STORAGE_KEY) === '1';
    setVisible(!dismissed);
  }, []);

  const dismiss = () => {
    window.sessionStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  };

  return { visible, dismiss };
}
