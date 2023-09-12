import React, { useState, useEffect} from "react"
import axios from "axios"
import {useSelector, useDispatch} from "react-redux"
import {getAllCountries} from "../../redux/actions"
import { useNavigate } from "react-router-dom";
import style from "./Form.module.css"


const Form = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(getAllCountries())
    }, []);

   


    const countries = useSelector((state) => state.countries)
    const orderCountries = countries ? countries.slice() : []
    const order = orderCountries ? orderCountries.sort((a,b) => a.commonName > b.commonName ? 1 : -1) : []
    
    const navigate = useNavigate();

    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        season: "",
        countryId: "KEN"
    })
    const [errors, setErrors] = useState({
        name: "",
        difficulty: "",
        season: "",
        countryId: ""
    })
    function validate(form) {
        const newErrors = {};
    
        if (!/^[^0-9]*$/.test(form.name)) {
            newErrors.name = "No es posible poner números";
        } else {
            newErrors.name = ""  ; 
        }
    
        if (!/^[1-5]$/.test(form.difficulty)) {
            newErrors.difficulty = "Solo números del 1 al 5";
        } else {
            newErrors.difficulty = "" ;
        }
    
        setErrors(prevState => ({ ...prevState, ...newErrors }));
    }
    
   
    const handlerChange = (e) => {

        setActivity({ ...activity, [e.target.name]: e.target.value })
        validate({ ...activity, [e.target.name]: e.target.value })

    }
    const buttonHome = () => {
        navigate("/home")
    }
    const handlerSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/activity", activity)
        .then(res => alert(res.data.message))
        
    }
    return (
        <>
        
          <div className={style.formContainer}>
            
            <form onSubmit={handlerSubmit} className="form">
              <div className={style.formField}>
                <label htmlFor="name">Nombre de la actividad:</label>
                <input type="text" onChange={handlerChange} value={activity.name} name="name" />
                <span className={style.error}>{errors.name}</span>
              </div>
              <div className={style.formField}>
                <label htmlFor="difficulty">Dificultad</label>
                <input type="text" onChange={handlerChange} value={activity.difficulty} name="difficulty" />
                <span className={style.error}>{errors.difficulty}</span>
              </div>
              <div className={style.formField}>
                <label htmlFor="season">Temporada:</label>
                <select name="season" value={activity.season} onChange={handlerChange}>
                  <option value="Winter">Invierno</option>
                  <option value="Summer">Verano</option>
                  <option value="Autumn">Otoño</option>
                  <option value="Spring">Primavera</option>
                </select>
              </div>
              <div className={style.formField}>
                <label htmlFor="countryId">Country</label>
                <select name="countryId" value={activity.countryId} onChange={handlerChange}>
                  <option value="">.</option>
                  {order ? order.map((country) => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                  )) : []}
                </select>
              </div>
              <button className={style.submitButton}>Crear Actividad</button>
            </form>
          </div>
        </>
      );
}

export default Form