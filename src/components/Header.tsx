import { IoCartOutline } from "react-icons/io5";
import logoImg from "../assets/logo.png";
import { useNavigate } from "react-router";
import { RiShoppingCartFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";

export function Header() {
  const navigate = useNavigate();

  const [shirtsLength, setShirtsLength] = useState(0);

  function goToCart() {
    if (shirtsLength) navigate("/cart");
  }

  useEffect(() => {
    async function getShirtsLength() {
      const response = await axios.get("http://localhost:3000/cart");
      const shirtsLength = await response.data.length;
      setShirtsLength(shirtsLength);
    }
    getShirtsLength();
  }, []);

  return (
    <header className="flex justify-between items-center bg-[#e2e4e3] m-auto px-4 py-2 w-full">
      <div className="w-12 ">
        <img src={logoImg} alt="logo" className="size-full  rounded-md" />
      </div>
      <button
        className=" flex items-center gap-2 p-2 rounded-md border"
        onClick={goToCart}
      >
        {shirtsLength ? <RiShoppingCartFill /> : <IoCartOutline size={18} />}
      </button>
    </header>
  );
}
