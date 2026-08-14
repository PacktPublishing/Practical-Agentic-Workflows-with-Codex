import styles from './ProductCard.module.css';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
      <button className={styles.button} onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
