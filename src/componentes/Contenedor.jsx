import {Outlet} from "react-router-dom"
export default function Contenedor(props) {
  return (
    <div className="flex flex-col items-center justify-around text-center w-[270px] gap-2 p-5 shadow-2xl rounded-3xl bg-clip-text text-transparent bg-gradient-to-t from-p6 to-p7 text-base mm:w-[450px]  mm:text-xl mm:p-10 mm:gap-5">
      {props.children}
    </div>
  );
}
