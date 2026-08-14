import styles from './App.module.css';
import TransactionList from './components/TransactionList.jsx';
import Dashboard from './components/Dashboard.jsx';
import {
  getAllTransactions,
  getTotalIncome,
  getTotalExpenses,
  getBalance,
  getSummaryByCategory,
} from './services/transactionService.js';

const transactions = getAllTransactions();
const income = getTotalIncome();
const expenses = getTotalExpenses();
const balance = getBalance();
const summary = getSummaryByCategory();

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>Finance Tracker</h1>
        <p className={styles.subtitle}>January 2026</p>
      </header>
      <main className={styles.layout}>
        <TransactionList transactions={transactions} />
        <Dashboard
          income={income}
          expenses={expenses}
          balance={balance}
          summary={summary}
        />
      </main>
    </div>
  );
}

export default App;
