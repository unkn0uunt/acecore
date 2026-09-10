import { useState } from 'react';
import { confirmationCopy, formatOrderPrice } from '../../data/confirmation';

export default function OrderDetails({ order }) {
  const [trackMessage, setTrackMessage] = useState('');
  const product = order.product || {};
  const delivery = order.delivery || {};

  const handleTrack = () => {
    setTrackMessage(confirmationCopy.trackPending);
  };

  return (
    <section className="confirmation-card confirmation-card--details" aria-labelledby="confirmation-details-title">
      <h2 id="confirmation-details-title" className="confirmation-card__title">
        {confirmationCopy.detailsTitle}
      </h2>

      <article className="confirmation-product">
        <div className="confirmation-product__copy">
          <h3 className="confirmation-product__name">{product.name}</h3>
          <p className="confirmation-product__config">{product.configurationSummary}</p>
          <p className="confirmation-product__order">Order #{order.orderId}</p>
        </div>
        <p className="confirmation-product__price">{formatOrderPrice(product.amount)}</p>
      </article>

      <div className="confirmation-delivery">
        <div className="confirmation-delivery__copy">
          <p className="confirmation-delivery__label">{confirmationCopy.deliveringTo}</p>
          <p className="confirmation-delivery__address">{delivery.address}</p>
          <p className="confirmation-delivery__method">{delivery.shippingMethod}</p>
        </div>

        <button type="button" className="confirmation-track" onClick={handleTrack}>
          {confirmationCopy.trackOrder}
        </button>
      </div>

      {trackMessage ? (
        <p className="confirmation-track__status" role="status">
          {trackMessage}
        </p>
      ) : null}
    </section>
  );
}
