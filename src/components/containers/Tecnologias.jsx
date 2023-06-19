import React from "react";
import Tecnologia from "../pure/Tecnologia";
import "../../styles/Tecnologias.css";

const Tecnologias = () => {
  return (
    <div className="div-contenedor-tecnologias">
      <Tecnologia titulo="Bases de Datos">
        <div className="div-container-img">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            alt="postgresql"
            className="img-tec"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
            alt="mysql"
            className="img-tec"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg"
            alt="oracle"
            className="img-tec"
          />
        </div>
      </Tecnologia>
      <Tecnologia titulo="Desarrollo Frontend">
        <div className="div-container-img">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            className="img-tec"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            className="img-tec"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            className="img-tec"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            className="img-tec"
          />
        </div>
      </Tecnologia>
      <Tecnologia titulo="Desarrollo Backend">
        <div className="div-container-img">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
            alt="express"
            className="img-tec"
          />
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            className="img-tec"
          />
        </div>
      </Tecnologia>
      <Tecnologia titulo="Otros">
        <div className="div-container-img">
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="java"
            className="img-tec"
          />
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            className="img-tec"
          />
          <img
            src="https://raw.githubusercontent.com/simple-icons/simple-icons/1cdbe1775eb0f46f0b1b89f219142e80de178830/icons/github.svg"
            alt="git"
            className="img-tec"
          />
        </div>
      </Tecnologia>
    </div>
  );
};

export default Tecnologias;
