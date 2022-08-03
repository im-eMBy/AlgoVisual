import { useContext } from "react";
import { SudokuContext } from "../../context/SudokuContext";

export function Controlls() {
  const {
    initialBoard,
    setInitialBoard,
    setSolvedBoard,
    isVisual,
    setIsVisual,
  } = useContext(SudokuContext);

  if (initialBoard === null) return null;

  const start = () => {
    setIsVisual(true);
  };
  const stop = () => {
    setIsVisual(false);
  };
  const reset = () => {
    setInitialBoard(null);
    setSolvedBoard(null);
    setIsVisual(false);
  };

  return (
    <div className="sudoku-controls">
      {isVisual ? (
        <button className="prime-button" onClick={stop}>
          Stop
        </button>
      ) : (
        <button className="prime-button" onClick={start}>
          Visualize
        </button>
      )}
      <button className="sec-button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
