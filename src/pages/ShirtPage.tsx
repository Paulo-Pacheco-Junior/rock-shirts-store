import axios from "axios";
import { useEffect, useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import { Link, useParams } from "react-router";

interface Shirt {
  id: string;
  img: string;
  brand: string;
  score: number;
  comments: string;
  name: string;
  price: string;
  description: string;
}

export function ShirtPage() {
  const [shirt, setShirt] = useState<Shirt>();

  const { id } = useParams();

  async function SendShirtToCart(shirtId: string | undefined) {
    const response = await axios.get("http://localhost:3000/cart");
    const cartData = await response.data;

    if (!cartData.find((shirt: Shirt) => shirt.id === shirtId)) {
      await axios.post(`http://localhost:3000/cart`, {
        id: shirt?.id,
        img: shirt?.img,
        name: shirt?.name,
        brand: shirt?.brand,
        price: shirt?.price,
      });
    }
  }

  useEffect(() => {
    async function getShirt() {
      const response = await axios.get(`http://localhost:3000/shirts/${id}`);
      const data = await response.data;
      setShirt(data);
    }
    getShirt();
  }, [id]);

  return (
    <>
      <Link
        to="/"
        className="text-slate-500 block font-bold py-2 px-4 border-b-2 border-slate-400 hover:border-slate-500 m-4"
      >
        Voltar
      </Link>
      <div className="flex flex-col h-auto bg-white  shadow-md pt-4">
        <img
          src={shirt?.img}
          alt="camiseta"
          className="w-full h-auto rounded-md"
        />
        <div className="flex flex-col px-4 pt-4">
          <div className="flex items-center">
            <span className="text-xs text-gray-500 mr-1 font-bold">
              {shirt?.brand}
            </span>
            <RiStarSFill className="text-yellow-300 mb-1" />
            <span className="text-xs font-extrabold mr-1">{shirt?.score}</span>
            <span className="text-xs text-gray-400 font-bold">
              ({shirt?.comments})
            </span>
          </div>
          <span className="font-extrabold">{shirt?.name}</span>
        </div>
        <p className="p-4">{shirt?.description}</p>
        <span className="font-extrabold text-sm  text-purple-900 pb-1 pl-4">
          R$ {shirt?.price}
        </span>
        <Link
          to="/cart"
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold
          py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-4 mb-10"
          onClick={() => SendShirtToCart(shirt?.id)}
        >
          COMPRAR AGORA
        </Link>
      </div>
    </>
  );
}
