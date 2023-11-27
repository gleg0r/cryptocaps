import React from "react";
import style from "../styles/main-block.module.scss"
import TransparentBtn from "../..//buttons/transparent-btn";
import PurpleBtn from "../../buttons/purple-btn";
import circles from "../../img/portal.png"

function MainBlock() {
    return(
        <div className={style.main}>
            <div>
                <div className={style.main__text}>
                <h1 className={style.main__title}>Перенос классической игры <span>Milk caps</span> НА БЛОКЧЕЙН</h1>
                <p className={style.main__desc}>Выполняй простые квесты и получай бесплатные NFT-кэпы <br />в награду. Собирай коллекции, сражайся с другими игроками, окунись в атмосферу оригинальной игры.</p>
            </div>
            <div className={style.main__btns}>
                <div className={style.main__download_btn}>
                     <TransparentBtn text ={'Скачать приложение'} />
                </div>
                <div>
                    <PurpleBtn text ={'Начать приключение'} />
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