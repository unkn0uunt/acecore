import PageLayout from '../../components/layout/PageLayout';
import SupportContact from '../../components/sections/SupportContact';
import HelpCenter from '../../components/sections/HelpCenter';
import HomeSupport from '../../components/sections/HomeSupport';
import HomeEcosystem from '../../components/sections/HomeEcosystem';

export default function SupportPage() {
  return (
    <PageLayout>
      <SupportContact />
      <HelpCenter />
      <HomeSupport />
      <HomeEcosystem />
    </PageLayout>
  );
}
