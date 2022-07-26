import React, { useState } from "react";
import { getRandomArray } from "../utilis/getRandomArray";

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [dataSize, setDataSize] = useState(25);
  const [array, setArray] = useState(getRandomArray(1, 5000, dataSize));
  const [markedIdx, setMarkedIdx] = useState([]);
  return (
    <AppContext.Provider
      value={{
        dataSize: dataSize,
        setDataSize: setDataSize,
        array: array,
        setArray: setArray,
        markedIdx: markedIdx,
        setMarkedIdx: setMarkedIdx,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
