import { Link } from 'react-router-dom';
import { checkoutCopy } from '../../data/checkout';

export default function ProductConfigurationSummary({ view }) {
  return (
    <article className="checkout-product">
      <img
        className="checkout-product__image"
        src={view.image}
        alt={view.productName}
        width={180}
        height={240}
      />

      <div className="checkout-product__body">
        <div className="checkout-product__copy">
          <h3 className="checkout-product__name">{view.productName}</h3>
          <p className="checkout-product__subtitle">{view.subtitle}</p>
        </div>

        <dl className="checkout-product__meta">
          <div className="checkout-product__row">
            <dt>{checkoutCopy.quantityLabel}</dt>
            <dd>{view.quantityValue}</dd>
          </div>
          <div className="checkout-product__row">
            <dt>{checkoutCopy.configurationLabel}</dt>
            <dd>{view.configurationLabel}</dd>
          </div>
        </dl>

        <Link className="checkout-link checkout-product__edit" to={view.editConfigHref}>
          {checkoutCopy.editConfiguration}
        </Link>
      </div>
    </article>
  );
}
