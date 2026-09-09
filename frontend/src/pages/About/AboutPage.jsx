import PageLayout from '../../components/layout/PageLayout';
import AboutHero from '../../components/sections/AboutHero';
import AboutWho from '../../components/sections/AboutWho';
import AboutVision from '../../components/sections/AboutVision';
import AboutCoreValues from '../../components/sections/AboutCoreValues';
import AboutTeamCta from '../../components/sections/AboutTeamCta';
import HomeEcosystem from '../../components/sections/HomeEcosystem';

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutHero />
      <AboutWho />
      <AboutVision />
      <AboutCoreValues />
      <AboutTeamCta />
      <HomeEcosystem />
    </PageLayout>
  );
}
