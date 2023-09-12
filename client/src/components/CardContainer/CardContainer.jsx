import React from "react";
import Card from "../Card/Card";
import style from "./CardContainer.module.css"; // Importa el archivo de estilos

const CardContainer = ({countries}) => {


  if (countries.length) {
    return (
      <div className={style.cardGrid}>
        {countries.map((country, i) => (
          <div key={i}>
          <Card country={country} />
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default CardContainer;


