import React from "react";
import style from "./pve-card.module.scss"
import CardBg from "./card-bg";
import purpleHeader from "../img/purple-header.svg"

function  PveCard({caps, ball, capsNft}) {

    const shadow = "drop-shadow(0px 0px 10px #8531E9)"

    return (
        <div className={style.pve_card}>
            <div className={style.container}>
                <CardBg 
                    number={"01"}
                    color={'linear-gradient(203deg, #282828 4.75%, #2F2C40 27.97%, #332F4F 47.32%, #4D3FB3 100%)'}
                    header={purpleHeader}
                    shadow={shadow}
                />
                <h4 className={style.title}>
                    Выполняй ежедневные<br/>
                    задания
                </h4>
                <img className={style.caps} src={caps} alt="iphone with caps" />
            </div>
            <div className={style.container}>
                <CardBg 
                    number={"02"}
                    color={'linear-gradient(155deg, #282828 3.87%, #2D2B3B 24.66%, #4D3FB3 97.14%)'}
                    header={purpleHeader}
                    shadow={shadow}
                />
                <img className={style.ball} src={ball} alt="mascot's left hand" />
                <h4 className={style.title_middle}>
                    Проходи квесты
                </h4>
            </div>
            <div className={style.container}>
                <CardBg 
                    number={"03"}
                    color={'linear-gradient(180deg, #282828 0%, #4E4494 100%)'}
                    header={purpleHeader}
                    shadow={shadow}
                />
                <h4 className={style.title}>
                    Зарабатывай xp и <br/>
                    получай NFT-кэпы
                </h4>
                <img className={style.caps_nft} src={capsNft} alt="iphone with games" />
            </div>
        </div>
    )
}

export default PveCard