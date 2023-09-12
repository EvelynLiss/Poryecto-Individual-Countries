import React from "react";
import style from "./CardActivity.module.css";

const CardActivity = ({ name, difficulty, season, nameCountry, flag }) => {
  return (
    <div className={style.cardContainer}>
      <p className={style.activityName}>{name}</p>
      <p className={style.difficulty}>Difficulty: {difficulty}</p>
      <p className={style.season}>Season: {season}</p>
      <p className={style.countryName}>Country:{nameCountry}</p>
      <img className={style.flagImage} src={flag} alt={name} />
    </div>
  );
};

export default CardActivity;
