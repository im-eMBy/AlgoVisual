import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sorting } from "./pages/Sorting";
import { Navigation } from "./components/Navigation";
import { Sudoku } from "./pages/Sudoku";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Sorting />} />
          <Route path="/sudoku-solver" element={<Sudoku />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
