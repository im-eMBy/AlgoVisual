import { useContext } from "react";
import { SortingContext } from "../../context/SortingContext";

export function DataSizeChoice() {
  const { dataSize, setDataSize } = useContext(SortingContext);

  const changeDataSize = async (ev) => {
    setDataSize(Number(ev.target.value));
  };

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
      <label
        htmlFor="s-data-radio"
        className={dataSize === 25 ? "prime-button" : "sec-button"}
      >
        S (n = 25)
      </label>
      <input
        id="m-data-radio"
        name="data-size"
        type="radio"
        value={100}
        onChange={changeDataSize}
        checked={dataSize === 100}
      ></input>
      <label
        htmlFor="m-data-radio"
        className={dataSize === 100 ? "prime-button" : "sec-button"}
      >
        M (n = 100)
      </label>
      <input
        id="l-data-radio"
        name="data-size"
        type="radio"
        value={250}
        onChange={changeDataSize}
        checked={dataSize === 250}
      ></input>
      <label
        htmlFor="l-data-radio"
        className={dataSize === 250 ? "prime-button" : "sec-button"}
      >
        L (n = 250)
      </label>
      <input
        id="xl-data-radio"
        name="data-size"
        type="radio"
        value={500}
        onChange={changeDataSize}
        checked={dataSize === 500}
      ></input>
      <label
        htmlFor="xl-data-radio"
        className={dataSize === 500 ? "prime-button" : "sec-button"}
      >
        XL (n = 500)
      </label>
    </div>
  );
}
