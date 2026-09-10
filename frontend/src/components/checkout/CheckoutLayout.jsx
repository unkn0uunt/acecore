import { buildCheckoutView } from '../../data/checkout';
import CompleteOrder from './CompleteOrder';
import OrderSummary from './OrderSummary';

export default function CheckoutLayout({ session }) {
  const view = buildCheckoutView(session);

  return (
    <section className="checkout" aria-label="Checkout">
      <div className="checkout__shell">
        <div className="checkout__layout">
          <OrderSummary view={view} />
          <CompleteOrder view={view} />
        </div>
      </div>
    </section>
  );
}
