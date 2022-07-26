import { useContext, useEffect, useState, useRef } from "react";
import { SortingContext } from "../../context/SortingContext";
import { radixSort } from "../../algo/radixSort";
import { insertionSort } from "../../algo/insertionSort";
import { selectionSort } from "../../algo/selectionSort";
import { quickSort } from "../../algo/quickSort";
import { Element } from "./Element";

export function Board() {
  const { algo, dataSize, isSorting, setIsSorting, initialArray } =
    useContext(SortingContext);
  const abortController = useRef(false);
  const [array, setArray] = useState(initialArray);
  const [markedIdx, setMarkedIdx] = useState([]);

  useEffect(() => {
    if (!isSorting) {
      stopSorting();
      return;
    }
    if (isSorting) startSorting();
  }, [isSorting]);

  useEffect(() => {
    setArray(initialArray);
  }, [initialArray]);

  const delay = 1250 / dataSize;

  const startSorting = async () => {
    abortController.current = false;
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
    await functionToRun(array, setArray, setMarkedIdx, abortController, delay);
    setIsSorting(false);
  };
  const stopSorting = () => {
    abortController.current = true;
  };

  const getElements = () => {
    return array.map((el, i) => (
      <Element
        value={el}
        marked={markedIdx && markedIdx.includes(i) ? true : false}
        width={250 / dataSize}
        key={i}
      ></Element>
    ));
  };
  return <div className="board">{getElements()}</div>;
}
