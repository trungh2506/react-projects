import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductById } from "../../productSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {product.title} - {product.price}$ <br />
      Description: <br />
      {product.description} <br />
      <img width={300} height={300} src={product.image} alt="" />
    </div>
  );
}
