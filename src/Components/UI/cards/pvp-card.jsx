import React from "react";
import CardBg from "./card-bg";
import style from "./pvp-card.module.scss"
import greenHeader from "../img/green-header.svg"

function PvpCard({phoneCaps, hands, phoneGame}) {

    const shadow = "drop-shadow(0px 0px 10px #81BD60)"

    return (
        <div className={style.pvp_card}>
            <div className={style.container}>
                <CardBg 
                    number={"01"}
                    color={'linear-gradient(180deg, #282828 0%, #4A6739 100%)'}
                    header={greenHeader}
                    shadow={shadow}
                />
                <h4 className={style.title}>
                    Выбирай своих героев <br/>
                    и готовься к битве
                </h4>
                <img className={style.phone_img} src={phoneCaps} alt="iphone with caps" />
            </div>
            <div className={style.container}>
                <CardBg 
                    number={"02"}
                    color={'linear-gradient(158deg, #282828 0%, #4A6739 100%)'}
                    header={greenHeader}
                    shadow={shadow}
                />
                <img className={style.hands} src={hands} alt="mascot's left hand" />
                <h4 className={style.title_middle}>
                    Играй в «камень, ножницы, бумага», <br />
                    чтобы определить ходы.
                </h4>
            </div>
            <div className={style.container}>
                <CardBg 
                    number={"03"}
                    color={'linear-gradient(315deg, #282828 0%, #4A6739 100%)'}
                    header={greenHeader}
                    shadow={shadow}
                />
                <h4 className={style.title}>
                    Сражайся с другими <br/>
                    игроками 
                </h4>
                <img className={style.phone_img} src={phoneGame} alt="iphone with games" />
            </div>
        </div>
    )
}

export default PvpCard