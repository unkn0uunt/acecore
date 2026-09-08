import PageLayout from '../../components/layout/PageLayout';
import ProductHero from '../../components/sections/ProductHero';
import ProductCompareIntro from '../../components/sections/ProductCompareIntro';
import ProductMechanicalSpecs from '../../components/sections/ProductMechanicalSpecs';
import ProductPowerOptions from '../../components/sections/ProductPowerOptions';
import ProductPowercoreApp from '../../components/sections/ProductPowercoreApp';
import HomeSupport from '../../components/sections/HomeSupport';
import HomeEcosystem from '../../components/sections/HomeEcosystem';

export default function ProductPage() {
  return (
    <PageLayout>
      <ProductHero />
      <ProductCompareIntro />
      <ProductMechanicalSpecs />
      <ProductPowerOptions />
      <ProductPowercoreApp />
      <HomeSupport />
      <HomeEcosystem />
    </PageLayout>
  );
}
