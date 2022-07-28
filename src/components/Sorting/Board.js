import { useContext, useEffect, useState, useRef } from "react";
import { SortingContext } from "../../context/SortingContext";
import { getSortingFunc } from "../../utilis/getSortingFunc";

import { Element } from "./Element";

export function Board() {
  const { algo, dataSize, isSorting, setIsSorting, initialArray } =
    useContext(SortingContext);
  const abortController = useRef(false);
  const [array, setArray] = useState(initialArray);
  const [markedIdx, setMarkedIdx] = useState([]);

  useEffect(() => {
    setArray(initialArray);
  }, [initialArray]);

  useEffect(() => {
    if (!isSorting) {
      stopSorting();
      return;
    }
    if (isSorting) {
      console.log("started");
      startSorting();
    }
  }, [isSorting]);

  const startSorting = async () => {
    abortController.current = false;
    const sortingFunction = getSortingFunc(algo);
    const delay = 1000 / dataSize;
    console.time();
    await sortingFunction(
      array,
      setArray,
      setMarkedIdx,
      abortController,
      delay
    );
    console.timeEnd();
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
        width={500 / dataSize}
        key={i}
      ></Element>
    ));
  };
  return <div className="board">{getElements()}</div>;
}
