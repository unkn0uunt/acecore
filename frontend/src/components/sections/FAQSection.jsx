import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import Accordion from '../ui/Accordion';

export default function FAQSection({ title = 'Frequently asked questions', items = [] }) {
  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <Container>
        <SectionHeader title={<span id="faq-heading">{title}</span>} />
        <Accordion items={items} />
      </Container>
    </section>
  );
}
