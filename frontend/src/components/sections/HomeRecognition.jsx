import Reveal from '../ui/Reveal';
import { recognitionCopy, recognitionLogos } from '../../data/home';
import recognitionLogo from '../../assets/logos/recognition.svg';

function LogoItem({ label }) {
  return (
    <li className="home-recognition__logo">
      <img src={recognitionLogo} alt={label} />
    </li>
  );
}

export default function HomeRecognition() {
  const loopLogos = [...recognitionLogos, ...recognitionLogos];

  return (
    <section className="home-recognition" aria-labelledby="home-recognition-title">
      <div className="home-shell">
        <Reveal className="home-section-header">
          <p className="home-section-header__eyebrow">{recognitionCopy.eyebrow}</p>
          <h2 id="home-recognition-title" className="home-section-header__title">
            {recognitionCopy.title}
          </h2>
          <p className="home-section-header__description">{recognitionCopy.description}</p>
        </Reveal>

        <Reveal className="home-recognition__grid-wrap" y={24}>
          <ul className="home-recognition__grid" aria-label="Recognition partners">
            {recognitionLogos.map((logo) => (
              <LogoItem key={logo.id} label={logo.label} />
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="home-recognition__marquee" aria-hidden="true">
        <div className="home-recognition__marquee-track">
          {loopLogos.map((logo, index) => (
            <span className="home-recognition__logo" key={`${logo.id}-${index}`}>
              <img src={recognitionLogo} alt="" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
