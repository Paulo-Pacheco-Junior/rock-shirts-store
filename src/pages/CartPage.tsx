import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Shirt } from "../components/Shirt";

interface Shirt {
  id: string;
  img: string;
  name: string;
  brand: string;
  price: string;
  size: "P" | "M" | "G";
  counter: number;
}

export function CartPage() {
  const [shirts, setShirts] = useState<Shirt[]>([]);

  function handleSize(index: number, size: "P" | "M" | "G") {
    const updatedShirts = [...shirts];

    updatedShirts[index].size = size;

    setShirts(updatedShirts);
  }

  function handleCounter(index: number, counter: number) {
    if (counter > 0) {
      const updatedShirts = [...shirts];

      updatedShirts[index].counter = counter;

      setShirts(updatedShirts);
    } else {
      const updatedShirts = shirts.filter((_, i) => i !== index);

      setShirts(updatedShirts);
    }
  }

  useEffect(() => {
    async function getShirts() {
      const response = await axios.get(`http://localhost:3000/cart`);
      const data = await response.data;
      setShirts(data);
    }
    getShirts();
  }, []);

  return (
    <>
      <Link
        to={"/"}
        className="text-slate-500 block font-bold py-2 px-4 border-b-2 border-slate-400 hover:border-slate-500 m-4"
      >
        Voltar
      </Link>

      {shirts?.map((shirt, index) => {
        return (
          <div key={shirt?.id} className="flex py-4 mt-4 shadow-md">
            <img
              src={shirt?.img}
              alt="camiseta"
              className=" ml-2 w-28 rounded-md"
            />
            <div className="flex flex-1 justify-between p-2">
              <div className="flex flex-1 flex-col justify-between ">
                <div className="flex flex-col">
                  <span className="font-extrabold">{shirt?.name}</span>
                  <span className="text-xs text-gray-500 font-bold">
                    {shirt?.brand}
                  </span>
                </div>
                <label className="text-xs flex flex-col">
                  Tamanho:
                  <select
                    className="font-bold w-10 px-1"
                    value={shirt?.size}
                    onChange={(e) =>
                      handleSize(index, e.target.value as "P" | "M" | "G")
                    }
                  >
                    <option value="P">P</option>
                    <option value="M">M</option>
                    <option value="G">G</option>
                  </select>
                </label>
              </div>
              <div className="flex flex-col justify-between items-end w-20 py-2 pr-2">
                <span className="font-bold text-sm text-purple-900 ">
                  R$ {shirt?.price}
                </span>
                <div className="flex items-center justify-between border px-1 rounded-md">
                  <span
                    className="px-2"
                    onClick={() => handleCounter(index, shirt?.counter - 1)}
                  >
                    -
                  </span>
                  <span className="text-xs px-1 ">{shirt?.counter}</span>
                  <span
                    className="px-2"
                    onClick={() => handleCounter(index, shirt?.counter + 1)}
                  >
                    +
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
