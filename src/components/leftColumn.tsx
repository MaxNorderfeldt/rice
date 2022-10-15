import "../styling/navbar.css";
import Resources from "../containers/resources";
import "../styling/columns.css";
import "../styling/leftColumn.css";
import { useDispatch } from "react-redux";
import { incrementRiceByAmount } from "../slices/riceSlice";

function LeftColumn(props: any) {
  const dispatch = useDispatch();
  return (
    <div className="column">
      <button
        id="rice-button"
        type="button"
        onClick={() => dispatch(incrementRiceByAmount(1))}
      >
        Collect Rice
      </button>
      <Resources> </Resources>
    </div>
  );
}

export default LeftColumn;
