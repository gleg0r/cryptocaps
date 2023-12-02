import React from "react";
import style from "./styles/event-quests.module.scss";
import TransparenBtn from "../buttons/transparent-btn"
import QuestCard from "../cards/quest-card";
import santaLeft from "../img/top_1.png";
import bgPurple from "../img/purple_bg_quest.svg"
import bgGreen from "../img/green_bg_quest.svg"
import santaMiddle from "../img/top_2.png";
import santaRight from "../img/top_3.png";
import purpleHeader from "../img/purple_header_bg_quest.svg";
import greenHeader from "../img/green_header_bg_quest.svg";
import purplePacman from "../img/pacman.svg"
import purplePerson from "../img/person.svg"
import purpleMedal from "../img/medal.svg"
import greenPacman from "../img/green_pacman.svg"
import greenPerson from "../img/green_person.svg"
import greenMedal from "../img/green_medal.svg"

function Event() {
    return(
        <div className={style.event}>
            <div className={style.header}>
                <h4 className={style.title}>Топовые</h4>
                <div className={style.btn}>
                    <TransparenBtn 
                        text={'Смотреть больше'}
                        width={'189px'}
                        height={'40px'}
                        size={'16px'}
                        weight={'400px'}
                        lHeight={'20px'}
                        padding={"0px 23px"}
                        radius={"12px"}
                    />
                </div>

            </div>
            <div className={style.cards}>
                <div className={style.left}>
                    <QuestCard 
                        idPic={"leftPicTop"}
                        idBg={"leftBgTop"}
                        idHead={"leftHeadTop"}
                        idPacman={"leftPacmanTop"}
                        idPerson={"leftPersonTop"}
                        idMedal={"leftMedalTop"}
                        title={'Охота за токенами'}
                        desc={'CryptoCaps'}
                        img={santaLeft}
                        bg={bgGreen}
                        headerBg={greenHeader}
                        colorShadow={"drop-shadow(0px 0px 9.64935px #81BD60)"}
                        textColor={"#171717"}
                        pacmanIcon={greenPacman}
                        personIcon={greenPerson}
                        medalIcon={greenMedal}
                        green={true}
                    />
                </div>
                <div className={style.middle}>
                    <QuestCard 
                        idPic={"middlePicTop"}
                        idBg={"middleBgTop"}
                        idHead={"middleHeadTop"}
                        idPacman={"middlePacmanTop"}
                        idPerson={"middlePersonTop"}
                        idMedal={"middleMedalTop"}
                        title={'Мастер NFT'}
                        desc={'Ekaterina Soboleva'}
                        img={santaMiddle}
                        bg={bgPurple}
                        headerBg={purpleHeader}
                        colorShadow={"drop-shadow(0px 0px 9.64935px #8531E9)"}
                        textColor={"#FDFAFF"}
                        pacmanIcon={purplePacman}
                        personIcon={purplePerson}
                        medalIcon={purpleMedal}
                        green={false}
                    />
                </div>
                <div className={style.right}>
                    <QuestCard 
                        idPic={"rightPicTop"}
                        idBg={"rightBgTop"}
                        idHead={"rightHeadTop"}
                        idPacman={"rightPacmanTop"}
                        idPerson={"rightPersonTop"}
                        idMedal={"rightMedalTop"}
                        title={'Криптоимперия'}
                        desc={'Valeri'}
                        img={santaRight}
                        bg={bgPurple}
                        headerBg={purpleHeader}
                        colorShadow={"drop-shadow(0px 0px 9.64935px #8531E9)"}
                        textColor={"#FDFAFF"}
                        pacmanIcon={purplePacman}
                        personIcon={purplePerson}
                        medalIcon={purpleMedal}
                        green={false}
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Event