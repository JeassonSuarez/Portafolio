import React from "react";
import Navbar from "../containers/Navbar";

import "../../styles/header.css";

import logo  from '../../imagenes/presentacion/logo nombre.png'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" title="logo" className="header-logo" id="presentacion"/>
      <Navbar ubicacion='header' />
    </header>
  );
};

export default Header;
