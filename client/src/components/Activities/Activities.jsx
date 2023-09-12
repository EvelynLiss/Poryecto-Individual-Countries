import React, { useEffect } from "react";
import { getAllActivities } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import CardActivity from "../CardActivity/CardActivity";
import style from "./Activities.module.css"; // Importa el archivo de estilos

const Activities = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllActivities());
  }, []);
  const activities = useSelector((state) => state.activities);

  return (
    <div className={style.cardContainer}>
      {activities.map((activity) => (
        <CardActivity
          key={activity.id}
          name={activity.name}
          difficulty={activity.difficulty}
          season={activity.season}
          nameCountry={activity.Countries[0].name}
          flag={activity.Countries[0].flag}
        />
      ))}
    </div>
  );
};

export default Activities;
