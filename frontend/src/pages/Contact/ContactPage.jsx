import PageLayout from '../../components/layout/PageLayout';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';

export default function ContactPage() {
  return (
    <PageLayout>
      <section className="page-hero">
        <Container>
          <SectionHeader
            title="Contact Us"
            description="This route is scaffolded. Final Contact page design is pending a corrected reference."
          />
        </Container>
      </section>
    </PageLayout>
  );
}
