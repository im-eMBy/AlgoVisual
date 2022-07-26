import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Element } from "./Element";

export function Board() {
  const ctx = useContext(AppContext);
  const getElements = () => {
    return ctx.array.map((el, i) => (
      <Element
        value={el}
        marked={ctx.markedIdx && ctx.markedIdx.includes(i) ? true : false}
        key={i}
      ></Element>
    ));
  };
  return <main className="board">{getElements()}</main>;
}
