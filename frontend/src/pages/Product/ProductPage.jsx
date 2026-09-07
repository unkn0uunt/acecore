import PageLayout from '../../components/layout/PageLayout';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import FAQSection from '../../components/sections/FAQSection';
import EcosystemBanner from '../../components/sections/EcosystemBanner';
import { productFaqs } from '../../data/faqs';

export default function ProductPage() {
  return (
    <PageLayout>
      <section className="page-hero">
        <Container>
          <SectionHeader
            eyebrow="PowerCell"
            title="5KVA energy storage engineered for everyday reliability."
            description="Battery technology, intelligent energy management and clean power for homes and businesses."
          />
        </Container>
      </section>

      <FAQSection items={productFaqs} />
      <EcosystemBanner />
    </PageLayout>
  );
}
