//componenet for single element for data visualization

export function Element({ value, marked, width }) {
  const height = Math.ceil(value / 50) + "px";
  const style = {
    width: width,
    height: height,
    backgroundColor: marked ? "#FB8B24" : undefined,
  };
  return <div className="visual-element" style={style}></div>;
}
