import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import RedSocial from "../pure/RedSocial";

const RedesSociales = () => {
  return (
    <div className="div-contenedor-redes-sociales">
      <RedSocial texto="Linkedin">
        <AiOutlineLinkedin className="ri" />
      </RedSocial>
      <RedSocial texto="GitHub">
        <AiOutlineGithub className="ri" />
      </RedSocial>
      <RedSocial texto="Correo">
        <AiOutlineMail className="ri" />
      </RedSocial>
    </div>
  );
};

export default RedesSociales;
