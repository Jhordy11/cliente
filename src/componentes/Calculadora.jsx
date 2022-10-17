import Resultado from "./Resultado";
import Teclado from "./Teclado";
import { CalculadoraContextoProvider } from "../contexto/CalculadoraContexto";
import Contenedor from "./Contenedor";
function Calculadora() {
  return (
    <Contenedor>
      <CalculadoraContextoProvider>
        <Resultado />
        <Teclado />
      </CalculadoraContextoProvider>
    </Contenedor>
  );
}

export default Calculadora;
