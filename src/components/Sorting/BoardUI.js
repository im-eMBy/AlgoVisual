import { Element } from "./Element";

export function BoardUI({ array, markedIdx, dataSize }) {
  return (
    <div className="board">
      {array.map((el, i) => (
        <Element
          value={el}
          marked={markedIdx && markedIdx.includes(i) ? true : false}
          width={500 / dataSize}
          key={i}
        ></Element>
      ))}
    </div>
  );
}
