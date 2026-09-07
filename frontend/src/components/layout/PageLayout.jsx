import { useState } from 'react';
import AnnouncementBar, { useAnnouncementBar } from './AnnouncementBar';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PageLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { visible: announcementVisible, dismiss } = useAnnouncementBar();

  return (
    <div className="page-layout">
      <div className="site-chrome">
        <AnnouncementBar visible={announcementVisible} onDismiss={dismiss} />
        <Navbar
          menuOpen={menuOpen}
          onToggleMenu={() => setMenuOpen((open) => !open)}
          onCloseMenu={() => setMenuOpen(false)}
          announcementVisible={announcementVisible}
        />
      </div>

      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
