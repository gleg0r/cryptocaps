import React from "react";
import style from "./style.module.scss"
import Header from "../header";
import MainBlock from "../home/components/main_block";
import MascotBlock from "../home/components/mascot_block";

function Home() {
    return(
        <div className={style.Home}>
            <div className={style.wrapper}>
                <div className={style.header}>
                    <Header/>
                </div>
                <div className={style.main_screen}>
                    <MainBlock />
                </div>
            </div>
            <MascotBlock />
            
        </div>
    )
}

export default Home