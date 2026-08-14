import { describe, it, expect } from 'vitest';
import {
  getAllTransactions,
  getTotalIncome,
  getTotalExpenses,
  getBalance,
  getTransactionsByCategory,
  getSummaryByCategory,
} from './transactionService.js';

describe('transactionService', () => {
  it('getAllTransactions returns all 12 transactions', () => {
    expect(getAllTransactions()).toHaveLength(12);
  });

  it('getTotalIncome returns the correct sum', () => {
    expect(getTotalIncome()).toBe(4000);
  });

  it('getTotalExpenses returns the correct sum', () => {
    expect(getTotalExpenses()).toBe(-1493);
  });

  it('getBalance returns the correct balance', () => {
    expect(getBalance()).toBe(2507);
  });

  it('getTransactionsByCategory returns only matching transactions', () => {
    const food = getTransactionsByCategory('Food');
    expect(food).toHaveLength(3);
    expect(food.every((t) => t.category === 'Food')).toBe(true);
  });

  it('getTransactionsByCategory returns empty array for unknown category', () => {
    expect(getTransactionsByCategory('Unknown')).toEqual([]);
  });

  it('getSummaryByCategory returns correct number of categories', () => {
    expect(getSummaryByCategory()).toHaveLength(8);
  });

  it('getSummaryByCategory returns correct total for Food category', () => {
    const summary = getSummaryByCategory();
    const food = summary.find((item) => item.category === 'Food');
    expect(food.total).toBe(-230);
  });
});
