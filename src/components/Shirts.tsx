import { RiStarSFill } from "react-icons/ri";

interface Shirts {
  img: string;
  brand: string;
  score: string;
  comments: string;
  name: string;
  price: string;
}

interface ShirtsProps {
  shirts: Shirts;
}

export function Shirts({ shirts }: ShirtsProps) {
  return (
    <div className="flex flex-col h-auto bg-white  shadow-md pt-4">
      <img
        src={shirts.img}
        alt="camiseta"
        className="w-full h-auto rounded-md"
      />
      <div className="flex flex-col p-2">
        <div className="flex justify-start items-center">
          <span className="text-xs text-gray-500 mr-1 font-bold">
            {shirts.brand}
          </span>
          <RiStarSFill className="text-yellow-300 mb-1" />
          <span className="text-xs font-extrabold mr-1">{shirts.score}</span>
          <span className="text-xs text-gray-400 font-bold">
            ({shirts.comments})
          </span>
        </div>
        <span className="font-extrabold pb-1">{shirts.name}</span>
        <span className="font-extrabold text-sm  text-purple-900 pb-1">
          R$ {shirts.price}
        </span>
      </div>
    </div>
  );
}
