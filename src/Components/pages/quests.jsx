import React from "react";
import style from "./style.module.scss"
import Header from "../UI/container/header";
import Event from "../UI/container/event-quests";
import TopQuests from "../UI/container/top-quests";
import RatingBlock from "../UI/container/rating-block"
import Footer from "../UI/container/footer"
import TimeQuests from "../UI/container/quests/time-quests";

function Quests() {
    
    return(
        <div className={style.quests}>
            <div className={style.header}>
                <Header/>
            </div>
            <div className={style.quests_main}>
                <div className={style.quests_event}>
                    <Event /> 
                </div>
                <div className={style.quests_top}>
                    <TopQuests />
                </div>
                <div className={style.quests_rating}>
                    <RatingBlock />
                </div>
                <div>
                    <TimeQuests />
                </div>
            </div>
            <div className={style.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Quests