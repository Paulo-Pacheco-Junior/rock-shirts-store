import { Header } from "../components/Header";
import { Shirts } from "../components/Shirts";
import { shirts } from "../data";

export function Home() {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-5 p-4 bg-[#f4f4f4] rounded-sm">
        {shirts.map((shirt, index) => {
          return <Shirts key={index} shirts={shirt} />;
        })}
      </div>
    </div>
  );
}
