import { stopExecution } from "../../utilis/stopExecution";
import { copy2dArray } from "../../utilis/copy2dArray";

export async function solveSudokuVisual(
  board,
  solvedBoard,
  setBoard,
  addMarked,
  shouldRun,
  delay
) {
  const { y, x } = getFirstEmptyPosition(board);
  if (y === -1 && x === -1) return board;
  const possibleNumbers = getPossibleNumbers(y, x, board);
  if (possibleNumbers.length === 0) {
    return false;
  }
  for (const posNum of possibleNumbers) {
    const copyBoard = copy2dArray(board);
    copyBoard[y][x] = posNum;
    //visualize
    if (!shouldRun.current) return;
    setBoard(copyBoard);
    addMarked({
      y: y,
      x: x,
      color: solvedBoard[y][x] === posNum ? "#0A8754AA" : "#DB2B39AA",
    });
    await stopExecution(delay);
    const newBoard = await solveSudokuVisual(
      copyBoard,
      solvedBoard,
      setBoard,
      addMarked,
      shouldRun,
      delay
    );
    if (newBoard !== false) return newBoard;
  }
  return false;
}
export function solveSudoku(board) {
  const solutions = [];
  solveSudokuRecursion(board, solutions);
  return solutions;
}
function solveSudokuRecursion(board, solutionsArr, complexity = { count: 0 }) {
  if (complexity.count > 999999) return false;
  if (solutionsArr.length > 9) return false;
  const { y, x } = getFirstEmptyPosition(board);
  if (y === -1 && x === -1) {
    solutionsArr.push(board);
    return false;
  }
  const possibleNumbers = getPossibleNumbers(y, x, board);
  if (possibleNumbers.length === 0) {
    return false;
  }
  for (const posNum of possibleNumbers) {
    complexity.count++;
    const copyBoard = copy2dArray(board);
    copyBoard[y][x] = posNum;
    const newBoard = solveSudokuRecursion(copyBoard, solutionsArr, complexity);
    if (newBoard !== false) return newBoard;
  }
  return false;
}
function getFirstEmptyPosition(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        return {
          y: i,
          x: j,
        };
      }
    }
  }
  return {
    y: -1,
    x: -1,
  };
}
function getPossibleNumbers(y, x, board) {
  let possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //remove values that in the same row
  for (let i = 0; i < 9; i++) {
    if (board[y][i] !== 0)
      possibleNumbers = removeFromArray(board[y][i], possibleNumbers);
  }
  //remove values that in the same column
  for (let i = 0; i < 9; i++) {
    if (board[i][x] !== 0)
      possibleNumbers = removeFromArray(board[i][x], possibleNumbers);
  }
  //remove values that in the same square
  const squareY = y - (y % 3);
  const squareX = x - (x % 3);
  for (let i = squareY; i <= squareY + 2; i++) {
    for (let j = squareX; j <= squareX + 2; j++) {
      if (board[i][j] !== 0)
        possibleNumbers = removeFromArray(board[i][j], possibleNumbers);
    }
  }
  return possibleNumbers;
}
function removeFromArray(value, array) {
  return array.filter((el) => el !== value);
}
