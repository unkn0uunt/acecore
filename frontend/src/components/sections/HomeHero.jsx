import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import FeatureIcon from '../ui/FeatureIcon';
import Reveal from '../ui/Reveal';
import { heroCopy, heroFeatures } from '../../data/home';
import heroBackground from '../../assets/images/home/background.png';

export default function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__media" aria-hidden="true">
        <img
          className="home-hero__image"
          src={heroBackground}
          alt=""
          width={3032}
          height={1706}
          fetchPriority="high"
        />
        <div className="home-hero__scrim" />
      </div>

      <div className="home-hero__content">
        <div className="home-hero__copy">
          <Reveal delay={0.05}>
            <h1 id="home-hero-title" className="home-hero__title">
              <span>{heroCopy.titleLine1}</span>
              <span>{heroCopy.titleLine2}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="home-hero__description">{heroCopy.description}</p>
          </Reveal>

          <Reveal delay={0.22} className="home-hero__actions">
            <Button as={Link} to={heroCopy.primaryCta.to} variant="accent" className="home-hero__primary">
              <FeatureIcon name="bolt" className="feature-icon--inline feature-icon--dark" />
              {heroCopy.primaryCta.label}
            </Button>

            <Button as={Link} to={heroCopy.secondaryCta.to} variant="ghost" className="home-hero__secondary">
              <FeatureIcon name="play" className="feature-icon--inline" />
              {heroCopy.secondaryCta.label}
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="home-hero__features" y={20}>
          <ul className="home-hero__features-list">
            {heroFeatures.map((feature) => (
              <li key={feature.id} className="home-feature-card">
                <FeatureIcon name={feature.icon} />
                <div>
                  <h2 className="home-feature-card__title">{feature.title}</h2>
                  <p className="home-feature-card__description">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
