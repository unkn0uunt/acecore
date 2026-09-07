import Reveal from '../ui/Reveal';
import { problemCopy, problemItems } from '../../data/home';

export default function HomeProblem() {
  return (
    <section className="home-problem" aria-labelledby="home-problem-title">
      <div className="home-shell">
        <Reveal className="home-section-header">
          <p className="home-section-header__eyebrow">{problemCopy.eyebrow}</p>
          <h2 id="home-problem-title" className="home-section-header__title">
            {problemCopy.title}
          </h2>
          <p className="home-section-header__description">{problemCopy.description}</p>
        </Reveal>

        <ul className="home-problem__list">
          {problemItems.map((item, index) => (
            <Reveal as="li" key={item.id} className="home-problem__item" delay={0.06 * index} y={24}>
              <span className="home-problem__number">{item.number}</span>
              <div className="home-problem__copy">
                <h3 className="home-problem__item-title">{item.title}</h3>
                <p className="home-problem__item-description">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
