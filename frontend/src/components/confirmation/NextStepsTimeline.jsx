import { confirmationCopy, confirmationTimeline, getOrderStatus } from '../../data/confirmation';

export default function NextStepsTimeline({ order }) {
  const status = getOrderStatus(order);

  return (
    <section className="confirmation-card confirmation-card--timeline" aria-labelledby="confirmation-next-title">
      <h2 id="confirmation-next-title" className="confirmation-card__title">
        {confirmationCopy.nextTitle}
      </h2>

      <ol className="confirmation-timeline">
        {confirmationTimeline.map((step, index) => {
          const stepNumber = index + 1;
          const state = stepNumber === status.activeStep ? 'current' : stepNumber < status.activeStep ? 'complete' : 'upcoming';

          return (
            <li key={step.id} className={`confirmation-timeline__item confirmation-timeline__item--${state}`}>
              <span className="confirmation-timeline__marker" aria-hidden="true">
                {step.number}
              </span>
              <div className="confirmation-timeline__body">
                <h3 className="confirmation-timeline__title">{step.title}</h3>
                <p className="confirmation-timeline__description">{step.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
