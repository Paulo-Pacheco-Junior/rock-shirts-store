import { IoCartOutline } from "react-icons/io5";
import logoImg from "../assets/logo.png";

export function Header() {
  return (
    <header className="flex justify-between items-center bg-[#e2e4e3] m-auto px-4 py-2 w-full">
      <div className="w-12 ">
        <img src={logoImg} alt="logo" className="size-full  rounded-md" />
      </div>
      <button className="p-2 rounded-md border">
        <IoCartOutline size={18} />
      </button>
    </header>
  );
}
