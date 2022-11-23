import Pokedex from "./componentes/Pokedex";
import Navegador from "./componentes/Navegador";
import Weather from "./componentes/Weather";
import PieDePagina from "./componentes/PieDePagina";
import Calculadora from "./componentes/Calculadora";
import Error404 from "./componentes/Error404";
import { BrowserRouter, Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Presentation from "./componentes/Presentacion";

function App() {
  return (
    <div
      className="flex flex-col items-center justify-between mx-auto  h-screen font-pay bg-gradient-to-t from-p1 to-p1 via-p3 bg-size-500 animate-tt-bg
      overflow-y-auto overflow-x-hidden gap-10 mm:gap-0"
    >
      <HashRouter>
        <Navegador />
        <Routes>
          <Route index element={<Presentation />} />
          <Route path="/home" element={<Presentation />} />
          <Route path="/pokedex" element={<Pokedex />}>
            <Route path=":clave" element={<Pokedex />} />
          </Route>
          <Route path="/weather" element={<Weather />}>
            <Route path=":lug" element={<Weather />} />
          </Route>
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/*" element={<Error404 />}/>
        </Routes>
      </HashRouter>

      <PieDePagina />
    </div>
  );
}

export default App;
