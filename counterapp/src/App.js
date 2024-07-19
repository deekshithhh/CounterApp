import logo from './logo.svg';
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [count, setCount] = useState(0);
  const IncrementCounter = () => {
    console.log("Increment");
    setCount((prev) => prev + 1);
  };
  const DecrementCounter = () => {
    console.log("DecrementCounter");
    setCount((prev) => prev - 1);
  };
  return (
    <div className="App">
      <h1>Counter App</h1>
      <div>Count: {count}</div>
      <button onClick={IncrementCounter}>Increment</button>
      <button onClick={DecrementCounter}>Decrement</button>
    </div>
  );
}


export default App;
