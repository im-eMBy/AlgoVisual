//componenet for single element for data visualization

export function Element({ value, marked }) {
  const height = Math.ceil(value / 25);
  const style = {
    height: height,
    backgroundColor: marked ? "red" : undefined,
  };
  return <div className="visual-element" style={style}></div>;
}
