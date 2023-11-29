import React from "react";
import { useState } from "react";
import style from "./quest-card.module.scss"
import purpleHeader from "../img/purple_header_bg_quest.svg";
import santaLeft from "../img/santa_1.png";
import bg from "../img/purple_bg_quest.svg"
function QuestCard() {
    const [hover, setHover] = useState(false)
    function shadowAppear() {
        const bgCard = document.getElementById("background")
        if(hover === false) {
            bgCard.style.filter = "drop-shadow(0px 0px 10.64935px #8531E9)"
            setHover(true)
        } else {
            bgCard.style.filter = "none"
            setHover(false)
        }

    }

    return(
        <div className={style.card} onMouseEnter={shadowAppear} onMouseLeave={shadowAppear}>
            <img id="background" className={style.background} src={bg} alt="" />
            <div className={style.header}>
                <img className={style.header_bg} src={purpleHeader} alt="" />
                <p className={style.header_title}>Новое</p>
            </div>
            <div className={style.container}>
                <div className={style.main}>
                    <img src={santaLeft} alt="" />
                    <h4 className={style.main_title}>Мастерская Санты</h4>
                    <p className={style.main_desc}>CryptoCaps</p>
                </div>
                <div className={style.footer}>

                </div>
            </div>
        </div>
    )
}

export default QuestCard