import React from "react";
import style from "./home.module.scss"
import Header from "../header/header";
function Home() {
    return(
        <div className={style.Home}>
            <Header/>
        </div>
    )
}

export default Home