import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';

const copy = {
  title: 'Have Questions About Pricing?',
  description:
    "Solar pricing can be confusing. If you need clarity or have questions about our pricing options, click the 'Contact Us' button below. Our team is ready to assist you and make your solar journey easy.",
  cta: 'Contact Us',
};

export default function PricingQuestions() {
  return (
    <section className="pricing-questions" aria-labelledby="pricing-questions-title">
      <div className="pricing-questions__inner home-shell">
        <Reveal className="pricing-questions__panel" y={28}>
          <div className="pricing-questions__copy">
            <h2 id="pricing-questions-title" className="pricing-questions__title">
              {copy.title}
            </h2>
            <p className="pricing-questions__description">{copy.description}</p>
          </div>

          <Button
            as={Link}
            to="/contact"
            variant="brand"
            className="pricing-questions__cta"
          >
            {copy.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
