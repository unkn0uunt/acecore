import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import { solutionCopy, solutionCards } from '../../data/home';
import powercellImage from '../../assets/images/home/powercell2.png';
import powercoreImage from '../../assets/images/home/powercore_app.png';

const images = {
  powercell: powercellImage,
  powercore: powercoreImage,
};

export default function HomeSolution() {
  return (
    <section className="home-solution" aria-labelledby="home-solution-title">
      <div className="home-shell">
        <Reveal className="home-section-header">
          <p className="home-section-header__eyebrow">{solutionCopy.eyebrow}</p>
          <h2 id="home-solution-title" className="home-section-header__title">
            {solutionCopy.title}
          </h2>
          <p className="home-section-header__description">{solutionCopy.description}</p>
        </Reveal>

        <div className="home-solution__grid">
          {solutionCards.map((card, index) => (
            <Reveal key={card.id} className="home-solution__card" delay={0.08 * index} y={28}>
              <div className="home-solution__card-copy">
                <h3 className="home-solution__card-title">{card.title}</h3>
                <p className="home-solution__card-description">{card.description}</p>
                <Link to={card.cta.to} className="home-solution__card-link">
                  <span aria-hidden="true">↗</span> {card.cta.label}
                </Link>
              </div>

              <div className="home-solution__card-media">
                <img
                  src={images[card.image]}
                  alt={card.imageAlt}
                  className={`home-solution__card-image home-solution__card-image--${card.image}`}
                  loading="lazy"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
