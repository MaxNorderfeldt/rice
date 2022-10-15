import "../styling/navbar.css";
import { useSelector } from "react-redux";
import { selectRice } from "../slices/riceSlice";
import { selectWorkers } from "../slices/workersSlice";
import ResourceList from "../components/resourceList";
import React from "react";

function Resources(props: any) {
  const rice = useSelector(selectRice);
  const workers = useSelector(selectWorkers);
  return (
    <React.Fragment>
      <ResourceList rice={rice} workers={workers}></ResourceList>
    </React.Fragment>
  );
}

export default Resources;
