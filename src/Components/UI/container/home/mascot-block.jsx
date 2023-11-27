import React from "react";
import style from "../styles/mascot-block.module.scss"
import mascot from "../../img/mascot.png"
import GreenBtn from "../../buttons/green-btn";

function MascotBlock() {
    return(
        <div className={style.mascot}>
            <div className={style.mascot__text_block}>
                <div className={style.mascot__text}>
                    <h3 className={style.mascot__title}>Участвуй в захватывающих сражениях</h3>
                    <p className={style.mascot__desc}>Геймплей CRYPTOCAPS основан<br/> на оригинальной игре MILK CAPS, в которой сражаются против других игроков. Каждый поединок стоит один жетон CAPS и требует ставки в NFT-кэпах.</p>
                </div>
            <div className={style.mascot__btns}>
                <GreenBtn height={68} text={'Играть'}/>
            </div>
            </div>
            <div className={style.mascot__block_img}>
            <img className={style.mascot__img} src={mascot} alt="картинка маскота" />
            </div>
        </div>
    )
}

export default MascotBlock