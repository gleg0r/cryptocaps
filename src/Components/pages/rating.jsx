import React from "react";
import style from "./style.module.scss"
import Header from "../header";

function Rating() {
    return(
        <div className={style.Rating}>
            <div className={style.header}>
                <Header/>
            </div>
            <h1>Rating</h1>
        </div>
    )
}

export default Rating