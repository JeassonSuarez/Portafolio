import React from "react";
import proyecto from "../../imagenes/proyectos/pomodoro.png";
import { AiOutlineCode, AiOutlineFolderView } from 'react-icons/ai'

const Proyecto = ({ dataProyecto }) => {
  return (
    <div className="div-contenedor-proyecto">
      <div className="proyecto-titulo-fondo">{dataProyecto.tc}</div>

      <div className="proyecto-contenedor-img-titulo">
          <img src={dataProyecto.imagen} alt="java" />
        <h3>{dataProyecto.tc}</h3>
      </div>
      
      <div className="proyecto-contenedor-info">
        <h3>{dataProyecto.tl}</h3>
        <p>
          {dataProyecto.descripcion}
        </p>
        <div className="proyecto-links">
        <a href={dataProyecto.linkVivo} target="_blank" className="btn ">En vivo <AiOutlineFolderView className="ri" /></a>
        <a href={dataProyecto.linkVivo} target="_blank" className="btn ">Codigo<AiOutlineCode className="ri" /></a>
        </div>
      </div>
    </div>
  );
};

export default Proyecto;
