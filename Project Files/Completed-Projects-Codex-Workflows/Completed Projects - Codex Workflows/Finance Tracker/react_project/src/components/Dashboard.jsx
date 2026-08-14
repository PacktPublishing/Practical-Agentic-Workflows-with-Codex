import styles from './Dashboard.module.css';
import CategorySummary from './CategorySummary.jsx';
import MonthlyBalance from './MonthlyBalance.jsx';
import { formatCurrency } from '../utils/currencyUtils.js';

function Dashboard({ income, expenses, balance, summary }) {
  return (
    <aside className={styles.container}>
      <h2 className={styles.heading}>Dashboard</h2>

      <MonthlyBalance balance={balance} month="January" />

      <div className={styles.stats}>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Total Income</p>
          <p className={`${styles.statValue} ${styles.income}`}>{formatCurrency(income)}</p>
        </div>
        <div className={styles.statCard}>
          <p className={styles.statLabel}>Total Expenses</p>
          <p className={`${styles.statValue} ${styles.expense}`}>{formatCurrency(expenses)}</p>
        </div>
      </div>

      <CategorySummary summary={summary} />
    </aside>
  );
}

export default Dashboard;
