import { useContext } from "react";
import { SortingContext } from "../../context/SortingContext";
import { AlgoChoice } from "./AlgoChoice";
import { DataSizeChoice } from "./DataSizeChoice";

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
      <div className="sort-info">
        <p>{isSorting ? "Sorting..." : null}</p>
      </div>
      <div className="sort-controlls">
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
        className="sort-config"
        style={isSorting ? { visibility: "hidden" } : null}
      >
        <AlgoChoice />
        <DataSizeChoice />
      </div>
    </div>
  );
}
