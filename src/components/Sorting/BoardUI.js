import { Element } from "./Element";

export function BoardUI({ array, markedIdx, dataSize, range }) {
  return (
    <div className="sorting__board">
      {array.map((el, i) => (
        <Element
          height={Math.ceil((el * 200) / range)}
          marked={markedIdx && markedIdx.includes(i) ? true : false}
          width={500 / dataSize}
          key={i}
        ></Element>
      ))}
    </div>
  );
}
