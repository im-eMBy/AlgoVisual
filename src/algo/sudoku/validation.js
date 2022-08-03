export function sudokuInputValidation(board) {
  const wrongFields = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) continue;
      const number = board[i][j];
      for (let y = 0; y < board.length; y++) {
        if (y === i) continue;
        if (board[y][j] === number) {
          wrongFields.push([y, j]);
        }
      }
      for (let x = 0; x < board[i].length; x++) {
        if (x === j) continue;
        if (board[i][x] === number) {
          wrongFields.push([i, x]);
        }
      }
      const squareY = i - (i % 3);
      const squareX = j - (j % 3);
      for (let y = squareY; y <= squareY + 2; y++) {
        for (let x = squareX; x <= squareX + 2; x++) {
          if (y === i && x === j) continue;
          if (board[y][x] === number) {
            wrongFields.push([y, x]);
          }
        }
      }
    }
  }
  return wrongFields;
}
