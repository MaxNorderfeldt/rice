import { useState } from "react";
import ShopTab from "./shopTab";
import "../styling/columns.css";
import Workers from "../containers/workers";
import Buildings from "../containers/buildings";

function MiddleColumn(props: any) {
  const [selectedTab, setSelectedTab] = useState("");
  function handleClick(component: string) {
    setSelectedTab(component);
  }

  function switchTab(component: string) {
    switch (component) {
      case "shop":
        return ShopTab();
      case "buildings":
        return <Buildings />;
      case "workers":
        return <Workers />;
      default:
        break;
    }
    return component;
  }

  return (
    <div className="column infrastructure">
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
