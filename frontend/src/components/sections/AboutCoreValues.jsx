import { useState } from 'react';
import Reveal from '../ui/Reveal';
import { aboutCoreValues, aboutCoreValuesIntro } from '../../data/about';

function ValueRow({ title, description }) {
  return (
    <article className="about-values__row">
      <h3 className="about-values__title">{title}</h3>
      <p className="about-values__description">{description}</p>
    </article>
  );
}

function ValueAccordion({ id, title, description, isOpen, onToggle }) {
  return (
    <article
      className={`about-values__row about-values__row--accordion${isOpen ? ' is-open' : ''}`}
    >
      <button
        type="button"
        className="about-values__trigger"
        aria-expanded={isOpen}
        aria-controls={`about-value-${id}`}
        onClick={() => onToggle(id)}
      >
        <h3 className="about-values__title">{title}</h3>
        <span className="about-accordion-chevron" aria-hidden="true" />
      </button>
      <div id={`about-value-${id}`} className="about-accordion-panel">
        <div className="about-accordion-panel-inner">
          <p className="about-values__description">{description}</p>
        </div>
      </div>
    </article>
  );
}

export default function AboutCoreValues() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section className="about-values" aria-labelledby="about-values-title">
      <div className="about-values__inner home-shell">
        <Reveal>
          <h2 id="about-values-title" className="about-values__intro">
            {aboutCoreValuesIntro.before}
            <span className="about-values__accent">{aboutCoreValuesIntro.accent}</span>
            {aboutCoreValuesIntro.after}
          </h2>
        </Reveal>

        <Reveal className="about-values__list about-values__list--desktop" y={20} delay={0.06}>
          {aboutCoreValues.map((value) => (
            <ValueRow key={value.id} {...value} />
          ))}
        </Reveal>

        <Reveal className="about-values__list about-values__list--mobile" y={20} delay={0.06}>
          {aboutCoreValues.map((value) => (
            <ValueAccordion
              key={`mobile-${value.id}`}
              {...value}
              isOpen={openId === value.id}
              onToggle={handleToggle}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
