import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { solveSudokuVisual } from "../../algo/sudoku/solver";
import { SudokuContext } from "../../context/SudokuContext";
import { BoardUi } from "./BoardUi";

export function VisualizationBoard() {
  const { initialBoard, solvedBoard, isVisual, setIsVisual } =
    useContext(SudokuContext);
  const [board, setBoard] = useState(initialBoard);
  const [markedFields, setMarkedFields] = useState([]);
  const isRunning = useRef(false);

  const startVisual = useCallback(async () => {
    const addMarked = (marked) => setMarkedFields((prev) => [...prev, marked]);
    isRunning.current = true;
    setMarkedFields([]);
    await solveSudokuVisual(
      initialBoard,
      solvedBoard,
      setBoard,
      addMarked,
      isRunning,
      100
    );
    setIsVisual(false);
    isRunning.current = false;
  }, [initialBoard, setIsVisual, solvedBoard]);
  const stopVisual = useCallback(() => {
    isRunning.current = false;
  }, []);

  useEffect(() => {
    setBoard(initialBoard);
  }, [initialBoard]);
  useEffect(() => {
    if (isVisual && !isRunning.current) {
      startVisual();
    }
    if (!isVisual && isRunning.current) {
      stopVisual();
    }
  }, [isVisual, startVisual, stopVisual]);

  return (
    <div className="board-container">
      <p>Visualization:</p>
      <BoardUi
        board={board}
        isEditable={false}
        markedFields={markedFields}
      ></BoardUi>
    </div>
  );
}
