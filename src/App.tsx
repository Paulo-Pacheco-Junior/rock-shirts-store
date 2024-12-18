import { Header } from "./components/Header";
import { Product } from "./components/Product";

export function App() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
