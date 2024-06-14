import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  decreaseWithAmount,
  increase,
  increaseWithAmount,
  reset,
} from "./couterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <div className="action1">
        <button
          onClick={() => {
            dispatch(increase());
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrease());
          }}
        >
          -
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(increaseWithAmount(10));
          }}
        >
          +10
        </button>
        <button
          onClick={() => {
            dispatch(decreaseWithAmount(10));
          }}
        >
          -10
        </button>
      </div>
    </div>
  );
}
