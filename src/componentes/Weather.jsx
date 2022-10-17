import { useState, useEffect } from "react";
import swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Contenedor from "./Contenedor";
export default function Weather() {
  const nav = useNavigate();
  const { lug } = useParams();

  const [lugar, setLugar] = useState("");
  const [temperatura, setTemperatura] = useState("");
  const [icono, setIcono] = useState("");
  const [la, setLa] = useState("");
  const [lo, setLo] = useState("");
  const [hora, setHora] = useState("");
  function datos(lugar) {
    axios
      .get(`https://servidor-tau.vercel.app/api/weather/${lugar}`)
      .then((data) => data.data)
      .then((objeto) => {
        setIcono(objeto.weather[0].icon);
        setTemperatura(Math.round(Number(objeto.main.temp) - 273.15) + " C°");
        setHora(objeto.main.humidity + " %");
        setLo(objeto.coord.lon);
        setLa(objeto.coord.lat);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function alertaError() {
    swal.fire({
      icon: "error",
      width: "400px",
      html: '<div class="textAlerta">No se encontro el lugar :c</div>',
      background: "rgba(0, 0, 0,0.9)",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  function alertaEncontrado() {
    swal.fire({
      icon: "success",
      width: "400px",
      html: '<div class="textAlerta">Se encontro el lugar :)</div>',
      background: "rgba(0, 0, 0,0.9)",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  function alertar(name) {
    if (name == "?????") {
      alertaError();
    } else {
      alertaEncontrado();
    }
  }

  function handelbutton() {
    axios
      .get(`https://servidor-tau.vercel.app/api/weather/${lugar}`)
      .then((objeto) => objeto.data)
      .then((pok) => {
        alertar(pok.name);
      })
      .catch((err) => {
        console.log(err);
      });
    nav(`/weather/${lugar}`);
    setLugar("");
  }

  useEffect(() => {
    datos(lug || "Ecuador");
  }, [lug]);
  return (
    <Contenedor>
      <div>
        <input
          className="shadow-lg bg-white/5 mx-auto rounded-xl  caret-p7 focus:outline-none focus:bg-white/10 pl-5 py-1 transition ease-in duration-300 mm:mr-2 cursor-text"
          type="text"
          onChange={(e) => setLugar(e.target.value)}
          value={lugar}
        />
        <button
          className="text-p7  transition ease-in duration-300 hover:text-p5"
          onClick={handelbutton}
        >
          Buscar
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 mm:flex-col">
        <img
          src={`https://openweathermap.org//img/wn/${icono}@2x.png`}
          className="w-[100px] "
        />
        <div className="bg-clip-text text-transparent bg-gradient-to-t from-p4 to-p4 via-p7 bg-size-400 animate-rote-bg text-2xl mm:text-3xl">
          <h3>{temperatura}</h3>
          <h3>{hora}</h3>
        </div>
      </div>

      <iframe
        className="w-[200px] h-[200px] rounded-2xl mx-auto border-4 bg-clip-border border-transparent bg-gradient-to-t from-p6 to-p6 via-p7 bg-size-400 bg-pos-c animate-rote-bg mm:w-[300px] mm:h-[300px] mm:border-8"
        src={
          "https://maps.google.com/?ll=" + la + "," + lo + "&z=7&output=embed"
        }
      ></iframe>
    </Contenedor>
  );
}
