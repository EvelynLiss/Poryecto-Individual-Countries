import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from 'react-router-dom';
import style from "./NavBar.module.css";

const NavBar = () => {  
    const location = useLocation(); 
    const allowedRoutes = ['/home', '/detail/:id', '/activities', "/createActivity"];

    if (allowedRoutes.includes(location.pathname)) {
        return (
            <nav className={style.navBar}>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/activities">Activities</Link></li>
                    <li><Link to="/createActivity">Form</Link></li>
                </ul>
                <SearchBar />
            </nav>
        );
    } else {
        return null;
    }
}

export default NavBar;

 
