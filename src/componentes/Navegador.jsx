import {NavLink} from "react-router-dom"
import MiniNav from "./MiniNav"
export default function Navegador() {
  let animacionON = "bg-clip-text text-transparent bg-gradient-to-r from-p4 to-p4 via-p7 transition-all duration-500 bg-size-200 mx-5 animate-move-bg"
  let animacionOFF ="bg-clip-text text-transparent bg-gradient-to-r from-p4 to-p4 via-p7 transition-all duration-500 bg-size-200 mx-5 "
  return (
    <nav className="flex flex-wrap flex-col flex-initial w-screen text-2xl bg-p1 py-3 px-auto justify-around text-center bg-white/5 rounded-b-3xl items-center shadow-lg md:flex-row md:px-8 mm:py-5 ">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-p4 to-p7 text-3xl">Mini Web Service</h1>

      <MiniNav/>


      <ul className=" flex-row  flex-wrap justify-around items-center list-none hidden md:flex md:mt-2 " id="nav">
      <li><NavLink  to="/home" className={({isActive}) => (isActive ? animacionON :animacionOFF)}>Inicio</NavLink></li>
        <li><NavLink  to="/pokedex"  className={({isActive}) => (isActive ? animacionON :animacionOFF)}>Pokedex+Gif</NavLink></li>
        <li><NavLink  to="/weather"  className={({isActive}) => (isActive ? animacionON :animacionOFF)}>Weather</NavLink></li>
        <li><NavLink  to="/calculadora"  className={({isActive}) => (isActive ? animacionON :animacionOFF)}>Calculadora</NavLink></li>
      </ul>
      
      

    </nav>
  );
}
