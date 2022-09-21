import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Personaje from "./Personaje";
import { getPersonajes } from "../service";
import "../estilos/ListaDePersonajes.css";

const ListaDePersonajes = () => {
  const [listaPersonajes, setListaPersonajes] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false);
  const [imagenPersonaje, setImagenPersonaje] = useState("");

  useEffect(() => {
    setEstaCargando(true);
    console.log(getPersonajes());
    getPersonajes()
      .then((data) => setListaPersonajes(data.results))
      .catch((err) => console.log(err))
      .finally(() => setEstaCargando(false));
  }, []);

  return (
    <div className="contenedor-principal-personajes">
      <div className="contenedor-imagen">
        <img src={imagenPersonaje} alt="no hay imagen" />
      </div>

      <div className="contenedor-personajes">
        {estaCargando && <h1>Cargando...</h1>}
        {listaPersonajes.map((personaje) => (
          <Personaje
            key={personaje.id}
            id={personaje.id}
            nombre={personaje.name}
            imagen={personaje.image}
            estado={personaje.status}
            especie={personaje.species}
            setImagenPersonaje={setImagenPersonaje}
          />
        ))}
      </div>
    </div>
  );
};
export default ListaDePersonajes;
