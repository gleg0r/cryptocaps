import React from "react";
import style from "./style.module.scss"
import Header from "../UI/container/header";
import MainBlock from "../UI/container/home/main-block";
import MascotBlock from "../UI/container/home/mascot-block";
import CardsBlock from "../UI/container/home/cards";
import CapsBlock from "../UI/container/home/caps-block";
import FeatureBlock from "../UI/container/home/features";
import QuestsBlock from "../UI/container/home/quests-block";
import RatingBlock from "../UI/container/rating-block";
import NewsBlock from "../UI/container/home/news-block";
import DownloadBlock from "../UI/container/home/download-block";
import Footer from "../UI/container/footer";

function Home() {

    document.body.style.overflow="auto";
    document.body.style.overflowX="hidden"
;

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
            <QuestsBlock />
            <RatingBlock />
            <NewsBlock />
            <div className={style.lights}>
                <DownloadBlock />
            </div>
            <Footer />    
        </div>
    )
}

export default Home