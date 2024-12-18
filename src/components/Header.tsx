import { IoCartOutline } from "react-icons/io5";
import logoImg from "../assets/logo.jpg";

export function Header() {
  return (
    <header className="flex justify-between items-center bg-[#F4F4F4] m-auto p-5 w-full">
      <div className="size-12">
        <img src={logoImg} alt="logo" className="size-full rounded-lg" />
      </div>
      <button className="py-2 px-4 bg-slate-200 rounded-md">
        <IoCartOutline />
      </button>
    </header>
  );
}
