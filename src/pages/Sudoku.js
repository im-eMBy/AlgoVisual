import { SudokuContextProvider } from "../context/SudokuContext";
import { Boards } from "../components/Sudoku/Boards";
import { Controlls } from "../components/Sudoku/Controlls";

export function Sudoku() {
  return (
    <SudokuContextProvider>
      <Boards />
      <Controlls />
    </SudokuContextProvider>
  );
}
