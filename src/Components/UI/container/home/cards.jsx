import React from "react";
import PvpCard from "../../cards/pvp-card";
import PveCard from "../../cards/pve-card";
import style from "../styles/cards-block.module.scss"
import phoneWithCaps from "../../img/mobile_caps.png"
import phoneWithGame from "../../img/mobile_game.png"
import hands from "../../img/hands.png"
import caps from "../../img/caps.png"
import ball from "../../img/ball.png"
import capsNft from "../../img/caps-nft.png"

function CardsBlock() {
    return(
        <div className={style.pvp}>
            <div className={style.pvp_block}>
                <h3 className={style.pvp__title}>pvp</h3>
                <p className={style.pvp__desc}>
                Делай ставку и играй против других игроков<br/>
                Получай NFT за победу
                </p>
                <div className={style.pvp__cards}>
                    <PvpCard
                        phoneCaps={phoneWithCaps}
                        hands={hands}
                        phoneGame={phoneWithGame}
                    />
                </div>  
            </div>
            <div className={style.pve_block}>
                <h3 className={style.pvp__title}>pve</h3>
                <p className={style.pvp__desc}>
                    Выполняй задания и проходи квесты<br/>
                    Получай NFT-кэпы за достижения
                </p>
                <div className={style.pvp__cards}>
                    <PveCard
                        caps={caps}
                        ball={ball}
                        capsNft={capsNft}
                    />
                </div>  
            </div>
        </div>
    ) 
}

export default CardsBlock