import ConfirmationSummary from './ConfirmationSummary';
import NextStepsTimeline from './NextStepsTimeline';
import OrderDetails from './OrderDetails';

export default function ConfirmationLayout({ order }) {
  return (
    <section className="confirmation" aria-label="Order confirmation">
      <div className="confirmation__shell">
        <ConfirmationSummary order={order} />
        <div className="confirmation__grid">
          <NextStepsTimeline order={order} />
          <OrderDetails order={order} />
        </div>
      </div>
    </section>
  );
}
