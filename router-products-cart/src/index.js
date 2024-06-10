import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { productloader, cartItemLoader } from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Routes,
  RouterProvider,
  Route,
} from "react-router-dom";
import ProductList, { action as addToCartAction } from "./routes/productList";
import CartItem from "./routes/cartItem";
import Home from "./routes/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="home" element={<Home />}></Route>
      <Route
        path="products"
        element={<ProductList />}
        loader={productloader}
      ></Route>
      <Route path="cart" element={<CartItem />} loader={cartItemLoader}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
