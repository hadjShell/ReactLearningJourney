import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAfterThreeSecond,
  selectCount,
} from "../redux/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementer, setIncrementer] = useState(1);

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(incrementer))}>
        Increment by amount
      </button>
      <button onClick={() => dispatch(incrementAfterThreeSecond())}>
        Increment after 3 second
      </button>
      <div>
        <p>Amount: </p>
        <input
          type="number"
          value={incrementer}
          onChange={e => setIncrementer(Number(e.target.value))}
        ></input>
      </div>
    </main>
  );
};

export default Counter;
