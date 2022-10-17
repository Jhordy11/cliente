import { useState, useEffect } from "react";
import EstadisticasPokemon from "./EstadisticasPokemon";
import swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Contenedor from "./Contenedor";
export default function Pokedex() {
  const nav = useNavigate();
  const { clave } = useParams();
  const [busqueda, setBusqueda] = useState("");
  const [pokemonNombre, setPokemonNombre] = useState("");
  const [pokemonID, setPokemonID] = useState("");
  const [pokemonBase, setPokemonBase] = useState("");
  const [pokemonPeso, setPokemonPeso] = useState("");
  const [gif, setGif] = useState("");

  function generarPokemon(idONombre) {
    setGif("https://media.tenor.com/5o2p0tH5LFQAAAAj/hug.gif");
     
    axios.get(`/api/pokedex/${idONombre}`)
      .then((objeto) => objeto.data)
      .then((pok) => {
        setPokemonNombre(pok.name.toUpperCase());
        setPokemonID(pok.id);
        setPokemonBase(pok.base_experience);
        setPokemonPeso(pok.weight);
        gifDePokemon(pok.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function alertaError() {
    swal.fire({
      icon: "error",
      width: "400px",
      html: '<div class="textAlerta">No se encontro el pokemon :c</div>',
      background: "rgba(0, 0, 0,0.9)",
      showConfirmButton: false,
      timer: 1500,
    });
  }
  function alertaEncontrado() {
    swal.fire({
      icon: "success",
      width: "400px",
      html: '<div class="textAlerta">Se encontro el pokemon :)</div>',
      background: "rgba(0, 0, 0,0.9)",
      showConfirmButton: false,
      timer: 1500,
    });
  }

function alertar(name){
  if(name== "?????"){
    alertaError()
  }else{
    alertaEncontrado()
  }
}

  function gifDePokemon(name) {
    if (name == "?????") {
      setGif(
        "https://media0.giphy.com/media/DRfu7BT8ZK1uo/giphy.gif?cid=ecf05e47ljybno9w60m24q5azx7fqzc77nikyyr1nnxtzvef&rid=giphy.gif&ct=g"
      );
      return;
    }
    axios.get(`/api/gif/${name}`)
      .then((res) => res.data)
      .then((objeto) => setGif(objeto.data[0].images.original.url)).catch(err => console.log(err));
  }

  function numeroRandomPokemon() {
    return Math.round(Math.random() * 150);
  }

  function handlePokemon() {
    nav(`/pokedex/${numeroRandomPokemon()}`);
  }
function handleBusqueda() {
  axios.get(`/api/pokedex/${busqueda}`)
      .then((objeto) => objeto.data)
      .then((pok) => {
        alertar(pok.name)
      })
      .catch((err) => {
        console.log(err);
      });
    nav(`/pokedex/${busqueda}`);
    setBusqueda("");
  }

  useEffect(() => {
    generarPokemon(clave || 1);
  }, [clave]);

  return (
    <Contenedor>
      <img
        className="w-[200px] h-[200px] rounded-full mx-auto border-4 bg-clip-border border-transparent bg-gradient-to-t from-p6 to-p6 via-p7 bg-size-400 bg-pos-c animate-rote-bg mm:w-[300px] mm:h-[300px] mm:border-8"
        src={gif}
        alt={pokemonNombre}
      />
      <h1 className="text-3xl mm:text-4xl">{pokemonNombre}</h1>
      <EstadisticasPokemon
        idP={pokemonID}
        baseP={pokemonBase}
        pesoP={pokemonPeso}
      />
      <button
        className="border-transparent border-b-2  hover:border-p6 transition ease-in duration-500 text-xl mm:text-2xl"
        onClick={handlePokemon}
      >
        Pokemon Aletorio
      </button>
      <div>
        <input
          className="shadow-lg bg-white/5 mr-2 rounded-xl focus:outline-none focus:bg-white/10 pl-5 transition ease-in duration-300 caret-p7 cursor-text"
          type="text"
          onChange={(e) => setBusqueda(e.target.value)}
          value={busqueda}
        />
        <button
          className="text-p7  transition ease-in duration-300 hover:text-p5 "
          onClick={handleBusqueda}
        >
          Buscar
        </button>
      </div>
    </Contenedor>
  );
}
