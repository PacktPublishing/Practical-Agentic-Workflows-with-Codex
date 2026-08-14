import { describe, it, expect } from 'vitest';
import { formatCurrency } from './currencyUtils.js';

describe('currencyUtils', () => {
  it('formatCurrency formats a positive number correctly', () => {
    expect(formatCurrency(3200)).toBe('£3,200.00');
  });

  it('formatCurrency formats a negative number correctly', () => {
    expect(formatCurrency(-950)).toBe('-£950.00');
  });
});
