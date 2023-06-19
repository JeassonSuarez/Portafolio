import React from "react";
import { AiOutlineFolderOpen, AiOutlineHome } from "react-icons/ai";
import { RiFocus3Line } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { ImWhatsapp } from "react-icons/im";

import "../../styles/navbar.css";

const Navbar = ({ ubicacion }) => {
  return (
    <nav className="nav-menu">
      <ul
        className={`menu-ul ${
          ubicacion === "footer"
            ? "menu-ul-footer"
            : ubicacion === "header" && "nav-menu-header"
        }`}
        menu-ul
      >
        <a href="#presentacion">
          <li className={`ul-li-item-menu ${ubicacion==='header' && 'ul-li-item-menu-movil'}`}>
            <span className={ubicacion === "header" && "title-btn-nav"}>
              Inicio
            </span>{" "}
            <AiOutlineHome
              className={`ri ${ubicacion === "header" && "ri-header-movil"}`}
            />
          </li>
        </a>
        <a href="#sobre-mi">
          <li className={`ul-li-item-menu ${ubicacion==='header' && 'ul-li-item-menu-movil'}`}>
            <span className={ubicacion === "header" && "title-btn-nav"}>
              Sobre Mí
            </span>{" "}
            <RiFocus3Line
              className={`ri ${ubicacion === "header" && "ri-header-movil"}`}
            />
          </li>
        </a>
        <a href="#tecnologias">
          <li className={`ul-li-item-menu ${ubicacion==='header' && 'ul-li-item-menu-movil'}`}>
            <span className={ubicacion === "header" && "title-btn-nav"}>
              Tecnologias
            </span>{" "}
            <GiSkills
              className={`ri ${ubicacion === "header" && "ri-header-movil"}`}
            />
          </li>
        </a>
        <a href="#proyectos">
          <li className={`ul-li-item-menu ${ubicacion==='header' && 'ul-li-item-menu-movil'}`}>
            <span className={ubicacion === "header" && "title-btn-nav"}>
              Proyectos
            </span>{" "}
            <AiOutlineFolderOpen
              className={`ri ${ubicacion === "header" && "ri-header-movil"}`}
            />
          </li>
        </a>
        <a
          href="https://wa.me/3013840225"
          target="_blank"
          className={`btn btn-contactarme ${
            ubicacion === "header" && "btn-header-contactarme-movil"
          }`}
        >
          <li className={`ul-li-item-menu ${ubicacion==='header' && 'ul-li-item-menu-movil'}`}>
            <span className={ubicacion === "header" && "title-btn-nav"}>
              Contactarme
            </span>
            <ImWhatsapp
              className={`ri ${ubicacion === "header" && "ri-header-movil"}`}
            />
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
