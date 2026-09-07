import PageLayout from '../../components/layout/PageLayout';
import Container from '../../components/ui/Container';
import SectionHeader from '../../components/ui/SectionHeader';
import EcosystemBanner from '../../components/sections/EcosystemBanner';

const pillars = [
  { title: 'Innovation', description: 'Engineering-led product development.' },
  { title: 'Sustainability', description: 'Clean energy for lasting impact.' },
  {
    title: 'Energy Procurement Strategy',
    description: 'Practical pathways to dependable power.',
  },
];

const values = ['Quality', 'Innovation', 'Creativity', 'Family'];

export default function AboutPage() {
  return (
    <PageLayout>
      <section className="page-hero">
        <Container>
          <SectionHeader
            title="The Acecore story"
            description="Acecore exists to make renewable energy generation, storage and management dependable and accessible."
          />
        </Container>
      </section>

      <section>
        <Container>
          <div className="about-pillars">
            {pillars.map((pillar) => (
              <article key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p className="text-muted">{pillar.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <SectionHeader
            title="We're on a mission to transform renewable energy, guided by our core values."
          />
          <ul className="about-values">
            {values.map((value) => (
              <li key={value}>
                <h3>{value}</h3>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <EcosystemBanner />
    </PageLayout>
  );
}
