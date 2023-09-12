import { GET_ALL_ACTIVITIES,FILTER_BY_CONTINENT, FILTER_BY_ACTIVITY,ORDER_ALPHABETICAL,ORDER_POPULATION, GET_ALL_COUNTRIES, GET_COUNTRY_BY_ID, GET_COUNTRY_BY_NAME } from "./actionsTypes";

const initialState = {
    countries: [],
    countriesCopy:[],
    country: {},
    activities: [],
   
 


}
export const rootReducer=(state=initialState, action)=>{
 switch(action.type) {
    case GET_ALL_COUNTRIES :
      return {...state, 
        countries: action.payload,
        countriesCopy: action.payload
      }

    case GET_COUNTRY_BY_ID :
      return {...state, country: action.payload }

      case GET_COUNTRY_BY_NAME : 
      return {...state, countries : action.payload}

      case GET_ALL_ACTIVITIES : 
      return {...state, activities : action.payload}

      

      case FILTER_BY_CONTINENT:
      const countriesByContinent = state.countriesCopy.filter(
        country => country.continent === action.payload
      );
      return {
        ...state,
        countries: action.payload === 'allCountries' ? [...state.countriesCopy] : countriesByContinent
      };
     
      case FILTER_BY_ACTIVITY:
   
        const filterActivity = state.activities.filter((activity) => {
          return activity.name === action.payload; 
        });
      
        console.log(filterActivity);
      
        const countriesByActivity = filterActivity.length > 0 ? filterActivity[0].Countries : [];
      
        return {
          ...state,
          countries: action.payload === 'allCountries' ? [...state.countriesCopy] : countriesByActivity
        };
      

    case ORDER_ALPHABETICAL:
      const countriesOrderAlphabetical = [...state.countries];
      countriesOrderAlphabetical.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      return {
        ...state,
        countries: action.payload === 'A' ? countriesOrderAlphabetical : countriesOrderAlphabetical.reverse()
      };

    case ORDER_POPULATION:
      const countriesOrderPopulation = [...state.countries];
      countriesOrderPopulation.sort((a, b) => {
        return a.population - b.population;
      });
      return {
        ...state,
        countries: action.payload === 'A' ? countriesOrderPopulation : countriesOrderPopulation.reverse()
      };
  
    
    default: 

    return {...state} ; 
 }
}

