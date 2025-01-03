import { Home } from "./pages/Home";
import { ShirtPage } from "./pages/ShirtPage";
import { CartPage } from "./pages/CartPage";

import { BrowserRouter, Routes, Route } from "react-router";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirt/:id" element={<ShirtPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
