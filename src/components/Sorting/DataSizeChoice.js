import { useContext } from "react";
import { SortingContext } from "../../context/SortingContext";

export function DataSizeChoice() {
  const { dataSize, setDataSize } = useContext(SortingContext);

  const changeDataSize = (ev) => {
    setDataSize(Number(ev.target.value));
  };
  console.log("DataSizeChoice - rendered");
  return (
    <div className="data-size-choice">
      <input
        id="s-data-radio"
        name="data-size"
        type="radio"
        value={25}
        onChange={changeDataSize}
        checked={dataSize === 25}
      ></input>
      <label htmlFor="s-data-radio">Small</label>
      <input
        id="m-data-radio"
        name="data-size"
        type="radio"
        value={100}
        onChange={changeDataSize}
        checked={dataSize === 100}
      ></input>
      <label htmlFor="m-data-radio">Medium</label>
      <input
        id="l-data-radio"
        name="data-size"
        type="radio"
        value={250}
        onChange={changeDataSize}
        checked={dataSize === 250}
      ></input>
      <label htmlFor="l-data-radio">Large</label>
    </div>
  );
}
