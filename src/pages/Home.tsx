import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Shirt } from "../components/Shirt";
import axios from "axios";

interface Shirt {
  id: number;
  img: string;
  brand: string;
  score: number;
  comments: string;
  name: string;
  price: string;
  description: string;
}

export function Home() {
  const [shirts, setShirts] = useState<Shirt[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:3000/shirts");
      const data = await response.data;
      setShirts(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-2 gap-5 p-4 bg-[#f4f4f4] rounded-sm">
        {shirts.map((shirt, index) => {
          return <Shirt key={index} shirt={shirt} />;
        })}
      </div>
    </div>
  );
}
