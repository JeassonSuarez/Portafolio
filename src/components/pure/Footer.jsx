import React from "react";
import Navbar from "../containers/Navbar";
import RedesSociales from "../containers/RedesSociales";
import logo from "../../imagenes/presentacion/logo nombre.png";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Navbar ubicacion="footer" />
      <div className="legal-info">
        <img src={logo} alt="logo" title="logo" className="footer-logo" />
        <p>&copy; 2023 Jeasson Suárez</p>
      </div>
      <RedesSociales ubicacion="footer" />
    </div>
  );
};

export default Footer;
