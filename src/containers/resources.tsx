import "../styling/navbar.css";
import { useSelector } from "react-redux";
import { selectRice } from "../slices/riceSlice";
import ResourceList from "../components/resourceList";

function Resources(props: any) {
  const rice = useSelector(selectRice);
  return (
    <div>
      <ResourceList rice={rice}></ResourceList>
    </div>
  );
}

export default Resources;
