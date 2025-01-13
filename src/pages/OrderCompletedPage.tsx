import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlineWhatsapp } from "react-icons/md";
import { PiCheckCircleLight } from "react-icons/pi";
import { Link } from "react-router";

export function OrderCompletedPage() {
  return (
    <>
      <Link
        to={"/"}
        className="text-slate-500 block font-bold py-2 px-4 border-b-2 border-slate-400 hover:border-slate-500 mt-4 mx-4"
      >
        Voltar
      </Link>
      <div className="w-full h-screen grid place-items-center px-4 -mt-20">
        <div className="flex flex-col justify-center items-center">
          <PiCheckCircleLight size={200} className="text-emerald-500" />
          <h1 className="font-bold">Seu pedido foi finalizado!</h1>
          <p className="py-2">Entre em contato para acompanhar seu pedido</p>
          <div className="flex flex-col justify-start gap-2 mt-2">
            <div className="flex items-center gap-2">
              <MdOutlineWhatsapp
                size={20}
                className="bg-emerald-500 text-white rounded-lg font-extrabold"
              />
              <p>(62)98303-7224</p>
            </div>
            <div className="flex items-center gap-2">
              <GiRotaryPhone size={22} className="font-extrabold" />
              <p>(62)3236-6263</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
