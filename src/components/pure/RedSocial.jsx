import React from "react";

import '../../styles/redSocial.css'

const RedSocial = ({ texto, link, children }) => {
  return (
    <a href={link} target="_blank" className="a-red-social">
      <figure className="figure-red-social">
        {children}
        <figcaption>{texto}</figcaption>
      </figure>
    </a>
  );
};

export default RedSocial;
