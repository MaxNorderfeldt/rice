import React, { useEffect, useState, useRef, useCallback } from "react";
import logo from "./logo.svg";

function Counter() {
  const [counter, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  //useref is used since i want to use the incrementby in use effect but i also want it to update state in the tsx
  const incrementByRef = useRef(1);

  function handleClick() {
    setCount(counter + 1);
  }
  function buyUpgrade(amount: number) {
    const cost = 20;
    if (counter >= cost) {
      setIncrementBy(incrementBy + amount);
      incrementByRef.current = incrementBy + amount;
      setCount(counter - amount * cost);
    }
  }

  useEffect(() => {
    const incrementer = setInterval(
      () => setCount((oldCount) => oldCount + incrementByRef.current),
      1000
    );
    return () => {
      clearInterval(incrementer);
    };
  }, []);

  return (
    <div>
      <button onClick={handleClick} type="button">
        {counter}{" "}
      </button>
      <button onClick={() => buyUpgrade(1)}>Buy upgrade</button>
      <div>Increment each tick by : {incrementBy}</div>
    </div>
  );
}

export default Counter;
