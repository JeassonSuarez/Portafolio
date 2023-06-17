import React from "react";
import Select from "../pure/Select";
import { AiOutlineMessage, AiOutlineHome } from "react-icons/ai";
import { RiFocus3Line } from "react-icons/ri" 


import '../../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="nav-menu">
      <ul className="menu-ul">
        <li className="ul-li-item-menu">Inicio <AiOutlineHome className="ri" /></li>
        <li className="ul-li-item-menu">Sobre Mí <RiFocus3Line className="ri" /></li>
        <li className="ul-li-item-menu"><Select /></li>
        <li className="ul-li-item-menu"><button className="btn">Contactarme<AiOutlineMessage className="ri"/></button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
