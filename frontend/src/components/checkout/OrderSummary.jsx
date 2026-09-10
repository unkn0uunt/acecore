import { checkoutCopy } from '../../data/checkout';
import CheckoutStepper from './CheckoutStepper';
import DeliverySummary from './DeliverySummary';
import PaymentSummary from './PaymentSummary';
import ProductConfigurationSummary from './ProductConfigurationSummary';

export default function OrderSummary({ view }) {
  return (
    <section className="checkout-panel checkout-panel--summary" aria-labelledby="checkout-summary-title">
      <header className="checkout-panel__header">
        <h1 id="checkout-summary-title" className="checkout-heading">
          {checkoutCopy.summaryTitle}
        </h1>
        <p className="checkout-support">{checkoutCopy.summarySupport}</p>
      </header>

      <CheckoutStepper />
      <ProductConfigurationSummary view={view} />
      <DeliverySummary view={view} />
      <PaymentSummary view={view} />
    </section>
  );
}
