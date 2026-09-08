import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import { comparisonCopy } from '../../../data/powercellComparison';

export default function ComparisonChooseButton({ className = '' }) {
  return (
    <Button
      as={Link}
      to="/contact"
      variant="brand"
      className={`comparison-choose ${className}`.trim()}
    >
      <span>{comparisonCopy.chooseLabel}</span>
      <span className="comparison-choose__chevron" aria-hidden="true">
        ›
      </span>
    </Button>
  );
}
