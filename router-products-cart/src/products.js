import localforage from "localforage";
import { useState } from "react";
import { redirect } from "react-router-dom";

export async function getProducts() {
  let products = await localforage.getItem("products");
  if (!products)
    products = [
      { id: 1, name: "Iphone 11", price: 50, available: 10 },
      { id: 2, name: "Samsung A7", price: 20, available: 5 },
      { id: 3, name: "Xiaomi Redmi Note 8", price: 35, available: 0 },
    ];
  console.table(products);
  return products;
}

export async function getCartItems() {
  let cartItems = await localforage.getItem("cartItems");
  if (!cartItems) cartItems = [];
  console.table(cartItems);
  return cartItems;
}

// Tính tổng tiền
export function getToTal(cartItems) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return totalPrice;
}

function setProducts(products) {
  return localforage.setItem("products", products);
}
function setCartItems(cartItems) {
  return localforage.setItem("cartItems", cartItems);
}

export async function addToCart(product) {
  const products = await getProducts();
  const cartItems = await getCartItems();
  if (product.available > 0) {
    //cập nhật số lượng sản phẩm trong shop
    //  setProducts(
    //    products.map((p) =>
    //      p.id === product.id ? { ...p, available: p.available - 1 } : p
    //    )
    //  );
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
    alert("Added!");
    return products;
  }
}
export async function orderItem() {
  const products = await getProducts();
  const cartItems = await getCartItems();
  setProducts(
    products.map((p) => {
      const itemInCart = cartItems.find((item) => item.id === p.id);
      return itemInCart
        ? { ...p, available: p.available - itemInCart.quantity }
        : p;
    })
  );
  await localforage.removeItem("cartItems");
  alert("Ordered!");
}

// remove local forage
export async function removeStorage() {
  localforage.removeItem("cartItems");
  localforage.removeItem("products");
  alert("reset");
}

// add button for cartItem
export async function moreCartItem(cartItem) {
  const cartItems = await getCartItems();
  await setCartItems(
    cartItems.map((item) =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
  alert("+1");
}

//minus button for cartItem

export async function minusCartItem(cartItem) {
  const cartItems = await getCartItems();
  if (cartItem.quantity === 1) {
    const index = cartItems.findIndex((item) => item.id === cartItem.id);
    if (index !== -1) {
      cartItems.splice(index, 1);
      await setCartItems(cartItems); // Cập nhật cartItems sau khi xóa
    }
  } else {
    const updatedCartItems = cartItems.map((item) =>
      item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
    );
    await setCartItems(updatedCartItems); // Cập nhật cartItems sau khi giảm số lượng
  }
  alert("-1");
}
