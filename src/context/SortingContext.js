import React, { useMemo, useState } from "react";
import { getRandomArray } from "../utilis/getRandomArray";

export const SortingContext = React.createContext();

export function SortingContextProvider({ children }) {
  const [isSorting, setIsSorting] = useState(false);
  const [algo, setAlgo] = useState("insertion");
  const [dataSize, setDataSize] = useState(25);
  const [initialArray, setInitialArray] = useState(
    getRandomArray(1, 8000, dataSize)
  );

  const ctx = useMemo(() => {
    const generateData = () => {
      setInitialArray(getRandomArray(1, 8000, dataSize));
    };
    return {
      isSorting,
      setIsSorting,
      algo,
      setAlgo,
      dataSize,
      setDataSize,
      initialArray,
      generateData,
    };
  }, [algo, dataSize, isSorting, initialArray]);
  return (
    <SortingContext.Provider value={ctx}>{children}</SortingContext.Provider>
  );
}
