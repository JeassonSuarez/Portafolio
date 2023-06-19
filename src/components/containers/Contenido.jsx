import React from "react";
import Presentacion from "./Presentacion";
import Sobremi from "../pure/Sobremi";
import Tecnologias from "./Tecnologias";
import Proyectos from "./Proyectos";

const Contenido = () => {
  return (
    <div className="div-Contenido">
      <div className="seccion" >
        <Presentacion />
      </div>
      <div className="div-sobremi seccion" id="sobre-mi">
        <h2 className="contenido-h2-titulo">Sobre Mi</h2>
        <Sobremi />
      </div>
      <div className="seccion" id="tecnologias">
        <h2 className="contenido-h2-titulo">Tecnologias</h2>
        <Tecnologias />
      </div>
      <div className="seccion" id="proyectos">
        <h2 className="contenido-h2-titulo">Proyectos</h2>
        <Proyectos />
      </div>
    </div>
  );
};

export default Contenido;
