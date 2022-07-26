//componenet for single element for data visualization

export function Element({ value, marked, width }) {
  const height = Math.ceil(value / 50);
  const style = {
    width: width,
    height: height,
    backgroundColor: marked ? "red" : undefined,
  };
  return <div className="visual-element" style={style}></div>;
}
