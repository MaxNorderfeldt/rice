import "../styling/navbar.css";
import { useSelector } from "react-redux";
import { incrementRice, selectRice } from "../slices/riceSlice";
import ResourceList from "../components/resourceList";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { selectWorkers, selectFarmers } from "../slices/workersSlice";
import { useInterval } from "usehooks-ts";

function Resources(props: any) {
  const dispatch = useDispatch();
  const farmers = useSelector(selectFarmers);
  const ref = useRef(
    setInterval(() => dispatch(incrementRice(1 + farmers)), 1000)
  );

  function incrementRiceBy() {}

  const rice = useSelector(selectRice);

  /*   useEffect(() => {
    if (rice) {
      window.localStorage.setItem("rice", rice);
    }
  }, [rice]); */

  return (
    <div>
      <ResourceList rice={rice}></ResourceList>
    </div>
  );
}

export default Resources;
