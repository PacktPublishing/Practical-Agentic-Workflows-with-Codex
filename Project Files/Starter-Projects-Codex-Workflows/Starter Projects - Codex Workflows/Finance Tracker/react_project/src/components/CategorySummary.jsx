import styles from './CategorySummary.module.css';
import { formatCurrency } from '../utils/currencyUtils.js';
import { getCategoryColour } from '../utils/categoryUtils.js';

function CategorySummary({ summary }) {
  const expenseSummary = summary.filter((item) => item.total < 0);

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>By Category</h3>
      <ul className={styles.list}>
        {expenseSummary.map((item) => (
          <li key={item.category} className={styles.row}>
            <span
              className={styles.dot}
              style={{ backgroundColor: getCategoryColour(item.category) }}
            />
            <span className={styles.label}>{item.category}</span>
            <span className={styles.total}>{formatCurrency(item.total)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategorySummary;
