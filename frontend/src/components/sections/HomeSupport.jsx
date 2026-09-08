import Reveal from '../ui/Reveal';
import Accordion from '../ui/Accordion';
import { homeFaqs } from '../../data/faqs';

const supportCopy = {
  eyebrow: 'Support',
  title: 'Frequently Asked Questions',
  description:
    "Everything you need to know about Acecore's products, installation, pricing, and support.",
};

export default function HomeSupport({ items = homeFaqs }) {
  return (
    <section className="home-support" aria-labelledby="home-support-title">
      <div className="home-shell">
        <Reveal className="home-section-header">
          <p className="home-section-header__eyebrow">{supportCopy.eyebrow}</p>
          <h2 id="home-support-title" className="home-section-header__title">
            {supportCopy.title}
          </h2>
          <p className="home-section-header__description">
            {supportCopy.description}
          </p>
        </Reveal>

        <Reveal className="home-support__faq" y={24}>
          <Accordion items={items} className="home-support__accordion" />
        </Reveal>
      </div>
    </section>
  );
}
