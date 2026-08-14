import transactions from '../data/transactions.js';

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
