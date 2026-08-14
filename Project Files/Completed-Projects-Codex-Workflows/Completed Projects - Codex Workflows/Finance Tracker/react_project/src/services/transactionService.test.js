import { describe, it, expect } from 'vitest';
import {
  getAllTransactions,
  getTotalIncome,
  getTotalExpenses,
  getBalance,
  getTransactionsByCategory,
  getSummaryByCategory,
  getExpenseSummaryByCategory,
  getBudgetAlertsByCategory,
  getTopSpendingCategory,
  getAverageDailySpend,
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

  it('getExpenseSummaryByCategory returns only expense categories with budget status', () => {
    const summary = getExpenseSummaryByCategory();

    expect(summary).toHaveLength(7);
    expect(summary.every((item) => item.total < 0)).toBe(true);
    expect(summary.every((item) => typeof item.isOverBudget === 'boolean')).toBe(true);
  });

  it('getBudgetAlertsByCategory returns categories over budget', () => {
    expect(getBudgetAlertsByCategory()).toEqual([
      {
        category: 'Housing',
        total: -950,
        spent: 950,
        budgetLimit: 900,
        isOverBudget: true,
        overBudgetBy: 50,
      },
      {
        category: 'Food',
        total: -230,
        spent: 230,
        budgetLimit: 200,
        isOverBudget: true,
        overBudgetBy: 30,
      },
      {
        category: 'Utilities',
        total: -120,
        spent: 120,
        budgetLimit: 100,
        isOverBudget: true,
        overBudgetBy: 20,
      },
      {
        category: 'Shopping',
        total: -78,
        spent: 78,
        budgetLimit: 75,
        isOverBudget: true,
        overBudgetBy: 3,
      },
    ]);
  });

  it('getTopSpendingCategory returns the category with the highest total expenses', () => {
    expect(getTopSpendingCategory()).toBe('Housing');
  });

  it('getAverageDailySpend returns the average expense spend over 31 days', () => {
    expect(getAverageDailySpend()).toBe(48.16);
  });
});
