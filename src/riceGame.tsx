import React, { Fragment, useState } from "react";
import Navbar from "./components/navbar";
import LeftColumn from "./components/leftColumn";
import MiddleColumn from "./components/middleColumn";

function RiceGame() {
  const [rice, setRice] = useState(0);
  return (
    <Fragment>
      <Navbar></Navbar>
      <LeftColumn rice={rice} setRice={setRice}></LeftColumn>
      <MiddleColumn setRice={setRice}></MiddleColumn>
    </Fragment>
  );
}

export default RiceGame;
