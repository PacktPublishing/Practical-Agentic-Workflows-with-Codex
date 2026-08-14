import CartItem from './CartItem';
import styles from './Cart.module.css';

function Cart({ cartItems, onRemove, onClearCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = total > 100 ? total * 0.1 : 0;
  const discountedTotal = total - discountAmount;

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.heading}>Cart</h2>

      {cartItems.length === 0 ? (
        <p className={styles.empty}>Your cart is empty</p>
      ) : (
        <>
          <div className={styles.items}>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} onRemove={onRemove} />
            ))}
          </div>
          <div className={styles.footer}>
            <div className={styles.summary}>
              <p className={styles.summaryRow}>
                Original total: <strong>${total.toFixed(2)}</strong>
              </p>
              {discountAmount > 0 && (
                <p className={styles.summaryRow}>
                  Discount: <strong>-${discountAmount.toFixed(2)}</strong>
                </p>
              )}
              <p className={styles.total}>
                Total: <strong>${discountedTotal.toFixed(2)}</strong>
              </p>
            </div>
            <button className={styles.clear} onClick={onClearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default Cart;
