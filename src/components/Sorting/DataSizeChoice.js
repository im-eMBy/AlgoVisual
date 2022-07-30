import { useContext, useMemo } from "react";
import { SortingContext } from "../../context/SortingContext";

export function DataSizeChoice() {
  const { arrayConfig, setDataSize, algo, setAlgo } =
    useContext(SortingContext);
  const dataSizes = useMemo(
    () => [
      { size: 25, label: "s" },
      { size: 50, label: "m" },
      { size: 100, label: "l" },
      { size: 250, label: "xl" },
      { size: 500, label: "xxl" },
    ],
    []
  );

  const changeDataSize = async (ev) => {
    const size = Number(ev.target.value);
    setDataSize(size);
    if (size > 100 && ["bubble", "insertion", "selection"].includes(algo))
      setAlgo("quick");
  };

  return (
    <div className="data-size-choice">
      <p>Data size:</p>
      {dataSizes.map((s, i) => (
        <div key={i}>
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
