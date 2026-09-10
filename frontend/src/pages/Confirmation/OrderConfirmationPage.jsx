import PageLayout from '../../components/layout/PageLayout';
import ConfirmationEmptyState from '../../components/confirmation/ConfirmationEmptyState';
import ConfirmationLayout from '../../components/confirmation/ConfirmationLayout';
import { getQuoteSession, isOrderConfirmed } from '../../lib/quoteSession';

export default function OrderConfirmationPage() {
  const session = getQuoteSession();

  return (
    <PageLayout>
      {isOrderConfirmed(session) ? (
        <ConfirmationLayout order={session.order} />
      ) : (
        <ConfirmationEmptyState />
      )}
    </PageLayout>
  );
}
