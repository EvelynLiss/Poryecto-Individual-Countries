import { GET_ALL_COUNTRIES, 
  GET_COUNTRY_BY_ID,
   GET_COUNTRY_BY_NAME, 
   GET_ALL_ACTIVITIES, 
   ORDER_ALPHABETICAL,
   ORDER_POPULATION,
   FILTER_BY_ACTIVITY,
   FILTER_BY_CONTINENT

  } 
  from "./actionsTypes";

import axios from "axios"



export const getAllCountries = () => {
    return async function (dispatch) {
        const {data} = await axios.get("http://localhost:3001/country")
        dispatch({type: GET_ALL_COUNTRIES, payload: data})
    }
}

export const getCountryById = (id) => {
    return async function (dispatch) {
        const {data} = await axios.get(`http://localhost:3001/country/${id}`)
        console.log(data)
        dispatch({type: GET_COUNTRY_BY_ID, payload: data})
    }
}


export const getCountryByName = (name) => {
  return function (dispatch) {
    axios.get(`http://localhost:3001/country?name=${name}`)
      .then(res => { 
        const response = res.data;
        return dispatch({
          type: GET_COUNTRY_BY_NAME,
          payload: response,
        });
      })
      .catch(error => {
        
        console.error("Error en la solicitud HTTP: ", error);
      });
  };
};

export const getAllActivities = () => {
  return function (dispatch) {
    axios.get(`http://localhost:3001/activity`)
      .then(res => { 
        const response = res.data;
        return dispatch({
          type: GET_ALL_ACTIVITIES,
          payload: response,
        });
      })
      .catch(error => {
        
        console.error("Error en la solicitud HTTP: ", error);
      });
  };
};
export const filterByContinent = (continent) => {
  return { type: FILTER_BY_CONTINENT, payload: continent }
};

export const filterByActivity = (activity) => {
  return { type: FILTER_BY_ACTIVITY, payload: activity }
};

export const orderAlphabetical = (order) => {
  return { type: ORDER_ALPHABETICAL, payload: order }
};

export const orderPopulation = (order) => {
  return { type: ORDER_POPULATION, payload: order }
};