import styles from './CategorySummary.module.css';
import { formatCurrency } from '../utils/currencyUtils.js';
import { getCategoryColour } from '../utils/categoryUtils.js';

function CategorySummary({ summary }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>By Category</h3>
      <ul className={styles.list}>
        {summary.map((item) => (
          <li key={item.category} className={styles.row}>
            <span
              className={styles.dot}
              style={{ backgroundColor: getCategoryColour(item.category) }}
            />
            <span className={styles.label}>{item.category}</span>
            <span className={styles.total}>{formatCurrency(item.total)}</span>
            {item.isOverBudget && (
              <span
                className={styles.warning}
                aria-label={`${item.category} is over budget by ${formatCurrency(item.overBudgetBy)}`}
                title={`${item.category} is over budget by ${formatCurrency(item.overBudgetBy)}`}
              >
                !
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategorySummary;
