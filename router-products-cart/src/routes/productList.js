import { useLoaderData, redirect } from "react-router-dom";
import { addToCart, removeStorage } from "../products";
import { useState } from "react";

export default function ProductList() {
  const products = useLoaderData();

  return (
    <div>
      <button onClick={() => removeStorage()}>Reset localforage</button>
      <h2>My Products</h2>
      <ul>
        {products.map((product) => (
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
// export async function action(product) {
//   await addToCart(product);
//   return redirect("/cart");
// }
