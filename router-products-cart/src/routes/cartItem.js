import { useLoaderData } from "react-router-dom";
import {
  getCartItems,
  getToTal,
  orderItem,
  moreCartItem,
  addToCart,
  minusCartItem,
} from "../products";
import { useEffect } from "react";

export default function CartItem({ clearCart }) {
  const cartItems = useLoaderData();
  const totalPrice = getToTal(cartItems);
  return cartItems.length === 0 ? (
    <h2>Empty</h2>
  ) : (
    <div>
      <h2>Your Cart</h2>
      <table>
        <th>Model name</th>
        <th>Price</th>
        <th>Amount</th>
        <th></th>
        {cartItems.map((cartItem, index) => (
          <tr key={cartItem.id}>
            <td>
              <strong>{cartItem.name}</strong>
            </td>
            <td>{cartItem.price}$</td>
            <td>x {cartItem.quantity}</td>
            <td>
              <button onClick={() => minusCartItem(cartItem)}>-</button>
              <button onClick={() => moreCartItem(cartItem)}>+</button>
            </td>
          </tr>
        ))}
        <tr>
          <td colSpan={2}>Total: </td>
          <td>
            <strong>{totalPrice}</strong>$
          </td>
        </tr>
      </table>
      <button disabled={cartItems.length === 0} onClick={() => orderItem()}>
        Order
      </button>
    </div>
  );
}
