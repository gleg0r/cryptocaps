import React from "react"; 
import style from "../styles/quests-block.module.scss"
import Event from "../event-quests";
import TopQuests from "../top-quests";

function QuestsBlock() {
    return(
        <div className={style.quests}> 
            <h3 className={style.title}>Квесты</h3>
            <Event />
            <TopQuests />
        </div>
    )
}

export default QuestsBlock