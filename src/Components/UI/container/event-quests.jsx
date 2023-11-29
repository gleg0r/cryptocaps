import React from "react";
import style from "./styles/event-quests.module.scss";
import TransparenBtn from "../buttons/transparent-btn"
import QuestCard from "../cards/quest-card";


function Event() {
    return(
        <div className={style.event}>
            <div>
                <h4>Новогодний ивент</h4>
                <TransparenBtn />
            </div>
            <div>
                <QuestCard />
            </div>
        </div>
    )
}

export default Event