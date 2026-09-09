import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import { comparisonCopy } from '../../../data/powercellComparison';
import { comparisonProductToModel } from '../../../data/requestQuote';

export default function ComparisonChooseButton({ productId = 'prime', className = '' }) {
  const model = comparisonProductToModel(productId);

  return (
    <Button
      as={Link}
      to={`/request-quote?model=${model}`}
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
