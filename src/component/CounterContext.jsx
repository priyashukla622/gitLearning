import { createContext, useState } from "react";

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }
  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  );
}
export { CounterContext, CounterProvider };


