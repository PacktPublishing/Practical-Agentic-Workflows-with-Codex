import styles from './TransactionList.module.css';
import TransactionItem from './TransactionItem.jsx';

function TransactionList({ transactions }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Transactions</h2>
      <ul className={styles.list}>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </section>
  );
}

export default TransactionList;
