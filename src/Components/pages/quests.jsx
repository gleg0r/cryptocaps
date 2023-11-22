import React from "react";
import style from "./style.module.scss"
import Header from "../header";

function Quests() {
    
    return(
        <div className={style.Quests}>
            <div className={style.header}>
                <Header/>
            </div>
            <h1>Quests</h1>
        </div>
    )
}

export default Quests