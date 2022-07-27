import { useContext, useMemo } from "react";
import { SortingContext } from "../../context/SortingContext";
import { capitalizeFirstLetter } from "../../utilis/capitalizeFirstLetter";

export function AlgoChoice() {
  const algorithmsOn2 = useMemo(() => ["insertion", "selection"], []);
  const algorithmsOnLogn = useMemo(() => ["quick"], []);
  const { algo, setAlgo, dataSize } = useContext(SortingContext);
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
      <div className="algo-selection-group">
        <p>O(N^2)</p>
        {dataSize !== 500 ? (
          getButtons(algorithmsOn2)
        ) : (
          <p className="p-info">
            Not available
            <br />
            aprox. visualization time: ~8 minutes
          </p>
        )}
      </div>
      <div className="algo-selection-group">
        <p>O(NLog(N))</p>
        {getButtons(algorithmsOnLogn)}
      </div>
      <div className="algo-selection-group">
        <p>O(N)</p>
        <input
          id="radix-radio"
          name="algo"
          type="radio"
          value="radix"
          onChange={changeAlgo}
          checked={algo === "radix"}
        ></input>
        <label
          htmlFor="radix-radio"
          className={algo === "radix" ? "prime-button" : "sec-button"}
        >
          Radix
        </label>
      </div>
    </div>
  );
}
