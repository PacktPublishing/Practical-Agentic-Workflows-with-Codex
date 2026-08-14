export function formatCurrency(amount) {
  const abs = Math.abs(amount);
  const formatted = abs.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return amount < 0 ? `-£${formatted}` : `£${formatted}`;
}
