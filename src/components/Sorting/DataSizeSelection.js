import { useContext } from "react";
import { SortingContext } from "../../context/SortingContext";

const DATA_SIZES = [
  { size: 25, label: "s" },
  { size: 50, label: "m" },
  { size: 100, label: "l" },
  { size: 250, label: "xl" },
  { size: 500, label: "xxl" },
];

export function DataSizeSelection() {
  const { arrayConfig, setDataSize, algo, setAlgo } =
    useContext(SortingContext);

  const changeDataSize = (ev) => {
    const size = Number(ev.target.value);
    setDataSize(size);
    if (size > 100 && ["bubble", "insertion", "selection"].includes(algo))
      setAlgo("quick");
  };

  return (
    <div className="sorting__config-column">
      <p>Data size:</p>
      {DATA_SIZES.map((s, i) => (
        <div key={i} className="sorting__config-option">
          <input
            id={s.label + "-data-radio"}
            name="data-size"
            type="radio"
            value={s.size}
            onChange={changeDataSize}
            checked={arrayConfig.dataSize === s.size}
          ></input>
          <label
            htmlFor={s.label + "-data-radio"}
            className={
              arrayConfig.dataSize === s.size ? "prime-button" : "sec-button"
            }
          >
            {s.label.toUpperCase()} (n = {s.size})
          </label>
        </div>
      ))}
    </div>
  );
}
