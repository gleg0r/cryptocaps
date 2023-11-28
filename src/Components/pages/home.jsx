import React from "react";
import style from "./style.module.scss"
import Header from "../UI/container/header";
import MainBlock from "../UI/container/home/main-block";
import MascotBlock from "../UI/container/home/mascot-block";
import CardsBlock from "../UI/container/home/cards";
import CapsBlock from "../UI/container/home/caps-block";
import FeatureBlock from "../UI/container/home/features";


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
            <div className={style.wrap}>
                <CapsBlock />
                <FeatureBlock />
            </div>

        </div>
    )
}

export default Home