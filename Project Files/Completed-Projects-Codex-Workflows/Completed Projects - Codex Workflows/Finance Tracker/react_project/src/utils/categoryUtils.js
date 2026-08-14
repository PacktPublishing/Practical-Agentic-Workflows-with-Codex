const CATEGORY_COLOURS = {
  Income: '#22c55e',
  Housing: '#3b82f6',
  Food: '#f97316',
  Entertainment: '#a855f7',
  Utilities: '#eab308',
  Health: '#ef4444',
  Shopping: '#06b6d4',
  Transport: '#14b8a6',
};

const FALLBACK_COLOUR = '#6b7280';

export function getCategoryColour(category) {
  return CATEGORY_COLOURS[category] ?? FALLBACK_COLOUR;
}
