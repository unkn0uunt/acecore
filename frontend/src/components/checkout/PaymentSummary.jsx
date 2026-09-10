import { checkoutCopy } from '../../data/checkout';

export default function PaymentSummary({ view }) {
  return (
    <section className="checkout-totals" aria-labelledby="checkout-totals-title">
      <h3 id="checkout-totals-title" className="checkout-subheading">
        {checkoutCopy.paymentSummaryTitle}
      </h3>

      <div className="checkout-totals__rows">
        <div className="checkout-totals__row">
          <span>{view.productName}</span>
          <span>{view.formattedAmount}</span>
        </div>
        <div className="checkout-totals__row">
          <span>Delivery</span>
          <span className="checkout-totals__status">{checkoutCopy.deliveryStatus}</span>
        </div>
        <div className="checkout-totals__row">
          <span>Taxes</span>
          <span className="checkout-totals__status">{checkoutCopy.taxStatus}</span>
        </div>
      </div>

      <div className="checkout-totals__total">
        <span>{checkoutCopy.totalLabel}</span>
        <strong>{view.formattedTotal}</strong>
      </div>
    </section>
  );
}
