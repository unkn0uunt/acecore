import Reveal from '../../ui/Reveal';
import DesktopComparisonTable from './DesktopComparisonTable';
import MobileComparison from './MobileComparison';
import {
  comparisonCopy,
  comparisonFootnotes,
} from '../../../data/powercellComparison';

export default function ComparisonSection() {
  return (
    <section className="comparison-section" aria-labelledby="comparison-title">
      <div className="comparison-section__inner home-shell">
        <Reveal>
          <header className="comparison-section__header">
            <p className="comparison-section__eyebrow">{comparisonCopy.eyebrow}</p>
            <h2 id="comparison-title" className="comparison-section__title">
              {comparisonCopy.title}
            </h2>
            <p className="comparison-section__description">
              {comparisonCopy.description}
            </p>
          </header>
        </Reveal>

        <Reveal y={32} delay={0.06}>
          <div className="comparison-section__desktop">
            <DesktopComparisonTable />
          </div>
        </Reveal>

        <Reveal y={28} delay={0.06}>
          <div className="comparison-section__mobile">
            <MobileComparison />
          </div>
        </Reveal>

        <Reveal delay={0.1} y={20}>
          <ul className="comparison-section__footnotes">
            {comparisonFootnotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
