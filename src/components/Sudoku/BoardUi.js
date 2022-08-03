import { BoardField } from "./BoardField";

export function BoardUi({ board, markedFields, isEditable, editField }) {
  const renderBoard = () => {
    return board.map((row, i) => {
      return (
        <tr key={i}>
          {row.map((nr, j) => {
            const marked = markedFields
              ? isMarkedField(i, j, markedFields)
              : false;
            return (
              <BoardField
                isEditable={isEditable}
                key={i + "" + j}
                y={i}
                x={j}
                value={nr}
                changeValue={editField}
                markedColor={marked}
              />
            );
          })}
        </tr>
      );
    });
  };

  return (
    <table className="sudoku-board">
      <tbody>{renderBoard()}</tbody>
    </table>
  );
}

function isMarkedField(i, j, markedFields) {
  let marked = false;
  markedFields.forEach((field) => {
    const { y, x, color } = field;
    if (y === i && x === j) marked = color;
  });
  return marked;
}
