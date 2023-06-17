import React from "react";
import RedSocial from "../pure/RedSocial";
import logod from "../../imagenes/presentacion/icon 2.svg";
import RedesSociales from "./RedesSociales";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Presentacion = () => {
  return (
    <div>
      <h2>
        Hola, <br /> mi nombre es Jeasson <br /> Ingeniero de Sistemas,
        Desarrollador Frontend
      </h2>
      <button className="btn">
        Descargar CV
        <AiOutlineCloudDownload className="ri"/>
      </button>
      <RedesSociales />
    </div>
  );
};

export default Presentacion;
