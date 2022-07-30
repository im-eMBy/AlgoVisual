import { useContext, useMemo } from "react";
import { SortingContext } from "../../context/SortingContext";

export function RangeChoice() {
  const { arrayConfig, setRange } = useContext(SortingContext);
  const ranges = useMemo(() => [9, 99, 999, 9999, 99999], []);

  const changeRange = (ev) => {
    setRange(Number(ev.target.value));
  };

  return (
    <div className="range-choice">
      <p>Range:</p>
      {ranges.map((r, i) => (
        <div key={i}>
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
