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
      <AlgoChoice />
      <DataSizeChoice />
      <div className="sort-controlls">
        <button onClick={startSorting}>Start</button>
        <button onClick={stopSorting}>Stop</button>
        <button onClick={generateData}>Generate Data</button>
      </div>
    </div>
  );
}
