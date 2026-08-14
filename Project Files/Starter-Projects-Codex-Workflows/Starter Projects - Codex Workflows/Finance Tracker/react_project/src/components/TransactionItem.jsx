import styles from './TransactionItem.module.css';
import { formatCurrency } from '../utils/currencyUtils.js';
import { getCategoryColour } from '../utils/categoryUtils.js';

function TransactionItem({ transaction }) {
  const { description, amount, category } = transaction;
  const isIncome = amount > 0;

  return (
    <li className={styles.item}>
      <span
        className={styles.dot}
        style={{ backgroundColor: getCategoryColour(category) }}
      />
      <div className={styles.details}>
        <span className={styles.description}>{description}</span>
        <span className={styles.category}>{category}</span>
      </div>
      <span className={`${styles.amount} ${isIncome ? styles.income : styles.expense}`}>
        {formatCurrency(amount)}
      </span>
    </li>
  );
}

export default TransactionItem;
