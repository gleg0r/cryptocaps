import React from "react";
import style from "./styles/rating-block.module.scss"
import PurpleBtn from "../buttons/purple-btn"
import claw from "../img/bg_rating.png"

function RatingBlock() {
    return(
        <div className={style.rating}>
            <div className={style.wrapper}>
                <div className={style.text}>
                    <h3 className={style.title}>Рейтинг участников</h3>
                    <p className={style.desc}>Выполняй задания, чтобы получить опыт, собрать коллекцию NFT-кэпов и поднять свое имя в таблице лидеров!</p>
                    <div className={style.btn}>
                        <PurpleBtn
                            text={'Посмотреть рейтинг'}
                        />
                    </div>

                </div>

                <img className={style.img} src={claw} alt="" />
            </div>
        </div>
    )
}

export default RatingBlock