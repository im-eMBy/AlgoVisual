import { useContext } from "react";
import { SortingContext } from "../../context/SortingContext";

const RANGES = [9, 99, 999, 9999, 99999];

export function RangeSelection() {
  const { arrayConfig, setRange } = useContext(SortingContext);

  const changeRange = (ev) => {
    setRange(Number(ev.target.value));
  };

  return (
    <div className="sorting__config-column">
      <p>Range:</p>
      {RANGES.map((r, i) => (
        <div key={i} className="sorting__config-option">
          <input
            id={r + "-range-radio"}
            name="range"
            type="radio"
            value={r}
            onChange={changeRange}
            checked={arrayConfig.range === r}
          ></input>
          <label
            htmlFor={r + "-range-radio"}
            className={arrayConfig.range === r ? "prime-button" : "sec-button"}
          >
            1 - {r} (k = {Math.ceil(Math.log10(r))})
          </label>
        </div>
      ))}
    </div>
  );
}
