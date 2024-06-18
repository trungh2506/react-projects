import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../productSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function ProductList() {
  const dispatch = useDispatch();
  const { data: products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <strong>{product.title}</strong> - ${product.price} <br /> 🏷️{" "}
          {product.category}
          <br />
          <Link to={`${product.id}`}>View Details</Link>
        </li>
      ))}
    </ul>
  );
}
