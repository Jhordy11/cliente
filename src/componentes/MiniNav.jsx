import {NavLink} from "react-router-dom"
import { useState } from "react"
export default function MiniNav() {
const [activo, setActivo] = useState(false)
    let animacionON = "bg-clip-text text-transparent bg-gradient-to-r from-red-400/90 to-red-400/90 via-p7 bg-size-200 mx-5 animate-move-bg"
    let animacionOFF ="bg-clip-text text-transparent bg-gradient-to-r from-p4 to-p4 via-p7  bg-size-200 mx-5 "
    function handelButton(){
      setActivo(!activo)
    }
    function nav(){
    return <div onClick={handelButton} className="flex absolute inset-0 backdrop-blur-xl items-center justify-center">
        <ul className="flex flex-col gap-3 flex-wrap justify-around items-center list-none text-3xl " id="nav">
        <li><NavLink  to="/home" className={({isActive}) => (isActive ? animacionON :animacionOFF)}>Home</NavLink></li>
      <li><NavLink  to="/pokedex"  className={({isActive}) => (isActive ? animacionON :animacionOFF)}>Pokedex+Gif</NavLink></li>
      <li><NavLink  to="/weather"  className={({isActive}) => (isActive ? animacionON :animacionOFF)}>Weather</NavLink></li>
    <li><NavLink  to="/calculadora"  className={({isActive}) => (isActive ? animacionON :animacionOFF)}>Calculadora</NavLink></li>
  </ul>
  </div>}
  return (
    <>
    <button onClick={handelButton} className="flex flex-col justify-center items-center gap-1 w-[40px] h-[30px] border-p7 border-2 rounded-md p-1 border-solid shadow-lg md:hidden mt-2">
      <div className="bg-p7 w-10/12 border-p7 border"></div>
      <div className="bg-p7 w-10/12 border-p7 border"></div>
      <div className="bg-p7 w-10/12 border-p7 border"></div>
    </button>
      {activo? nav():"" }
    </>
    
  );
}
