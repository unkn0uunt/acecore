import { useState } from 'react';
import PageLayout from '../../components/layout/PageLayout';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import FAQSection from '../../components/sections/FAQSection';
import EcosystemBanner from '../../components/sections/EcosystemBanner';
import { pricingFaqs } from '../../data/faqs';
import { pricingModes, pricingPlans } from '../../data/pricing';
import { Link } from 'react-router-dom';

export default function PricingPage() {
  const [mode, setMode] = useState(pricingModes[0].id);

  return (
    <PageLayout>
      <section className="page-hero">
        <Container>
          <SectionHeader
            title="Choose the Right PowerCell for You."
            description="Compare PowerCell models and configure Solar Included or PowerCell Only pricing."
          />

          <div className="pricing-toggle" role="group" aria-label="Pricing mode">
            {pricingModes.map((item) => (
              <button
                key={item.id}
                type="button"
                className={mode === item.id ? 'is-active' : undefined}
                aria-pressed={mode === item.id}
                onClick={() => setMode(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <Card key={plan.id}>
                <h3>{plan.name}</h3>
                <p>{plan.prices[mode]}</p>
                <p className="text-muted">
                  {plan.power} · {plan.storage}
                </p>
                <p className="text-muted">{plan.instalment}</p>
                <Button as={Link} to="/contact">
                  Contact sales
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FAQSection items={pricingFaqs} />

      <section>
        <Container>
          <SectionHeader
            title="Have Questions About Pricing?"
            description="Speak with the Acecore team for configuration guidance and current offers."
          />
          <Button as={Link} to="/contact">
            Contact Us
          </Button>
        </Container>
      </section>

      <EcosystemBanner />
    </PageLayout>
  );
}
