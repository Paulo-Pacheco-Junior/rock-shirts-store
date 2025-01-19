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
      const response = await axios.get(
        "https://rock-shirts-store-api.onrender.com/cart"
      );
      const shirtsLength = await response.data.length;
      setShirtsLength(shirtsLength);
    }
    getShirtsLength();
  }, []);

  return (
    <header className="flex justify-between items-center bg-[#e2e4e3] m-auto px-5 py-2 w-full md:px-8">
      <div className="w-16 md:w-20">
        <img src={logoImg} alt="logo" className="size-full  rounded-md" />
      </div>
      <button className="p-3 rounded-md" onClick={goToCart}>
        {shirtsLength ? (
          <RiShoppingCartFill className="w-5 h-5" />
        ) : (
          <IoCartOutline className="w-5 h-5" />
        )}
      </button>
    </header>
  );
}
