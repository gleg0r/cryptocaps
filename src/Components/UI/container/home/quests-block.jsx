import React from "react"; 
import style from "../styles/quests-block.module.scss"
import Event from "../event-quests";
import TopQuests from "../top-quests";

function QuestsBlock() {
    return(
        <div className={style.quests}> 
            <h3 className={style.title}>Квесты</h3>
            <div>
                <Event /> 
            </div>
            <div className={style.top}>
                <TopQuests />
            </div>
            
        </div>
    )
}

export default QuestsBlock