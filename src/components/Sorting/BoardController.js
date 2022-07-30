import { useContext, useEffect, useState, useRef, useCallback } from "react";
import { SortingContext } from "../../context/SortingContext";
import { getSortingFunc } from "../../utilis/getSortingFunc";
import { BoardUI } from "./BoardUI";

export function BoardController() {
  const { algo, isSorting, setIsSorting, arrayConfig } =
    useContext(SortingContext);
  const isRunning = useRef(false);
  const [array, setArray] = useState([]);
  const [dataSize, setDataSize] = useState(0);
  const [range, setRange] = useState(0);
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
    setArray(arrayConfig.initialArray);
    setDataSize(arrayConfig.dataSize);
    setRange(arrayConfig.range);
  }, [arrayConfig]);

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
    <BoardUI
      array={array}
      markedIdx={markedIdx}
      dataSize={dataSize}
      range={range}
    />
  );
}
