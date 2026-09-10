export function formatNaira(amount) {
  const numeric = Number(amount);
  if (!Number.isFinite(numeric)) return '—';

  return `₦ ${Math.round(numeric).toLocaleString('en-NG')}`;
}
