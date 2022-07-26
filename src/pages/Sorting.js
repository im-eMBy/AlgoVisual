import { Buttons } from "../components/Sorting/Buttons";
import { SortingContextProvider } from "../context/SortingContext";
import { BoardController } from "../components/Sorting/BoardController";

export function Sorting() {
  return (
    <SortingContextProvider>
      <BoardController />
      <Buttons />
    </SortingContextProvider>
  );
}
