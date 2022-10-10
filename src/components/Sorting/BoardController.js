import { useContext, useEffect, useState, useCallback, useRef } from "react";
import { SortingContext } from "../../context/SortingContext";
import { SortingInterface } from "../../algo/sorting/SortingInterface";
import { Board } from "./Board";

export function BoardController() {
  const { algo, isSorting, setIsSorting, arrayConfig } =
    useContext(SortingContext);
  const [array, setArray] = useState([]);
  const [dataSize, setDataSize] = useState(0);
  const [range, setRange] = useState(0);
  const [markedIdx, setMarkedIdx] = useState([]);
  const [sortingInterface, setSortingInterface] = useState();
  const isSortingLocal = useRef(false);

  const startSorting = useCallback(async () => {
    const newSortingInterface = new SortingInterface(
      [...arrayConfig.initialArray],
      setArray,
      setMarkedIdx,
      1000 / dataSize,
      algo
    );
    setSortingInterface(newSortingInterface);
    isSortingLocal.current = true;
    await newSortingInterface.start();
    isSortingLocal.current = false;
    setIsSorting(false);
    setSortingInterface(null);
  }, [algo, arrayConfig.initialArray, dataSize, setIsSorting]);

  const stopSorting = useCallback(() => {
    sortingInterface.stop();
  }, [sortingInterface]);

  //update local array, when config in context changes
  useEffect(() => {
    setArray(arrayConfig.initialArray);
    setDataSize(arrayConfig.dataSize);
    setRange(arrayConfig.range);
  }, [arrayConfig]);
  //start sorting / stop sorting, based on context 'isSorting' and local 'isSortingLocal' variables
  useEffect(() => {
    if (!isSorting && isSortingLocal.current) {
      stopSorting();
      return;
    }
    if (isSorting && !isSortingLocal.current) {
      startSorting();
    }
  }, [isSorting, startSorting, stopSorting]);

  return (
    <Board
      array={array}
      markedIdx={markedIdx}
      dataSize={dataSize}
      range={range}
    />
  );
}
