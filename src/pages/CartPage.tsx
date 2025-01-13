import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Shirt } from "../components/Shirt";
import { MdPix } from "react-icons/md";
import { PiMoney } from "react-icons/pi";
import { PixCode } from "../components/PixCode";

interface Shirt {
  id: string;
  img: string;
  name: string;
  brand: string;
  price: number;
  size: "P" | "M" | "G";
  counter: number;
}

export function CartPage() {
  const navigate = useNavigate();

  const [shirts, setShirts] = useState<Shirt[]>([]);
  const [paymentMethod, setPaymentMethod] = useState("pix");
  const [togglePix, setTogglePix] = useState(false);

  async function handleSize(index: number, size: "P" | "M" | "G") {
    const updatedShirts = [...shirts];

    updatedShirts[index].size = size;

    await axios.put(
      `http://localhost:3000/cart/${shirts[index].id}`,
      updatedShirts[index]
    );

    setShirts(updatedShirts);
  }

  async function handleCounter(index: number, counter: number) {
    if (counter > 0) {
      const updatedShirts = [...shirts];

      updatedShirts[index].counter = counter;

      await axios.put(
        `http://localhost:3000/cart/${shirts[index].id}`,
        updatedShirts[index]
      );

      setShirts(updatedShirts);
    } else {
      const updatedShirts = shirts.filter((_, i) => i !== index);

      await axios.delete(`http://localhost:3000/cart/${shirts[index].id}`);

      setShirts(updatedShirts);

      if (updatedShirts.length < 1) {
        navigate("/");
      }
    }
  }

  function buyShirts() {
    if (paymentMethod === "pix") {
      setTogglePix(!togglePix);
    }

    if (paymentMethod === "withdrawal") {
      navigate("../completed");
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
                  {`R$ ${(shirt?.price * shirt?.counter)
                    .toFixed(2)
                    .replace(".", ",")}`}
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
      <div className="flex justify-between items-center pt-8 px-6">
        <span className="text-sm font-semibold">Total</span>
        <span className="font-semibold">
          {`R$ ${shirts
            ?.reduce((total, shirt) => total + shirt?.price * shirt?.counter, 0)
            .toFixed(2)
            .replace(".", ",")} `}
        </span>
      </div>
      <div className="flex justify-center gap-8 px-8 py-8">
        <div
          className={`border rounded-md ${
            paymentMethod === "pix"
              ? "bg-slate-200 border-emerald-300"
              : "bg-slate-50"
          }`}
        >
          <label className="flex items-center py-4 px-8 gap-2 text-sm">
            <input
              type="radio"
              value="pix"
              checked={paymentMethod === "pix"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="hidden"
            />
            <MdPix /> <span>Pix</span>
          </label>
        </div>
        <div
          className={`border rounded-md ${
            paymentMethod === "withdrawal"
              ? "bg-slate-200 border-emerald-300"
              : "bg-slate-50"
          }`}
        >
          <label className="flex items-center py-4 px-8 gap-2 text-sm">
            <input
              type="radio"
              value="withdrawal"
              checked={paymentMethod === "withdrawal"}
              onChange={
                !togglePix ? (e) => setPaymentMethod(e.target.value) : undefined
              }
              className="hidden"
            />
            <PiMoney /> <span>Retirada</span>
          </label>
        </div>
      </div>
      {togglePix && <PixCode />}
      <div className="flex flex-col gap-4 px-4 pb-8">
        <Link
          to="/"
          className="flex justify-center items-center bg-emerald-500 hover:bg-emerald-400 border-b-4 border-emerald-700 hover:border-emerald-500 font-semibold text-sm text-white p-2 rounded-md"
        >
          Continuar comprando
        </Link>
        <button
          className="bg-emerald-500 hover:bg-emerald-400 border-b-4 border-emerald-700 hover:border-emerald-500 font-semibold text-sm text-white p-2 rounded-md"
          onClick={buyShirts}
          disabled={togglePix}
        >
          Finalizar compra
        </button>
      </div>
    </>
  );
}
