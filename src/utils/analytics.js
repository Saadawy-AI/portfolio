const STORAGE_KEY = "portfolio_events";

export function trackEvent(action, details = {}) {
  const event = {
    action,
    details,
    path: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", action, details);
  }

  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const next = [event, ...stored].slice(0, 100);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([event]));
  }

  window.dispatchEvent(new CustomEvent("portfolio:event", { detail: event }));
}
