import { useState } from "react";
import WorkersTab from "./workersTab";
import ShopTab from "./shopTab";
import "../styling/columns.css";

function MiddleColumn(props: any) {
  const [selectedTab, setSelectedTab] = useState("");
  function handleClick(component: string) {
    setSelectedTab(component);
  }

  const { setRice } = props;

  function switchTab(component: string) {
    switch (component) {
      case "shop":
        return ShopTab();
      case "buildings":
        return "buildings";
      case "workers":
        return <WorkersTab setRice={setRice} />;
      default:
        break;
    }
    return component;
  }

  return (
    <div className="column">
      <div className="tab">
        <button className="tablinks" onClick={() => handleClick("shop")}>
          Shop
        </button>
        <button className="tablinks" onClick={() => handleClick("buildings")}>
          Buildings
        </button>
        <button className="tablinks" onClick={() => handleClick("workers")}>
          Workers
        </button>
      </div>
      {switchTab(selectedTab)}
    </div>
  );
}
export default MiddleColumn;
