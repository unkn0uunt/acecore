import PageLayout from '../../components/layout/PageLayout';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';

export default function SupportPage() {
  return (
    <PageLayout>
      <section className="page-hero">
        <Container>
          <SectionHeader
            title="Support"
            description="This route is scaffolded. Final Support page design is pending a corrected reference."
          />
        </Container>
      </section>
    </PageLayout>
  );
}
