import React from "react";

const Tecnologia = ({ titulo, children}) => {
  return (
    <div className="div-container-tecnologia">
      {children}
      <h3 className="tecnologias-titulo">{titulo}</h3>
    </div>
  );
};

export default Tecnologia;
