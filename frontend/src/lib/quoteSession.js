const STORAGE_KEY = 'acecore.quoteSession';

function readStorage() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

let memory = typeof window === 'undefined' ? null : readStorage();

export function getQuoteSession() {
  return memory;
}

export function setQuoteSession(patch) {
  memory = {
    ...(memory || {}),
    ...patch,
    form: {
      ...((memory && memory.form) || {}),
      ...(patch.form || {}),
    },
  };

  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(memory));
  } catch {
    /* sessionStorage may be unavailable; in-memory session still works for SPA navigation */
  }

  return memory;
}

export function isCheckoutReady(session = memory) {
  if (!session?.committed || !session.packageId) return false;

  const form = session.form || {};
  return Boolean(
    String(form.firstName || '').trim() &&
      String(form.lastName || '').trim() &&
      String(form.email || '').trim() &&
      String(form.installationAddress || '').trim(),
  );
}

export function isOrderConfirmed(session = memory) {
  const order = session?.order;
  return Boolean(order?.orderId && order?.createdAt && order?.product?.name);
}
