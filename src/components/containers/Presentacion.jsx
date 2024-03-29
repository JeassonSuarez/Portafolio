import React from "react";
import RedSocial from "../pure/RedSocial";
import logod from "../../imagenes/presentacion/icon 2.svg";
import RedesSociales from "./RedesSociales";
import { AiOutlineCloudDownload } from "react-icons/ai";
import foto from "../../imagenes/presentacion/foto sin fondo.png";
import Spline from "@splinetool/react-spline";
import cv from '../../assets/CV JEASSON SUAREZ.pdf' 

import "../../styles/presentacion.css";

const Presentacion = () => {
  return (
    <div className="div-contenedor-presentacion seccion">
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
          <a href={cv} download className="btn">
          {/* <button className="btn"> */}
            Descargar CV
            <AiOutlineCloudDownload className="ri" />
          {/* </button> */}
          </a>
          <RedesSociales />
        </div>
      </div>
      <div className="presentacion-div-img">
        <Spline
          scene="https://prod.spline.design/pm75871op0QH4Oiz/scene.splinecode"
          className="spline-fondo"
        />
        <div className="img-contenedor">
          <img src={foto} alt="foto" title="foto" className="img-foto" />
          <span className="presentacion-span-texto-mediano texto-img-foto">
            Jeasson Suárez
          </span>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
