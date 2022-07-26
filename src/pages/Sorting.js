import { Board } from "../components/Sorting/Board";
import { Buttons } from "../components/Sorting/Buttons";
import { SortingContextProvider } from "../context/SortingContext";

export function Sorting() {
  return (
    <SortingContextProvider>
      <main>
        <Board></Board>
        <Buttons></Buttons>
      </main>
    </SortingContextProvider>
  );
}
