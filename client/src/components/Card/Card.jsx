import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ key, country }) => {
  return (
    <div className={style.cardContainer} id={key}>
      <img className={style.flagImage} src={country.flag} alt={country.name} />
      <h3 className={style.countryName}><Link to={`/detail/${country.id}`}>{country.name}</Link></h3>
      <h4 className={style.continent}>Continente: {country.continent}</h4>
      <p className={style.population}>Población: {country.population}</p>
    </div>
  );
};

export default Card;
