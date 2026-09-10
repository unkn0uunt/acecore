import { checkoutSteps } from '../../data/checkout';

export default function CheckoutStepper() {
  return (
    <ol className="checkout-stepper" aria-label="Checkout progress">
      {checkoutSteps.map((step, index) => {
        const next = checkoutSteps[index + 1];

        return (
          <li
            key={step.id}
            className={`checkout-stepper__item checkout-stepper__item--${step.state}`}
          >
            <div className="checkout-stepper__node">
              <span className="checkout-stepper__number" aria-hidden="true">
                {step.number}
              </span>
              <span className="checkout-stepper__label">
                {step.state === 'current' ? (
                  <span className="visually-hidden">Current step: </span>
                ) : null}
                {step.label}
              </span>
            </div>
            {next ? <span className="checkout-stepper__rule" aria-hidden="true" /> : null}
          </li>
        );
      })}
    </ol>
  );
}
