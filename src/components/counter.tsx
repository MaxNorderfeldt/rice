import React, { useEffect, useState, useRef, useCallback } from "react";
import logo from "./logo.svg";

function Counter() {
  const [rice, setRice] = useState(0);
  const [farmer, setFarmer] = useState(1);
  //useref is used since i want to use the incrementby in use effect but i also want it to update state in the tsx
  const incrementByRef = useRef(1);

  function handleClick() {
    setRice(rice + 1);
  }
  function buyUpgrade(amount: number) {
    const cost = 20;
    if (rice >= cost) {
      setFarmer(farmer + amount);
      incrementByRef.current = farmer + amount;
      setRice(rice - amount * cost);
    }
  }

  useEffect(() => {
    const incrementer = setInterval(
      () => setRice((oldCount) => oldCount + incrementByRef.current),
      1000
    );
    return () => {
      clearInterval(incrementer);
    };
  }, []);

  return (
    <div>
      <button onClick={handleClick} type="button">
        {rice}{" "}
      </button>
      <button onClick={() => buyUpgrade(1)}>Buy upgrade</button>
      <div>Increment each tick by : {farmer}</div>
    </div>
  );
}

export default Counter;
