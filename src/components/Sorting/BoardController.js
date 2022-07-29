import { useContext, useEffect, useState, useRef, useCallback } from "react";
import { SortingContext } from "../../context/SortingContext";
import { getSortingFunc } from "../../utilis/getSortingFunc";
import { BoardUI } from "./BoardUI";

export function BoardController() {
  const { algo, dataSize, isSorting, setIsSorting, initialArray } =
    useContext(SortingContext);
  const isRunning = useRef(false);
  const [array, setArray] = useState(initialArray);
  const [markedIdx, setMarkedIdx] = useState([]);

  const startSorting = useCallback(async () => {
    isRunning.current = true;
    const sortingFunction = getSortingFunc(algo);
    const delay = 1000 / dataSize;
    console.time();
    await sortingFunction(array, setArray, setMarkedIdx, isRunning, delay);
    console.timeEnd();
    setIsSorting(false);
    isRunning.current = false;
  }, [algo, array, dataSize, setIsSorting]);

  const stopSorting = useCallback(() => {
    isRunning.current = false;
  }, []);

  useEffect(() => {
    setArray(initialArray);
  }, [initialArray]);

  useEffect(() => {
    if (!isSorting && isRunning.current) {
      console.log("stoped");
      stopSorting();
      return;
    }
    if (isSorting && !isRunning.current) {
      console.log("started");
      startSorting();
    }
  }, [isSorting, startSorting, stopSorting]);

  return (
    <BoardUI array={array} markedIdx={markedIdx} dataSize={dataSize}></BoardUI>
  );
}
