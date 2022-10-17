import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function PieDePagina() {
  return (
    <div className="flex flex-wrap flex-col w-screen flex-initial text-sm  text-center bg-white/5 rounded-t-3xl items-center shadow-lg p-2">
      <div className="flex flex-row gap-1">
        <a href="https://github.com/Jhordy11">
          <AiFillGithub className="h-[25px]  w-[25px] fill-orange-400" />
        </a>
        <a href="https://www.linkedin.com/in/jhordy-aguas-333937249/">
          <AiFillLinkedin className="h-[25px]  w-[25px] fill-orange-400" />
        </a>
      </div>
      <h1 className="flex-auto bg-clip-text text-transparent bg-gradient-to-t from-p6 to-p7 ">
        ©Copyright -Jhordy Aguas
      </h1>
    </div>
  );
}
