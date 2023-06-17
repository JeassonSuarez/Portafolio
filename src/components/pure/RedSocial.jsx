import React from "react";

import '../../styles/redSocial.css'

const RedSocial = ({ texto, children }) => {
  return (
    <figure className="figure-red-social">
      {children}
      <figcaption>{texto}</figcaption>
    </figure>
  );
};

export default RedSocial;
