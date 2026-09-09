import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import { aboutTeamCta } from '../../data/about';

export default function AboutTeamCta() {
  return (
    <section className="about-team-cta" aria-labelledby="about-team-cta-title">
      <Reveal className="about-team-cta__inner home-shell">
        <p className="about-team-cta__eyebrow">{aboutTeamCta.eyebrow}</p>
        <h2 id="about-team-cta-title" className="about-team-cta__title">
          {aboutTeamCta.title}
        </h2>
        <p className="about-team-cta__description">{aboutTeamCta.description}</p>
        <Link to={aboutTeamCta.to} className="about-team-cta__link">
          {aboutTeamCta.ctaLabel}
          <span aria-hidden="true"> →</span>
        </Link>
      </Reveal>
    </section>
  );
}
