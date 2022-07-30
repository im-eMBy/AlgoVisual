import React, { useMemo, useState } from "react";
import { getRandomArray } from "../utilis/getRandomArray";

export const SortingContext = React.createContext();

export function SortingContextProvider({ children }) {
  const [isSorting, setIsSorting] = useState(false);
  const [algo, setAlgo] = useState("insertion");
  const [arrayConfig, setArrayConfig] = useState({
    dataSize: 25,
    range: 999,
    initialArray: getRandomArray(1, 999, 25),
  });

  const ctx = useMemo(() => {
    const generateData = () => {
      setArrayConfig((prev) => ({
        dataSize: prev.dataSize,
        range: prev.range,
        initialArray: getRandomArray(1, prev.range, prev.dataSize),
      }));
    };
    const setRange = (value) => {
      setArrayConfig((prev) => ({
        dataSize: prev.dataSize,
        range: value,
        initialArray: getRandomArray(1, value, prev.dataSize),
      }));
    };
    const setDataSize = (value) => {
      setArrayConfig((prev) => ({
        dataSize: value,
        range: prev.range,
        initialArray: getRandomArray(1, prev.range, value),
      }));
    };
    return {
      arrayConfig,
      setArrayConfig,
      isSorting,
      setIsSorting,
      algo,
      setAlgo,
      generateData,
      setRange,
      setDataSize,
    };
  }, [isSorting, algo, arrayConfig]);

  return (
    <SortingContext.Provider value={ctx}>{children}</SortingContext.Provider>
  );
}
