import { useContext } from "react";
import { SortingContext } from "../../context/SortingContext";
import { AlgoSelection } from "./AlgoSelection";
import { DataSizeSelection } from "./DataSizeSelection";
import { RangeSelection } from "./RangeSelection";

export function Buttons() {
  const { isSorting, setIsSorting, generateData } = useContext(SortingContext);

  const startSorting = () => {
    setIsSorting(true);
  };
  const stopSorting = () => {
    setIsSorting(false);
  };

  return (
    <div>
      <div className="sorting__controlls">
        {isSorting ? null : (
          <button className="prime-button" onClick={startSorting}>
            Start
          </button>
        )}
        {isSorting ? (
          <button className="prime-button" onClick={stopSorting}>
            Stop
          </button>
        ) : null}
        {isSorting ? null : (
          <button className="sec-button" onClick={generateData}>
            Generate Data
          </button>
        )}
      </div>
      <div
        className="sorting__config"
        style={isSorting ? { visibility: "hidden" } : null}
      >
        <AlgoSelection />
        <DataSizeSelection />
        <RangeSelection />
      </div>
    </div>
  );
}
