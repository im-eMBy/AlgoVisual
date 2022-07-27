import React, { useEffect, useMemo, useState } from "react";
import { getRandomArray } from "../utilis/getRandomArray";

export const SortingContext = React.createContext();

export function SortingContextProvider({ children }) {
  const [isSorting, setIsSorting] = useState(false);
  const [algo, setAlgo] = useState("insertion");
  const [dataSize, setDataSize] = useState(25);
  const [initialArray, setInitialArray] = useState(
    getRandomArray(1, 9999, dataSize)
  );

  useEffect(() => {
    setInitialArray(getRandomArray(1, 9999, dataSize));
  }, [dataSize]);

  const ctx = useMemo(() => {
    const generateData = () => {
      setInitialArray(getRandomArray(1, 9999, dataSize));
    };
    return {
      isSorting,
      setIsSorting,
      algo,
      setAlgo,
      dataSize,
      setDataSize,
      initialArray,
      setInitialArray,
      generateData,
    };
  }, [algo, dataSize, isSorting, initialArray]);

  return (
    <SortingContext.Provider value={ctx}>{children}</SortingContext.Provider>
  );
}