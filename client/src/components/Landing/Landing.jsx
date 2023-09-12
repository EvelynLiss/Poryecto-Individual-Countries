import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={style.container}>
            <Link to="/home">
                <button className={style.button}>Ir a home</button>
            </Link>
        </div>

    )
}


export default Landing