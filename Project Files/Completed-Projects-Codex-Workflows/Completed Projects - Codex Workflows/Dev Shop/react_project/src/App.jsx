import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import products from './data/products';
import styles from './App.module.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(product) {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function handleRemove(productId) {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  }

  function handleClearCart() {
    setCartItems([]);
  }

  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.title}>Dev Shop</h1>
      </header>
      <main className={styles.main}>
        <ProductList products={products} onAddToCart={handleAddToCart} />
        <Cart
          cartItems={cartItems}
          onRemove={handleRemove}
          onClearCart={handleClearCart}
        />
      </main>
    </div>
  );
}

export default App;
