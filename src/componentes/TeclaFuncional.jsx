import {useContext} from "react"
import { CalculadoraContexto } from "../contexto/CalculadoraContexto";
export default function TeclaFuncional({valor}) {
    const {limpiar,cambiarSigno,porcentaje,agregarValores,
        selecionarOp} = useContext(CalculadoraContexto);
    if(valor =="AC"){
        return<button className="rounded-xl border-t border-l border-white/10 p-3 mm:p-8" onClick={(e)=>(limpiar(e))}>
            {valor}
        </button>
    }
    if(valor =="+/-" ){
        return <button className="rounded-xl p-3 mm:p-8" onClick={(e)=>(cambiarSigno())}>
            {valor}
        </button>
    }

    if(valor =="%"){
        return <button className="rounded-xl p-3 mm:p-8" onClick={(e)=>(porcentaje())}>
            {valor}
        </button>
    }
    if(["+","-","x","/","="].includes(valor)){
        return <button className="bg-orange-400/10 rounded-xl p-3 mm:p-8" onClick={(e)=>(selecionarOp(e.target.innerText))}>
            {valor}
        </button>
    }
    if(valor == "0"){
        return <button className="col-span-2 rounded-xl p-3 mm:p-8" onClick={(e)=>(agregarValores(e.target.innerText))}>
        {valor}
    </button>
    }

  return (
        <button className="rounded-xl" onClick={(e)=>(agregarValores(e.target.innerText))}>
            {valor}
        </button>
        
  )
}