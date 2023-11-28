import React from "react";
import style from "../styles/caps-block.module.scss"
import commonCap from "../../img/common_cap.svg"
import uppedCap from "../../img/upped_cap.svg"
import CapCard from "../../caps/cap";
import basicCap from "../../img/basic_cap.png"
import rareCap from "../../img/rare_cap.png"
import legendaryCap from "../../img/legendary_cap.png"

function CapsBlock() {
    return(
        <div className={style.caps_block}>
            <div className={style.header}>
                <h2 className={style.title}>
                    Кэпы-NFT имеют 3 уровня:
                </h2>
                <p className={style.title_desc}>
                    Каждому уровню присвоен собственный показатель<br/>
                    успеха, который может повлиять на исход боя
                </p>
            </div>
            <div className={style.caps_desc}>
                <div className={style.cap_common}>
                    <img className={style.img_common} src={commonCap} alt="обычная фишка" />
                    <p className={style.desc_common}>
                        +1-2%<br/>
                        Шанс на победу
                    </p>
                </div>
                <div className={style.cap_upped}>
                    <img className={style.img_upped} src={uppedCap} alt="фишка повышенного уровня" />
                    <p className={style.text_upped}>Повышенный</p>
                    <p className={style.desc_upped}>
                        +3-5%<br/>
                        Шанс на победу
                    </p>
                </div>
                <p className={style.text}>
                Собери 10 базовых кэпов - NFT и получи возможность <br/>
                обменять их, улучшив до 1 редкого, остальные 9 будут <br/>
                сожжены. Таким же образом ты можешь собрать <br/>
                10 редких и получить 1 легендарного. 
                </p>
            </div>
            <div className={style.rare}>
                <div className={style.item_1}>
                    <CapCard 
                        header={'Базовый'}
                        percent={'+1-2%'}
                        cap={basicCap}
                        theme={'5 ТЕМ ПО'}
                        count={'1000 В КАЖДОЙ'}
                        spacing={112}
                        mtop={75}
                        mright={125}
                        size={'12px 46px'}
                    />
                </div>
                <div className={style.item_2}>
                
                    <CapCard 
                        header={'Редкий'}
                        percent={'+3-5%'}
                        cap={rareCap}
                        theme={'5 ТЕМ ПО'}
                        count={'200 В КАЖДОЙ'}
                        spacing={68}
                        mtop={75}
                        mright={148}
                        size={'12px 52px'}
                    />
                </div>
                <div className={style.item_3}>
                    <CapCard 
                        header={'Легендарный'}
                        percent={'+7-15%'}
                        cap={legendaryCap}
                        theme={'20 УНИКАЛЬНЫХ'}
                        spacing={32}
                        mtop={76}
                        mright={36}
                        size={'26px 38px'}
                    />
                </div>

            </div>
        </div>
    )
}

export default CapsBlock