import Shirt from "../assets/logo.jpg";
import { RiStarSFill } from "react-icons/ri";

export function Product() {
  return (
    <div>
      <div className="flex flex-col m-5">
        <img src={Shirt} alt="" className="size-40" />
        <div className="flex">
          <span>Vans</span>
          <RiStarSFill />
          <span>4,9</span>
          <span>(136)</span>
        </div>
        <span>Camiseta do Metallica</span>
        <span>R$ 70,00 </span>
      </div>
    </div>
  );
}
