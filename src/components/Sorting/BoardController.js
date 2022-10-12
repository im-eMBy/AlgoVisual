import { useContext, useEffect, useState } from "react";
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

  //update local array, when config in context changes
  useEffect(() => {
    setArray(arrayConfig.initialArray);
    setDataSize(arrayConfig.dataSize);
    setRange(arrayConfig.range);
  }, [arrayConfig]);
  //start sorting when 'isSorting' in context change
  useEffect(() => {
    if (!isSorting) return;
    const startSorting = async () => {
      const newSortingInterface = new SortingInterface(
        [...arrayConfig.initialArray],
        setArray,
        setMarkedIdx,
        1000 / dataSize,
        algo
      );
      setSortingInterface(newSortingInterface);
      await newSortingInterface.start();
      setIsSorting(false);
    };
    startSorting();
  }, [algo, arrayConfig.initialArray, dataSize, isSorting, setIsSorting]);
  //stop sorting
  useEffect(() => {
    if (isSorting) return;
    sortingInterface?.stop();
  }, [isSorting, sortingInterface]);

  return (
    <Board
      array={array}
      markedIdx={markedIdx}
      dataSize={dataSize}
      range={range}
    />
  );
}
