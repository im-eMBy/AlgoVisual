import React, { useMemo, useState } from "react";

export const SudokuContext = React.createContext();

export function SudokuContextProvider({ children }) {
  const [initialBoard, setInitialBoard] = useState(null);
  const [solvedBoard, setSolvedBoard] = useState(null);
  const [solutionsCounter, setSolutionsCounter] = useState(0);
  const [isVisual, setIsVisual] = useState(false);

  const ctx = useMemo(() => {
    return {
      initialBoard,
      setInitialBoard,
      solvedBoard,
      setSolvedBoard,
      solutionsCounter,
      setSolutionsCounter,
      isVisual,
      setIsVisual,
    };
  }, [initialBoard, solvedBoard, solutionsCounter, isVisual]);

  return (
    <SudokuContext.Provider value={ctx}>{children}</SudokuContext.Provider>
  );
}
