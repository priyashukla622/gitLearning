import { useContext } from "react";
import  "./Counter.css"
import { CounterContext } from "./CounterContext";

function Counter() {
  const { count, increment, decrement, reset } = useContext(CounterContext);
  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
export default Counter;


