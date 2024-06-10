import React, { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Iphone 11", price: 50, available: 10 },
    { id: 2, name: "Samsung A7", price: 20, available: 5 },
    { id: 3, name: "Xiaomi Redmi Note 8", price: 35, available: 0 },
  ]);
  const [cartItems, setCartItems] = useState([]);

  const clearCart = () => {
    setCartItems([]);
  };
  const addToCart = (product) => {
    if (product.available > 0) {
      //cập nhật số lượng sản phẩm trong shop
      setProducts(
        products.map((p) =>
          p.id === product.id ? { ...p, available: p.available - 1 } : p
        )
      );
      //kiểm tra sản phẩm đã có trong giỏ hàng chưa
      const existingProduct = cartItems.find((item) => item.id === product.id);
      //nếu có thì thêm trường quantity va + 1
      if (existingProduct) {
        setCartItems(
          cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
        // neu khong thi gan quantity = 1
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    }
  };

  return (
    <div className="App">
      <ProductList productList={products} addToCart={addToCart} />

      <CartItem cartItems={cartItems} clearCart={clearCart} />
    </div>
  );
}

function ProductList({ productList, addToCart }) {
  return (
    <div>
      <h2>My Store</h2>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <strong>Model:</strong> {product.name}
            <br />
            <strong>Price:</strong> {product.price}$
            <br />
            <strong>Amount:</strong> {product.available}
            <br />
            <button
              onClick={() => addToCart(product)}
              disabled={product.available === 0}
            >
              {product.available > 0 ? "Add to cart" : "Out of stock"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CartItem({ cartItems, clearCart }) {
  // Tính tổng tiền
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Your Cart</h2>
      <table>
        <th>Model name</th>
        <th>Price</th>
        <th>Amount</th>
        {cartItems.map((cart, index) => (
          <tr key={cartItems.id}>
            <td>
              <strong>{cart.name}</strong>
            </td>
            <td>{cart.price}$</td>
            <td>x {cart.quantity}</td>
          </tr>
        ))}
        <tr>
          <td colSpan={2}>Total: </td>
          <td>
            <strong>{totalPrice}</strong>$
          </td>
        </tr>
      </table>
      <button disabled={cartItems.length === 0} onClick={() => clearCart()}>
        Clear Cart
      </button>
    </div>
  );
}
export default App;
