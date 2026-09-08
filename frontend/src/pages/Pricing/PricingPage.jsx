import PageLayout from '../../components/layout/PageLayout';
import PricingPlans from '../../components/sections/PricingPlans';
import PowerCapabilitiesSection from '../../components/sections/PowerCapabilitiesSection';
import ComparisonSection from '../../components/sections/comparison/ComparisonSection';
import PricingQuestions from '../../components/sections/PricingQuestions';
import HomeSupport from '../../components/sections/HomeSupport';
import HomeEcosystem from '../../components/sections/HomeEcosystem';

export default function PricingPage() {
  return (
    <PageLayout>
      <PricingPlans />
      <PowerCapabilitiesSection />
      <ComparisonSection />
      <PricingQuestions />
      <HomeSupport />
      <HomeEcosystem />
    </PageLayout>
  );
}
