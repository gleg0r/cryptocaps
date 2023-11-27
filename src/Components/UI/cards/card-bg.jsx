import React from "react";
import style from "./card-bg.module.scss"

function CardBg({number, color, header, shadow}) {
    return (
        <div 
            style={{background: color}}
            className={style.pvp_card_bg}>
            <div 
                
                className={style.pvp_card_bg__header}>
                    <div style={{filter: shadow}}>
                        <img className={style.img} src={header} alt="" />
                    </div>
                
                <h3 className={style.pvp_card_bg__title}>{number}</h3>
            </div>
        </div>
    )
}

export default CardBg