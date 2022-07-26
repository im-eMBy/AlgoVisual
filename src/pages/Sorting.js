import { Board } from "../components/Sorting/Board";
import { Buttons } from "../components/Sorting/Buttons";
import { AppContextProvider } from "../context/AppContext";

export function Sorting() {
  return (
    <AppContextProvider>
      <main>
        <Board></Board>
        <Buttons></Buttons>
      </main>
    </AppContextProvider>
  );
}
