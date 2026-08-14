import transactions from '../data/transactions.js';
import monthlyBudgets from '../data/monthlyBudgets.js';

export function getAllTransactions() {
  return transactions;
}

export function getTransactionsByCategory(category) {
  return transactions.filter((t) => t.category === category);
}

export function getTotalIncome() {
  return transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
}

export function getTotalExpenses() {
  return transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + t.amount, 0);
}

export function getBalance() {
  return getTotalIncome() + getTotalExpenses();
}

export function getSummaryByCategory() {
  const map = {};
  for (const t of transactions) {
    if (!map[t.category]) {
      map[t.category] = { category: t.category, total: 0 };
    }
    map[t.category].total += t.amount;
  }
  return Object.values(map);
}

export function getExpenseSummaryByCategory() {
  return getSummaryByCategory()
    .filter((item) => item.total < 0)
    .map((item) => {
      const spent = Math.abs(item.total);
      const budgetLimit = monthlyBudgets[item.category] ?? null;
      const isOverBudget = budgetLimit !== null && spent > budgetLimit;

      return {
        ...item,
        spent,
        budgetLimit,
        isOverBudget,
        overBudgetBy: isOverBudget ? spent - budgetLimit : 0,
      };
    });
}

export function getBudgetAlertsByCategory() {
  return getExpenseSummaryByCategory().filter((item) => item.isOverBudget);
}

export function getTopSpendingCategory() {
  const [topCategory] = getExpenseSummaryByCategory().sort((a, b) => b.spent - a.spent);

  return topCategory.category;
}

export function getLowestSpendingCategory() {
  const [lowestCategory] = getExpenseSummaryByCategory().sort((a, b) => a.spent - b.spent);

  return lowestCategory.category;
}

export function getAverageDailySpend() {
  return Number((Math.abs(getTotalExpenses()) / 31).toFixed(2));
}
