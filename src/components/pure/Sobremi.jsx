import React from "react";
import foto from "../../imagenes/presentacion/foto sin fondo.png";
import "../../styles/sobremi.css";
import { AiOutlineCloudDownload } from "react-icons/ai";
import cv from '../../assets/CV JEASSON SUAREZ.pdf'

const Sobremi = () => {
  return (
    <div className="div-contenedor-sobremi">
      <div className="sobremi-texto">
        <h3>Desarrollador Frontend</h3>
        <p>
          ¡Hola! Soy Jeasson, un apasionado desarrollador Frontend con
          experiencia en el desarrollo de aplicaciones web. Desde mis días en el
          colegio, descubrí mi pasión por la programación y desde entonces, no
          he dejado de aprender y crecer en este emocionante campo.
        </p>
        <p>Mis habilidades y conocimientos incluyen:</p>
        <ul>
          <li className="info-ul-li">
            Desarrollo Frontend con ReactJS, JavaScript, HTML y CSS
            {/* : Me encanta
            crear interfaces atractivas y funcionales utilizando tecnologías
            modernas de desarrollo web. */}
          </li>
          <li className="info-ul-li">
            Conocimientos básicos en el diseño de bases de datos utilizando
            Oracle, PostgreSQL, MySQL
            {/* : Estoy en proceso de aprendizaje y puedo
            diseñar estructuras de datos simples para garantizar un rendimiento
            eficiente de las aplicaciones. */}
          </li>
          <li className="info-ul-li">
            Familiaridad con el desarrollo de REST API utilizando NodeJS y
            ExpressJS
            {/* : Estoy en la etapa de aprender a construir API sólidas y
            escalables para facilitar la comunicación entre el frontend y el
            backend. */}
          </li>
          {/* <li className="info-ul-li">
            Desarrollo de aplicaciones de escritorio con JAVA: Tengo experiencia
            limitada en la creación de aplicaciones de escritorio utilizando
            Java.
          </li> */}
          <li className="info-ul-li">
            Manejo de versionamiento con Git y GitHub
            {/* : Utilizo herramientas de
            control de versiones para colaborar de manera efectiva en proyectos
            y mantener un registro claro de los cambios realizados en el código. */}
          </li>
        </ul>
        <p>
          {/* Desde mis primeros acercamientos con HTML y Java, mi pasión por la
          programación ha seguido creciendo y me ha impulsado a seguir
          aprendiendo y actualizándome constantemente en las últimas tecnologías
          y mejores prácticas del mundo del desarrollo web.
          <br></br>
          <br></br> */}
          Estoy emocionado por seguir explorando nuevas oportunidades y
          enfrentar desafíos apasionantes en el campo del desarrollo Frontend.
          Siempre estoy buscando formas de mejorar y superar las expectativas en
          cada proyecto en el que participo.
        </p>
        <a href={cv} download className="btn">
          Descargar CV
          <AiOutlineCloudDownload className="ri" />
        </a>
      </div>
      <div className="sobremi-foto">
        <img src={foto} alt="foto" title="foto" className="img-foto" />
      </div>
    </div>
  );
};

export default Sobremi;
