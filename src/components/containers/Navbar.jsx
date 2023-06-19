import React from "react";
import Select from "../pure/Select";
import { AiOutlineMessage, AiOutlineHome } from "react-icons/ai";
import { RiFocus3Line } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";

import "../../styles/navbar.css";

const Navbar = ({ ubicacion }) => {
  return (
    <nav className="nav-menu">
      <ul className={`menu-ul ${ubicacion==='footer' && 'menu-ul-footer'}`}menu-ul>
        <a href="#presentacion">
          <li className="ul-li-item-menu">
            Inicio <AiOutlineHome className="ri" />
          </li>
        </a>
        <a href="#sobre-mi">
          <li className="ul-li-item-menu">
            Sobre Mí <RiFocus3Line className="ri" />
          </li>
        </a>
        <a href="#tecnologias">
          <li className="ul-li-item-menu">
            Tecnologias <GiSkills className="ri" />
          </li>
        </a>
        <a href="#proyectos">
          <li className="ul-li-item-menu">
            <Select />
          </li>
        </a>
        <li className="ul-li-item-menu">
          <button className="btn">
            Contactarme
            <AiOutlineMessage className="ri" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
