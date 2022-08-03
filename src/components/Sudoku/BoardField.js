export function BoardField({
  y,
  x,
  value,
  isEditable,
  changeValue,
  markedColor,
}) {
  const editValue = (ev) => {
    ev.preventDefault();
    let val = Number(ev.data);
    if (isNaN(val)) return;
    changeValue(y, x, val);
  };
  return (
    <th
      style={markedColor ? { backgroundColor: markedColor } : null}
      contentEditable={isEditable}
      onBeforeInput={editValue}
      suppressContentEditableWarning={isEditable}
    >
      {value === 0 ? "" : value}
    </th>
  );
}
