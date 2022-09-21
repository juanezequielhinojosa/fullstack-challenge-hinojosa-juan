import React from "react";
import '../estilos/Personaje.css'
 
const Personaje=({id,nombre,imagen,estado,especie,setImagenPersonaje})=>{
    return(
        <div className="contenedor-principal" onClick={()=>setImagenPersonaje(imagen)}>
            
            <img src={imagen} alt={`imagend de ${nombre}`} className="contenedor-imagen"/>
           <div className="contenedor-datos">
            <p><strong>{nombre}</strong></p>
            <p><strong>{estado}</strong></p>
            <p><strong>{especie}</strong></p>
           </div>
           
        </div>
    );
}
export default Personaje;