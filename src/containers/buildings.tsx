import "../styling/buildings.css";
import { useDispatch } from "react-redux";

function Buildings() {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="tooltip">
        Build Storage Room
        <span className="tooltiptext">Tooltip text</span>
      </button>
      <button className="tooltip">
        Build a Farm
        <span className="tooltiptext">Increases rice per second by 0.5</span>
      </button>
    </div>
  );
}

export default Buildings;
