export function BoardField({
  y,
  x,
  value,
  isEditable,
  changeValue,
  markedColor,
}) {
  const getValue = () => {
    return value === 0 ? "" : value;
  };
  const beforeEditValue = (ev) => {
    ev.target.value = "";
  };
  const editValue = (ev) => {
    let val = Number(ev.target.value);
    if (isNaN(val)) return;
    changeValue(y, x, val);
  };
  return (
    <th style={markedColor ? { backgroundColor: markedColor } : null}>
      {isEditable ? (
        <input
          type="number"
          value={getValue()}
          onBeforeInput={beforeEditValue}
          onChange={editValue}
        />
      ) : (
        getValue()
      )}
    </th>
  );
}
