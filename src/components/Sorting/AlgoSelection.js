import { useContext } from "react";
import { SortingContext } from "../../context/SortingContext";
import { capitalizeFirstLetter } from "../../utilis/capitalizeFirstLetter";

const ALGO_ON2 = ["insertion", "selection", "bubble"];
const ALGO_ONLOGN = ["quick", "merge", "shell"];
const ALGO_ONK = ["radix"];

export function AlgoSelection() {
  const { algo, setAlgo, arrayConfig } = useContext(SortingContext);
  const changeAlgo = (ev) => {
    setAlgo(ev.target.value);
  };

  const getButtons = (algorithms) => {
    return algorithms.map((a) => (
      <div className="algo-selection-option" key={a}>
        <input
          id={a + "-radio"}
          name="algo"
          type="radio"
          value={a}
          onChange={changeAlgo}
          checked={algo === a}
        ></input>
        <label
          htmlFor={a + "-radio"}
          className={algo === a ? "prime-button" : "sec-button"}
        >
          {capitalizeFirstLetter(a)}
        </label>
      </div>
    ));
  };

  return (
    <div className="algo-selection">
      <p>Choose algorithm:</p>
      <div className="algo-selection-group">
        <p>O(n^2)</p>
        {arrayConfig.dataSize <= 100 ? (
          getButtons(ALGO_ON2)
        ) : (
          <p className="p-info">
            Not available
            <br />
            Too long visualization time
          </p>
        )}
      </div>
      <div className="algo-selection-group">
        <p>O(nLog(n))</p>
        {getButtons(ALGO_ONLOGN)}
      </div>
      <div className="algo-selection-group">
        <p>O(nk)</p>
        {getButtons(ALGO_ONK)}
      </div>
    </div>
  );
}
