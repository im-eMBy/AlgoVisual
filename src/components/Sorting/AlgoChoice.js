import { useContext } from "react";
import { SortingContext } from "../../context/SortingContext";

export function AlgoChoice() {
  const { algo, setAlgo } = useContext(SortingContext);
  const changeAlgo = (ev) => {
    setAlgo(ev.target.value);
  };

  return (
    <div className="algo-selection">
      <div className="algo-selection-row">
        <p>O(N^2)</p>
        <input
          id="insertion-radio"
          name="algo"
          type="radio"
          value="insertion"
          onChange={changeAlgo}
          checked={algo === "insertion"}
        ></input>
        <label htmlFor="insertion-radio">Insertion</label>
        <input
          id="selection-radio"
          name="algo"
          type="radio"
          value="selection"
          onChange={changeAlgo}
          checked={algo === "selection"}
        ></input>
        <label htmlFor="selection-radio">Selection</label>
      </div>
      <div className="algo-selection-row">
        <p>O(NLog(N))</p>
        <input
          id="quick-radio"
          name="algo"
          type="radio"
          value="quick"
          onChange={changeAlgo}
          checked={algo === "quick"}
        ></input>
        <label htmlFor="quick-radio">Quick</label>
      </div>
      <div className="algo-selection-row">
        <p>O(N)</p>
        <input
          id="radix-radio"
          name="algo"
          type="radio"
          value="radix"
          onChange={changeAlgo}
          checked={algo === "radix"}
        ></input>
        <label htmlFor="radix-radio">Radix</label>
      </div>
    </div>
  );
}
