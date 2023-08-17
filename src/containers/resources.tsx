import "../styling/navbar.css";
import { useSelector } from "react-redux";
import { incrementRice, selectRice } from "../slices/riceSlice";
import ResourceList from "../components/resourceList";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectFarmers } from "../slices/workersSlice";
import { selectFarms } from "../slices/buildingsSlice";

function Resources(props: any) {
  const [incrementRiceBy, setIncrementRiceBy] = useState(0);
  const dispatch = useDispatch();
  const farms = useSelector(selectFarms);
  const farmers = useSelector(selectFarmers);

  useEffect(() => {
    let timerID: ReturnType<typeof setTimeout>;
    function timer() {
      timerID = setTimeout(() => {
        dispatch(incrementRice(incrementRiceBy));
        timer();
      }, 1000);
    }
    timer();

    return () => {
      clearTimeout(timerID);
    };
  }, [incrementRiceBy, dispatch]);

  useEffect(() => {
    setIncrementRiceBy(farmers * 0.5);
  }, [farmers]);

  const rice = useSelector(selectRice);

  /*   useEffect(() => {
    if (rice) {
      window.localStorage.setItem("rice", rice);
    }
  }, [rice]); */

  return (
    <div>
      <ResourceList
        rice={rice}
        incrementRiceBy={incrementRiceBy}
      ></ResourceList>
    </div>
  );
}

export default Resources;
