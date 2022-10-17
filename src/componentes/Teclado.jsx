import TeclaFuncional from './TeclaFuncional'
export default function Teclado(){
    const contenido = ["AC","+/-","%","/","7","8","9","x","4","5","6","-","1","2","3","+","0",".","="]

    return <div className="grid grid-cols-4 rounded-xl divide-y divide-x divide-slate-200/10 divide-2 flex-auto w-11/12 m-auto text-xl shadow-lg mm:text-2xl ">
        {contenido.map((valor)=> <TeclaFuncional valor={valor} key={valor}/>)}
        </div>
    
}