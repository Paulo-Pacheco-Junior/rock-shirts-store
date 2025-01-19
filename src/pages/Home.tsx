import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Shirt } from "../components/Shirt";
import axios from "axios";

interface Shirt {
  id: string;
  img: string;
  brand: string;
  score: number;
  comments: string;
  name: string;
  price: number;
  description: string;
}

export function Home() {
  const [shirts, setShirts] = useState<Shirt[]>([]);

  useEffect(() => {
    async function getShirts() {
      const response = await axios.get(
        "https://rock-shirts-store-api.onrender.com/shirts"
      );
      const data = await response.data;
      setShirts(data);
    }
    getShirts();
  }, []);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-5 px-6 py-8 md:grid-cols-3 md:gap-8 md:px-10 md:py-12 lg:grid-cols-4 lg:gap-8 lg:p-18 bg-[#f4f4f4] rounded-sm">
        {shirts.map((shirt, index) => {
          return <Shirt key={index} shirt={shirt} />;
        })}
      </div>
    </div>
  );
}
