import styles from './CartItem.module.css';

function CartItem({ item, onRemove }) {
  const lineTotal = item.price * item.quantity;

  return (
    <div className={styles.item}>
      <div className={styles.details}>
        <span className={styles.name}>{item.name}</span>
        <span className={styles.meta}>
          ${item.price.toFixed(2)} × {item.quantity} ={' '}
          <strong>${lineTotal.toFixed(2)}</strong>
        </span>
      </div>
      <button className={styles.remove} onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
