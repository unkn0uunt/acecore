export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}) {
  return (
    <header className={`section-header section-header--${align} ${className}`.trim()}>
      {eyebrow ? <p className="section-header__eyebrow">{eyebrow}</p> : null}
      {title ? <h2 className="section-header__title">{title}</h2> : null}
      {description ? <p className="section-header__description text-muted">{description}</p> : null}
    </header>
  );
}
