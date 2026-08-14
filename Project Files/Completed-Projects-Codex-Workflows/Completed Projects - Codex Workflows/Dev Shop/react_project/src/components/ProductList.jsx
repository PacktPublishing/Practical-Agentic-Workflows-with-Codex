import ProductCard from './ProductCard';
import styles from './ProductList.module.css';

function ProductList({ products, onAddToCart }) {
  return (
    <section className={styles.list}>
      <h2 className={styles.heading}>Products</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
