import { useState } from 'react';
import styles from './TransactionList.module.css';
import TransactionItem from './TransactionItem.jsx';

function TransactionList({ transactions }) {
  const [searchText, setSearchText] = useState('');
  const normalizedSearchText = searchText.trim().toLowerCase();
  const visibleTransactions = normalizedSearchText
    ? transactions.filter((transaction) =>
        transaction.description.toLowerCase().includes(normalizedSearchText),
      )
    : transactions;

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Transactions</h2>
      <label className={styles.searchLabel} htmlFor="transaction-search">
        Search transactions
      </label>
      <input
        className={styles.searchInput}
        id="transaction-search"
        type="search"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
        placeholder="Search by description"
      />
      <ul className={styles.list}>
        {visibleTransactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </section>
  );
}

export default TransactionList;
