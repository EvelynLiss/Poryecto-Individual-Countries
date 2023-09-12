import React, { useState, useEffect } from "react";
import CardContainer from "../CardContainer/CardContainer";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css";
import { getAllActivities, getAllCountries } from "../../redux/actions";
import Pagination from "../Pagination/pagination";
import Filters from "../Filter/Filter";


const Home = () => {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities())
    dispatch(getAllCountries());
  }, [dispatch]);
  
  const countries = useSelector((state) => state.countries);
  
  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const indexOfLastCountry = currentPage * itemsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - itemsPerPage
const currentCountries = countries.slice(indexOfFirstCountry, indexOfLastCountry);




  const paginate = (pageNumber) => {

    setCurrentPage(pageNumber);
    setItemsPerPage(10)
  };

  return (
    <div>
      <div>
        <Filters />
      </div>
       <div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={countries.length}
          paginate={paginate}
        />
      </div>
      <div className={style.cardsContainer}>
        <CardContainer
          countries={currentCountries} />
      </div>
     
    </div>
  );
};

export default Home;

