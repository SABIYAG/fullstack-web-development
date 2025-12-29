import { useState } from "react";

const ProductShop = () => {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 1999 },
    { id: 2, name: "Smart Watch", price: 2999 },
    { id: 3, name: "Bluetooth Speaker", price: 1499 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(${product.name} added to cart);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h2>🛍 E-Commerce Store</h2>

      {/* Product List */}
      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h4>{product.name}</h4>
            <p>₹{product.price}</p>
            <button
              style={styles.addBtn}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div style={styles.cart}>
        <h3>🛒 Cart ({cart.length})</h3>

        {cart.length === 0 ? (
          <p style={styles.empty}>Cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} style={styles.cartItem}>
              <span>{item.name}</span>
              <button
                style={styles.removeBtn}
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    padding: "20px",
    backgroundColor: "#f4f6ff",
    fontFamily: "Arial, sans-serif",
  },
  productList: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    width: "200px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  addBtn: {
    padding: "8px",
    backgroundColor: "#0984e3",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  cart: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    maxWidth: "400px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #eee",
  },
  removeBtn: {
    backgroundColor: "#d63031",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "4px 8px",
  },
  empty: {
    color: "#888",
  },
};

export default ProductShop;
