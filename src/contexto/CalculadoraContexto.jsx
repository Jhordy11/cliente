import { createContext } from "react";
import { useState } from "react";

export const CalculadoraContexto = createContext();

export function CalculadoraContextoProvider(props) {
  const [result, setResult] = useState("0");
  const [ultimaOperacion, setUltimaOperacion] = useState("");
  const [ultimoResultado, setUltimoResultado] = useState(0);
  const [nuevaOpercion, setNuevaOpercion] = useState(false);

  function limpiar() {
    setResult("0");
    setUltimoResultado(0);
    setUltimaOperacion("");
    setNuevaOpercion(false);
  }
  function cambiarSigno() {
    let aux = Number(result) * -1;
    setResult("" + aux);
    setUltimoResultado(Number(aux));
  }

  function porcentaje() {
    let aux = Number(result) / 100;
     aux = Math.round(aux * 100) / 100;
    setResult("" + aux);
  }

  function agregarValores(value) {
    if (result == "0") {
      setResult(value);
      return;
    }
    if (nuevaOpercion == true) {
      setResult(value);
      setNuevaOpercion(false);
      return;
    }
    setResult(result + value);
  }

  function selecionarOp(value) {
    let x = "";
    if (result == "0") {
      return;
    }
    if (nuevaOpercion == true) {
      setUltimaOperacion(value);
      return;
    }

    if (ultimaOperacion == "" && value != "=") {
      setUltimaOperacion(value);
      setUltimoResultado(Number(result));
      setNuevaOpercion(true);
      return;
    }

    if (ultimaOperacion != "" && value != "=") {
      x =
        calcularResultado(ultimaOperacion, ultimoResultado, Number(result)) +
        "";
      setResult(x);
      setUltimoResultado(Number(x));
      setUltimaOperacion(value);
      setNuevaOpercion(true);
      return;
    }

    if (ultimaOperacion != "" && value == "=") {
      x =
        calcularResultado(ultimaOperacion, ultimoResultado, Number(result)) +
        "";
      setResult(x);
      setUltimaOperacion("");
      setUltimoResultado(Number(x));
      setNuevaOpercion(true);
      return;
    }
  }

  function calcularResultado(value, a, b) {
    switch (value) {
      case "/":
        return b != 0 ? Math.round((a / b) * 100) / 100: 0;
      case "x":
        return Math.round((a * b) * 100) / 100;;
      case "-":
        return Math.round((a - b) * 100) / 100;;
      case "+":
        return Math.round((a + b) * 100) / 100;;
    }
  }

  return (
    <CalculadoraContexto.Provider
      value={{
        result,
        limpiar,
        cambiarSigno,
        porcentaje,
        agregarValores,
        selecionarOp,
      }}
    >
      {props.children}
    </CalculadoraContexto.Provider>
  );
}
