import React from "react";
import style from "../styles/features.module.scss";
import FeatureCard from "../../cards/feature-card";
import wand from "../../img/wand.png"
import org from "../../img/org.png"
import money from "../../img/money.png"

function FeatureBlock() {
    return(
        <div className={style.features}>
            <h3 className={style.title}>Дополнительные возможности</h3>
            <div className={style.cards}>
                <div className={style.card}>
                    <FeatureCard 
                        title={'Пул доходности'}
                        src={wand}
                        desc={'Продвигайся по сюжету и повышай APY'}
                        color={"linear-gradient(155deg, #282828 3.87%, #2D2B3B 24.66%, #4D3FB3 97.14%)"}
                        tTop={43}
                        iTop={15}
                        dTop={-10}
                    />
                </div>
                <div className={style.card_middle}>
                    <FeatureCard 
                        title={'Лутбокс'}
                        src={org}
                        desc={'Выигрывай редкие NFT'}
                        color={"linear-gradient(158deg, #282828 1.59%, #2C2F2A 15.92%, #2F342B 29.85%, #455F36 53.74%, #629545 97.13%)"}
                        tTop={32}
                        iTop={19}
                        dTop={22}
                    />                   
                </div>
                <div className={style.card}>
                    <FeatureCard 
                        title={'Реферальная программа'}
                        src={money}
                        desc={'Возвращай до 40% за потраченный токен'}
                        color={"linear-gradient(155deg, #282828 3.87%, #2D2B3B 24.66%, #4D3FB3 97.14%)"}
                        tTop={32}
                        iTop={-10}
                        dTop={-10}
                    />
                </div>
            </div>
        </div>
        
    )
}

export default FeatureBlock