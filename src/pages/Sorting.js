import "../css/sorting.css";
import { Buttons } from "../components/Sorting/Buttons";
import { SortingContextProvider } from "../context/SortingContext";
import { BoardController } from "../components/Sorting/BoardController";

export function Sorting() {
  return (
    <SortingContextProvider>
      <BoardController></BoardController>
      <Buttons></Buttons>
    </SortingContextProvider>
  );
}
