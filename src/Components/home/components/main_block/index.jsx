import React from "react";
import style from "./style.module.scss"
import DownloadBtn from "./downloadBtn";
import StartBtn from "./startBtn";
import circles from "../../img/circles.png"

function MainBlock() {
    return(
        <div className={style.main}>
            <div>
                <div className={style.main__text}>
                <h1 className={style.main__title}>Перенос классической игры <span>Milk caps</span> НА БЛОКЧЕЙН</h1>
                <p className={style.main__desc}>Выполняй простые квесты и получай бесплатные NFT-кэпы в награду. Собирай коллекции, сражайся с другими игроками, окунись в атмосферу оригинальной игры.</p>
            </div>
            <div className={style.main__btns}>
                <div className={style.main__download_btn}>
                     <DownloadBtn />
                </div>
                <div>
                    <StartBtn />
                </div>
            </div>
            </div>
            <div className={style.main__block_img}>
                <img className={style.main__img} src={circles} alt="картинка с фишками" />
            </div>
        </div>
    )
}

export default MainBlock