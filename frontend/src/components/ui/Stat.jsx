export default function Stat({ value, label, className = '' }) {
  return (
    <div className={`stat ${className}`.trim()}>
      <p className="stat__value">{value}</p>
      {label ? <p className="stat__label text-muted">{label}</p> : null}
    </div>
  );
}
