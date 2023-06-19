import React from "react";
import Proyecto from "../pure/Proyecto";

import "../../styles/proyectos.css";
import proyectos from "../../models/proyecto";

const Proyectos = () => {
  const proyectosList = proyectos;

  return (
    <div className="div-contenedor-proyectos">
      {proyectos.map((p, i) => {
        return <Proyecto key={i} dataProyecto={p} />;
      })}
    </div>
  );
};

export default Proyectos;
