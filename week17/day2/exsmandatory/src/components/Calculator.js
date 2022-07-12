import React from "react";
import {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync,
} from "../features/calculatorSlice";
import { useDispatch, useSelector } from "react-redux";

function Calculator(props) {
  const { count } = useSelector((store) => store.calculateReducer);
  //   useEffect(() => {

  //   }, [count]);
  const dispatch = useDispatch();
  //   console.log(dispatch);
  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <h1>clicked: {count} times</h1>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <button onClick={() => dispatch(incrementIfOdd())}>
        Increment if odd
      </button>
      <button
        onClick={() =>
          setTimeout(() => {
            dispatch(incrementAsync());
          }, 1000)
        }
      >
        Increment async
      </button>
    </div>
  );
}

export default Calculator;
