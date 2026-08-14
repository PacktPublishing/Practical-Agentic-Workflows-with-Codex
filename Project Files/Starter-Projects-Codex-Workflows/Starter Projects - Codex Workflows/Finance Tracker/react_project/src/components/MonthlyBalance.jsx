import styles from './MonthlyBalance.module.css';
import { formatCurrency } from '../utils/currencyUtils.js';

function MonthlyBalance({ balance, month }) {
  const isProfit = balance >= 0;

  return (
    <div className={`${styles.container} ${isProfit ? styles.profit : styles.loss}`}>
      <p className={styles.label}>{month} Balance</p>
      <p className={styles.amount}>{formatCurrency(balance)}</p>
      <p className={styles.status}>{isProfit ? 'In profit' : 'In loss'}</p>
    </div>
  );
}

export default MonthlyBalance;
