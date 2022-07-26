import { useContext, useState, useRef } from "react";
import { radixSort } from "../../algo/radixSort";
import { insertionSort } from "../../algo/insertionSort";
import { selectionSort } from "../../algo/selectionSort";
import { quickSort } from "../../algo/quickSort";
import { AppContext } from "../../context/AppContext";
import { getRandomArray } from "../../utilis/getRandomArray";

export function Buttons() {
  const [running, setRunning] = useState(false);
  const [algo, setAlgo] = useState("insertion");
  const abortController = useRef(false);
  const ctx = useContext(AppContext);
  const delay = 2500 / ctx.dataSize;

  const changeAlgo = (ev) => {
    setAlgo(ev.target.value);
  };
  const generateData = () => {
    ctx.setArray(getRandomArray(1, 5000, 200));
  };
  const startSorting = async () => {
    abortController.current = false;
    setRunning(true);
    let functionToRun;
    switch (algo) {
      case "insertion":
        functionToRun = insertionSort;
        break;
      case "radix":
        functionToRun = radixSort;
        break;
      case "selection":
        functionToRun = selectionSort;
        break;
      case "quick":
        functionToRun = quickSort;
        break;
      default:
        break;
    }
    await functionToRun(
      ctx.array,
      ctx.setArray,
      ctx.setMarkedIdx,
      abortController
    );
    setRunning(false);
  };
  const stopSorting = () => {
    abortController.current = true;
  };

  return (
    <div>
      <div className="sort-info">
        <p>{running ? "Sorting..." : null}</p>
      </div>
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
      <div className="sort-controlls">
        <button onClick={startSorting}>Start</button>
        <button onClick={stopSorting}>Stop</button>
        <button onClick={generateData}>Generate Data</button>
      </div>
    </div>
  );
}
