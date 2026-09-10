import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { checkoutCopy } from '../../data/checkout';

export default function CheckoutEmptyState() {
  return (
    <section className="checkout checkout--empty" aria-labelledby="checkout-empty-title">
      <div className="checkout__shell">
        <div className="checkout-empty">
          <h1 id="checkout-empty-title" className="checkout-empty__title">
            {checkoutCopy.emptyTitle}
          </h1>
          <p className="checkout-empty__description">{checkoutCopy.emptyDescription}</p>
          <div className="checkout-empty__actions">
            <Button as={Link} to="/pricing" variant="brand">
              {checkoutCopy.emptyPricing}
            </Button>
            <Button as={Link} to="/request-quote" variant="ghost">
              {checkoutCopy.emptyConfigure}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
