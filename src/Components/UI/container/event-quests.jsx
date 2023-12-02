import React from "react";
import style from "./styles/event-quests.module.scss";
import TransparenBtn from "../buttons/transparent-btn"
import QuestCard from "../cards/quest-card";
import santaLeft from "../img/santa_1.png";
import bgPurple from "../img/purple_bg_quest.svg"
import bgGreen from "../img/green_bg_quest.svg"
import santaMiddle from "../img/santa_2.png";
import santaRight from "../img/santa_3.png";
import purpleHeader from "../img/purple_header_bg_quest.svg";
import greenHeader from "../img/green_header_bg_quest.svg";
import purplePacman from "../img/pacman.svg"
import pruplePerson from "../img/person.svg"
import puprleMedal from "../img/medal.svg"
import greenPacman from "../img/green_pacman.svg"
import greenPerson from "../img/green_person.svg"
import greenMedal from "../img/green_medal.svg"

function Event() {
    return(
        <div className={style.event}>
            <div className={style.header}>
                <h4 className={style.title}>Новогодний ивент</h4>
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
                        idPic={"leftPic"}
                        idBg={"leftBg"}
                        idHead={"leftHead"}
                        idPacman={"leftPacman"}
                        idPerson={"leftPerson"}
                        idMedal={"leftMedal"}
                        title={'Мастерская Санты'}
                        desc={'Egor Voronin'}
                        img={santaLeft}
                        bg={bgPurple}
                        headerBg={purpleHeader}
                        colorShadow={"drop-shadow(0px 0px 9.64935px #8531E9)"}
                        textColor={"#FDFAFF"}
                        pacmanIcon={purplePacman}
                        personIcon={pruplePerson}
                        medalIcon={puprleMedal}
                        green={false}
                    />
                </div>
                <div className={style.middle}>
                    <QuestCard 
                        idPic={"middlePic"}
                        idBg={"middleBg"}
                        idHead={"middleHead"}
                        idPacman={"middlePacman"}
                        idPerson={"middlePerson"}
                        idMedal={"middleMedal"}
                        title={'Рождественские тайны'}
                        desc={'Skillfactory'}
                        img={santaMiddle}
                        bg={bgPurple}
                        headerBg={purpleHeader}
                        colorShadow={"drop-shadow(0px 0px 9.64935px #8531E9)"}
                        textColor={"#FDFAFF"}
                        pacmanIcon={purplePacman}
                        personIcon={pruplePerson}
                        medalIcon={puprleMedal}
                        green={false}
                    />
                </div>
                <div className={style.right}>
                    <QuestCard 
                        idPic={"rightPic"}
                        idBg={"rightBg"}
                        idHead={"rightHead"}
                        idPacman={"rightPacman"}
                        idPerson={"rightPerson"}
                        idMedal={"rightMedal"}
                        title={'Погоня за Рождеством'}
                        desc={'CryptoCaps'}
                        img={santaRight}
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
                
            </div>
        </div>
    )
}

export default Event