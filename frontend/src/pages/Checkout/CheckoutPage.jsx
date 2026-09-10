import PageLayout from '../../components/layout/PageLayout';
import CheckoutEmptyState from '../../components/checkout/CheckoutEmptyState';
import CheckoutLayout from '../../components/checkout/CheckoutLayout';
import { getQuoteSession, isCheckoutReady } from '../../lib/quoteSession';

export default function CheckoutPage() {
  const session = getQuoteSession();

  return (
    <PageLayout>
      {isCheckoutReady(session) ? (
        <CheckoutLayout session={session} />
      ) : (
        <CheckoutEmptyState />
      )}
    </PageLayout>
  );
}
