//componenet for single element for data visualization

export function Element({ height, marked, width }) {
  const style = {
    height: height,
    width: width,
    backgroundColor: marked ? "#FB8B24" : undefined,
  };
  return <div className="sorting__visual-element" style={style}></div>;
}
