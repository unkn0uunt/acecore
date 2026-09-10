import checkIcon from '../../assets/icons/confirmation-check.png';
import { confirmationCopy, formatOrderDate, getOrderStatus } from '../../data/confirmation';

export default function ConfirmationSummary({ order }) {
  const status = getOrderStatus(order);
  const progressPercent = Math.round(status.progress * 100);

  return (
    <section className="confirmation-hero" aria-labelledby="confirmation-title">
      <div className="confirmation-hero__info">
        <img
          className="confirmation-hero__check"
          src={checkIcon}
          alt=""
          width={64}
          height={64}
          aria-hidden="true"
        />

        <div className="confirmation-hero__copy">
          <h1 id="confirmation-title" className="confirmation-hero__title">
            {confirmationCopy.title}
          </h1>
          <p className="confirmation-hero__support">{confirmationCopy.support}</p>
          <p className="confirmation-hero__order">
            {confirmationCopy.orderLabel} #{order.orderId}
          </p>
          <p className="confirmation-hero__date">{formatOrderDate(order.createdAt)}</p>
        </div>
      </div>

      <aside className="confirmation-status" aria-labelledby="confirmation-status-title">
        <p className="confirmation-status__eyebrow">{confirmationCopy.statusEyebrow}</p>
        <h2 id="confirmation-status-title" className="confirmation-status__title">
          {status.label}
        </h2>
        <p className="confirmation-status__description">{status.description}</p>
        <div
          className="confirmation-status__track"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progressPercent}
          aria-label={`${status.label}, ${progressPercent}%`}
        >
          <span className="confirmation-status__fill" style={{ width: `${progressPercent}%` }} />
        </div>
      </aside>
    </section>
  );
}
