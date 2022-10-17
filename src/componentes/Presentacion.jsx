import imgReact from "../assets/react.png"
import imgExpress from "../assets/express.png"
import imgNodejs from "../assets/nodejs.png"
import imgRouter6 from "../assets/router6.png"
import imgTailwind from "../assets/tailwind.png"
export default function Presentation(){
    return <div className="flex flex-col shadow-2xl rounded-3xl p-5 w-4/5 text-base mm:w-4/5 gap-1 bg-clip-text text-transparent bg-gradient-to-t from-p6 to-p7 text-justify mm:text-center">
        <h1 className="text-3xl text-center mm:text-5xl">¡¡¡HOLA!!!</h1>
        <p className="text-xl mm:text-3xl">Este es mi tercer proyecto donde puse en práctica varias tecnologías que estoy estudiando.</p>
        <p className="text-lg mm:text-3xl">En el frontend:</p>
        <div className="flex gap-1 justify-center">
        <img className="h-[70px] w-[70px] p-[5px] transition-all duration-500 hover:p-[0px] md:h-[100px] md:w-[100px]" src={imgReact} alt="imgReact" />
        <img className="h-[70px] w-[70px] p-[5px] transition-all duration-500 hover:p-[0px] md:h-[100px] md:w-[100px]" src={imgRouter6} alt="imgReact" />
        <img className="h-[70px] w-[70px] p-[5px] transition-all duration-500 hover:p-[0px] md:h-[100px] md:w-[100px]" src={imgTailwind} alt="imgReact" />
        </div>
        <p className="text-lg mm:text-3xl">En el bakend: </p>
        <div className="flex gap-1 justify-center">
            <img className="h-[70px] w-[70px] p-[5px] transition-all duration-500 hover:p-[0px] md:h-[100px] md:w-[100px]" src={imgNodejs} alt="imgReact" />
        <img className="h-[70px] w-[70px] p-[5px] transition-all duration-500 hover:p-[0px] md:h-[100px] md:w-[100px]" src={imgExpress} alt="imgReact" />
        </div>
    </div>
}