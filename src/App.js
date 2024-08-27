import "./styles.css";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [limit, setLimit] = useState(10);
  const [bool, setBool] = useState(false);

  useEffect(() => {
    window.time = setInterval(() => {
      if (limit != 0) {
        setLimit(limit - 1);
      } else {
        setBool(true);
      }
    }, 1000);
    return () => clearInterval(window.time);
  }, [limit]);

  return (
    <div className="App">
      <h2>{counter}</h2>
      <h2>Time Left: {limit} seconds</h2>
      <button onClick={() => setCounter(counter + 1)} hidden={bool}>
        +
      </button>
    </div>
  );
}
