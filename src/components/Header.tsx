import { IoCartOutline } from "react-icons/io5";
import logoImg from "../assets/logo.png";
import { Link } from "react-router";

export function Header() {
  return (
    <header className="flex justify-between items-center bg-[#e2e4e3] m-auto px-4 py-2 w-full">
      <div className="w-12 ">
        <img src={logoImg} alt="logo" className="size-full  rounded-md" />
      </div>
      <Link to="/cart" className="p-2 rounded-md border">
        <IoCartOutline size={18} />
      </Link>
    </header>
  );
}
