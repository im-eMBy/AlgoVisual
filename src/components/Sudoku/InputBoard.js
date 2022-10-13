import { useContext, useState } from "react";
import { solveSudoku } from "../../algo/sudoku/solver";
import { sudokuInputValidation } from "../../algo/sudoku/validation";
import { SudokuContext } from "../../context/SudokuContext";
import { copy2dArray } from "../../utilis/copy2dArray";
import { BoardUi } from "./BoardUi";

const ERROR_COLOR = "#DB2B39AA";
const EMPTY_BOARD = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const SAMPLE_BOARD = [
  [0, 0, 4, 7, 1, 0, 0, 0, 0],
  [0, 7, 2, 8, 0, 6, 5, 0, 0],
  [0, 0, 0, 0, 0, 5, 0, 0, 7],
  [0, 1, 0, 6, 9, 0, 2, 0, 0],
  [3, 9, 0, 0, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 8, 5],
  [0, 0, 1, 2, 3, 0, 8, 0, 4],
  [0, 0, 3, 5, 0, 4, 0, 0, 2],
  [2, 4, 0, 9, 0, 0, 0, 0, 0],
];

export function InputBoard() {
  const { setInitialBoard, setSolutionsCounter, setSolvedBoard } =
    useContext(SudokuContext);
  const [markedFields, setMarkedFields] = useState([]);
  const [board, setBoard] = useState(copy2dArray(EMPTY_BOARD));
  const [warnMsg, setWarnMsg] = useState(null);

  const solve = () => {
    if (sudokuInputValidation(board).length > 0) {
      setWarnMsg(
        "The sudoku board did not pass validation, please correct the marked errors"
      );
      return;
    }
    const solutions = solveSudoku(board);
    if (solutions.length === 0) {
      setWarnMsg(
        "Sorry, entered sudoku has 0 solutions or is too hard to solve, we recommend providing at least 19 clues"
      );
      return;
    }
    setInitialBoard(board);
    setSolvedBoard(solutions[0]);
    setSolutionsCounter(solutions.length);
  };
  const resetBoard = () => {
    setWarnMsg(null);
    setMarkedFields([]);
    setBoard(copy2dArray(EMPTY_BOARD));
  };
  const setSampleBoard = () => {
    setBoard(copy2dArray(SAMPLE_BOARD));
  };
  const editField = (y, x, value) => {
    setBoard((prev) => {
      const newArr = [...prev];
      newArr[y][x] = value;
      const markedWrong = sudokuInputValidation(board).map((el) => {
        const [y, x] = el;
        return { color: ERROR_COLOR, y: y, x: x };
      });
      setMarkedFields(markedWrong);
      return newArr;
    });
  };

  return (
    <div className="sudoku__board-container">
      <p className="sudoku__board-title">Input board:</p>
      <BoardUi
        board={board}
        isEditable={true}
        editField={editField}
        markedFields={markedFields}
      />
      <p className="sudoku__msg">{warnMsg}</p>
      <div className="sudoku__input-buttons">
        <button className="prime-button" onClick={solve}>
          Solve
        </button>
        <button className="sec-button" onClick={setSampleBoard}>
          Sample
        </button>
        <button className="sec-button" onClick={resetBoard}>
          Clear
        </button>
      </div>
    </div>
  );
}
