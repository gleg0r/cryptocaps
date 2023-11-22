import React from "react";
import style from "./style.module.scss"
import Header from "../header";
function Home() {
    return(
        <div className={style.Home}>
            <div className={style.header}>
                <Header/>
            </div>
            
        </div>
    )
}

export default Home