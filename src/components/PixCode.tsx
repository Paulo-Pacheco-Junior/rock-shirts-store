import Countdown, { CountdownRenderProps } from "react-countdown";
import { LuCopy } from "react-icons/lu";

export function PixCode() {
  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <ExpiredCodeAlert />;
    } else {
      return (
        <span className="block pt-1">
          {hours < 10 ? `0${hours}` : hours}:
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      );
    }
  };

  const ExpiredCodeAlert = () => (
    <span className="block pt-4 text-sm text-red-600">
      Código Pix expirado! Refaça o pagamento
    </span>
  );

  //const twoHoursCountdown = Date.now() + 2 * 60 * 60 * 1000;
  const fiveSecondsCountdown = Date.now() + 5000;

  return (
    <div className="flex flex-col justify-center items-center pt-2 pb-4 px-4  mx-4 mb-4">
      <p className="font-bold mb-4">Aguardando pagamento</p>
      <p className="text-sm">
        Copie o código abaixo e utilize o Pix Copia e Cola no aplicativo que vai
        fazer o pagamento:
      </p>
      <div className="flex items-center gap-4 p-2 bg-slate-100 rounded-lg m-4">
        <span className="text-sm">00020101021226770014BR.GOV.B</span>
        <LuCopy className="text-red-500" />
      </div>
      <p className="text-sm">O tempo para você pagar acaba em:</p>
      <span className="font-bold">
        <Countdown date={fiveSecondsCountdown} renderer={renderer}>
          <ExpiredCodeAlert />
        </Countdown>
      </span>
    </div>
  );
}
