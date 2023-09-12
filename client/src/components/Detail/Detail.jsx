import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryById } from '../../redux/actions';
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country); 

  const { countryKey } = useParams();

  useEffect(() => {
    dispatch(getCountryById(countryKey));
  }, [dispatch, countryKey]);
  

  return (
    <div className= {style.detail}>
      <h2>{country.name}</h2>
      <img src={country.flag} alt="Flag of the country" />
      <div>
        <b>ID:</b> {country.id}
      </div>
      <div>
        <b>Continent:</b> {country.continent}
      </div>
      <div>
        <b>Capital:</b> {country.capital}
      </div>
      <div>
        <b>Population:</b> {country.population}
      </div>
    </div>
  );
};

export default Detail;




