import "../styling/navbar.css";
import Resources from "../containers/resources";
import "../styling/columns.css";
import "../styling/leftColumn.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementRice, selectRice } from "../slices/riceSlice";
import { useEffect } from "react";

function LeftColumn(props: any) {
  const dispatch = useDispatch();
  const rice = useSelector(selectRice);
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(incrementRice(1));
    }, 1000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="column">
      <button
        id="rice-button"
        type="button"
        onClick={() => dispatch(incrementRice(1))}
      >
        Collect Rice
      </button>
      <Resources> </Resources>
    </div>
  );
}

export default LeftColumn;
