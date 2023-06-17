import React from "react";
import RedSocial from "../pure/RedSocial";
import logod from "../../imagenes/presentacion/icon 2.svg";
import RedesSociales from "./RedesSociales";
import { AiOutlineCloudDownload } from "react-icons/ai";
import foto from '../../imagenes/presentacion/foto sin fondo.png'

import "../../styles/presentacion.css";

const Presentacion = () => {
  return (
    <div className="div-contenedor-presentacion">
      <div className="presentacion-div-text">
        <div className="text-div-fondo">DEV</div>
        <div className="text-div-texto">
          <h2>
            <span className="presentacion-span-texto-mediano">Hola, </span>{" "}
            <br />{" "}
            <span className="presentacion-span-texto-grande">
              mi nombre es <br /> Jeasson
            </span>{" "}
            <br />{" "}
            <span className="presentacion-span-texto-mediano">
              Ingeniero de Sistemas, Desarrollador Frontend
            </span>
          </h2>
          <button className="btn">
            Descargar CV
            <AiOutlineCloudDownload className="ri" />
          </button>
          <RedesSociales />
        </div>
      </div>
      <div className="presentacion-div-img">
        <img src={foto} alt="foto" title="foto" className="img-foto"/>
      </div>
    </div>
  );
};

export default Presentacion;
