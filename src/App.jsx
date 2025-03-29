import Counter from "./component/Counter";
import { CounterProvider } from "./component/CounterContext";

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
export default App;


