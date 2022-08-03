import React, { useMemo, useState, useEffect } from "react";
import { solveSudoku } from "../algo/sudoku/solver";

export const SudokuContext = React.createContext();

export function SudokuContextProvider({ children }) {
  const [initialBoard, setInitialBoard] = useState(null);
  const [solvedBoard, setSolvedBoard] = useState(null);
  const [solutionsCounter, setSolutionsCounter] = useState(0);
  const [isVisual, setIsVisual] = useState(false);

  useEffect(() => {
    if (initialBoard !== null) {
      const solutions = solveSudoku(initialBoard);
      setSolvedBoard(solutions[0]);
      setSolutionsCounter(solutions.length);
    }
  }, [initialBoard]);

  const ctx = useMemo(() => {
    return {
      initialBoard,
      setInitialBoard,
      solvedBoard,
      setSolvedBoard,
      solutionsCounter,
      isVisual,
      setIsVisual,
    };
  }, [initialBoard, solvedBoard, solutionsCounter, isVisual]);

  return (
    <SudokuContext.Provider value={ctx}>{children}</SudokuContext.Provider>
  );
}
