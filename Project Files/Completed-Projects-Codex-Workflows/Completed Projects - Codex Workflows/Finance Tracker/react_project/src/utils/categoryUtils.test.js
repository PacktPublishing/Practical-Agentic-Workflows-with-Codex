import { describe, it, expect } from 'vitest';
import { getCategoryColour } from './categoryUtils.js';

const KNOWN_CATEGORIES = [
  'Income',
  'Housing',
  'Food',
  'Entertainment',
  'Utilities',
  'Health',
  'Shopping',
  'Transport',
];

describe('categoryUtils', () => {
  it('getCategoryColour returns a string for every known category', () => {
    for (const category of KNOWN_CATEGORIES) {
      expect(typeof getCategoryColour(category)).toBe('string');
    }
  });

  it('getCategoryColour returns a fallback value for an unknown category', () => {
    expect(getCategoryColour('Unknown')).toBe('#6b7280');
  });
});
