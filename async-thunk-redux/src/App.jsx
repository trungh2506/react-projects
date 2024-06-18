import { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./productSlice";
import { Link, Outlet } from "react-router-dom";
import ProductList from "./components/productList";
function App() {
  return (
    <div>
      <Link to="product">Product List</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
