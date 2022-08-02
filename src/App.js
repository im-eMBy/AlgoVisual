import "./App.css";
import { Sorting } from "./pages/Sorting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Sorting />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
