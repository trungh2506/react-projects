import React, { useState } from "react";
import "./App.css";
import CartItem from "./routes/cartItem";
import ProductList from "./routes/productList";
import { Outlet, Link, NavLink, useLoaderData } from "react-router-dom";
import { getProducts, getCartItems } from "./products";

export async function productloader() {
  return getProducts();
}
export async function cartItemLoader() {
  return getCartItems();
}
function App() {
  // const [cartItems, setCartItems] = useState([]);

  // const clearCart = () => {
  //   setCartItems([]);
  // };
  // const addToCart = (product) => {
  //   if (product.available > 0) {
  //     //cập nhật số lượng sản phẩm trong shop
  //     setProducts(
  //       products.map((p) =>
  //         p.id === product.id ? { ...p, available: p.available - 1 } : p
  //       )
  //     );
  //     //kiểm tra sản phẩm đã có trong giỏ hàng chưa
  //     const existingProduct = cartItems.find((item) => item.id === product.id);
  //     //nếu có thì thêm trường quantity va + 1
  //     if (existingProduct) {
  //       setCartItems(
  //         cartItems.map((item) =>
  //           item.id === product.id
  //             ? { ...item, quantity: item.quantity + 1 }
  //             : item
  //         )
  //       );
  //       // neu khong thi gan quantity = 1
  //     } else {
  //       setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //     }
  //   }
  // };

  return (
    <div className="App">
      <ul className="navigationBar">
        <li>
          <NavLink to="home">Home</NavLink>
        </li>
        <li>
          <NavLink to="products">Products</NavLink>
        </li>
        <li>
          <NavLink to="cart">My cart</NavLink>
        </li>
      </ul>
      {/* <ProductList productList={products} addToCart={addToCart} />
      
      <CartItem cartItems={cartItems} clearCart={clearCart} /> */}
      <Outlet />
    </div>
  );
}

export default App;
