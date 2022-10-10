import { useContext } from "react";
import { SudokuContext } from "../../context/SudokuContext";
import { BoardUi } from "./BoardUi";
import { InputBoard } from "./InputBoard";
import { VisualizationBoard } from "./VisualizationBoard";

export function Boards() {
  const { initialBoard, solvedBoard } = useContext(SudokuContext);

  if (initialBoard === null)
    return (
      <div className="sudoku__boards">
        <InputBoard />
      </div>
    );
  return (
    <div className="sudoku__boards">
      <div className="sudoku__board-container">
        <p>Initial:</p>
        <BoardUi board={initialBoard} isEditable={false} />
      </div>
      {solvedBoard !== null ? (
        <div className="sudoku__board-container">
          <p>Solved:</p>
          <BoardUi board={solvedBoard} isEditable={false} />
        </div>
      ) : null}
      <VisualizationBoard />
    </div>
  );
}
