import React, { useEffect, useState, useRef } from "react";
import logo from "./logo.svg";

function Counter() {
  const [counter, setCount] = useState(0);
  const [incrementBySet, setIncrementBy] = useState(1);

  function handleClick() {
    setCount(counter + 1);
  }
  function buyUpgrade(amount: number) {
    incrementBy.current = incrementBy.current + amount;
  }

  useEffect(() => {
    const id = setInterval(
      () => setCount((oldCount) => oldCount + incrementBy.current),
      1000
    );

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {}, [incrementBy]);

  return (
    <div>
      <button onClick={handleClick} type="button">
        {counter}{" "}
      </button>
      <button onClick={() => buyUpgrade(1)}>Buy upgrade</button>
      <div>Increment each tick by : {incrementBy.current}</div>
    </div>
  );
}

export default Counter;
