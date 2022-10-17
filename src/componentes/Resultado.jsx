import { CalculadoraContexto } from "../contexto/CalculadoraContexto";
import { useContext } from "react";
export default function Resultado() {
  const { result } = useContext(CalculadoraContexto);
  return (
    <div className="shadow-lg w-11/12 text-right pr-3 py-3 bg-white/5 mx-auto rounded-xl flex-[0_0_5%]">
      <p className="text-p7 text-xl mm:text-2xl ">{result}</p>
    </div>
  );
}
