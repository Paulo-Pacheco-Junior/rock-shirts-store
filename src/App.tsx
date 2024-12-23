import { Home } from "./pages/Home";
import { ShirtPage } from "./pages/ShirtPage";
import { BrowserRouter, Routes, Route } from "react-router";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirt/:id" element={<ShirtPage />} />
      </Routes>
    </BrowserRouter>
  );
}
