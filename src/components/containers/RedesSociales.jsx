import React from "react";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
} from "react-icons/ai";
import RedSocial from "../pure/RedSocial";

const RedesSociales = ({ ubicacion }) => {
  return (
    <div className={`div-contenedor-redes-sociales ${ubicacion === 'footer' && 'div-contenedor-redes-sociales-footer'}`}>
      <RedSocial
        texto="Linkedin"
        link="https://www.linkedin.com/in/jeassonsuarez"
      >
        <AiOutlineLinkedin className="ri" />
      </RedSocial>
      <RedSocial texto="GitHub" link="https://github.com/JeassonSuarez">
        <AiOutlineGithub className="ri" />
      </RedSocial>
      {/* <RedSocial texto="Correo" link=''>
        <AiOutlineMail className="ri" />
      </RedSocial> */}
    </div>
  );
};

export default RedesSociales;
