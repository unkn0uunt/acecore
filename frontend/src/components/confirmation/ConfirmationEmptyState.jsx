import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { confirmationCopy, confirmationEmptyAction } from '../../data/confirmation';

export default function ConfirmationEmptyState() {
  const action = confirmationEmptyAction();

  return (
    <section className="confirmation confirmation--empty" aria-labelledby="confirmation-empty-title">
      <div className="confirmation__shell">
        <div className="confirmation-empty">
          <h1 id="confirmation-empty-title" className="confirmation-empty__title">
            {confirmationCopy.emptyTitle}
          </h1>
          <p className="confirmation-empty__description">{confirmationCopy.emptyDescription}</p>
          <div className="confirmation-empty__actions">
            <Button as={Link} to={action.to} variant="brand">
              {action.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
