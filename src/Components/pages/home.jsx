import React from "react";
import style from "./style.module.scss"
import Header from "../UI/container/header";
import MainBlock from "../UI/container/home/main-block";
import MascotBlock from "../UI/container/home/mascot-block";
import CardsBlock from "../UI/container/home/cards";

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
            <CardsBlock />
        </div>
    )
}

export default Home