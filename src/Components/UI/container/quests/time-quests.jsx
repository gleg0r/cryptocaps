import React from "react";
import style from "../styles/time-quests.module.scss";
import SmallQuestCard from "../../cards/small-quest-card";
import bgPurple from "../../img/border_purple.svg";
import hatPurple from "../../img/hat_purple.svg";
import bgGreen from "../../img/border_green.svg";
import hatGreen from "../../img/hat_green.svg";
import purplePacman from "../../img/pacman.svg"
import pruplePerson from "../../img/person.svg"
import puprleMedal from "../../img/medal.svg"
import greenPacman from "../../img/green_pacman.svg"
import greenPerson from "../../img/green_person.svg"
import greenMedal from "../../img/green_medal.svg"
import dailyImgLeft from "../../img/horiz_quest_1.png"
import dailyImgMiddle from "../../img/horiz_quest_2.png"
import dailyImgRight from "../../img/horiz_quest_3.png"
import weeklyImgLeft from "../../img/horiz_quest_4.png"
import weeklyImgMiddle from "../../img/horiz_quest_5.png"
import weeklyImgRight from "../../img/horiz_quest_6.png"
import monthlyImgLeft from "../../img/horiz_quest_7.png"
import monthlyImgMiddle from "../../img/horiz_quest_8.png"
import monthlyImgRight from "../../img/horiz_quest_9.png"
import TransparentBtn from "../../buttons/transparent-btn"

function TimeQuests() {
    return(
        <div className={style.time_quests}>
            <div className={style.daily}>
                <div className={style.header}>
                    <h3>Ежедневные</h3>
                    <div className={style.btn}>
                        <TransparentBtn 
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
                <div className={style.daily_cards}>
                    <div>
                        <SmallQuestCard
                            idPic={"leftPic small daily"}
                            idBg={"leftBg small daily"}
                            idHead={"leftHead small daily"}
                            idPacman={"leftPacman small daily"}
                            idPerson={"leftPerson small daily"}
                            idMedal={"leftMedal small daily"}
                            bgCard={bgPurple}
                            bgHeader={hatPurple}
                            title={'Призрачные галактики'}
                            desc={'Mirror'}
                            pacmanIcon={purplePacman}
                            personIcon={pruplePerson}
                            medalIcon={puprleMedal}
                            img={dailyImgLeft}
                            colorShadow={"drop-shadow(0px 0px 9.64935px #8531E9)"}
                            pacmanText={"3"}
                            personText={"2K"}
                            medalText={"7XP"}
                        />
                    </div>
                    <div className={style.card}>
                        <SmallQuestCard
                            idPic={"middlePic small daily"}
                            idBg={"middleBg small"}
                            idHead={"middleHead small daily"}
                            idPacman={"middlePacman small daily"}
                            idPerson={"middlePerson small daily"}
                            idMedal={"middleMedal small daily"}
                            bgCard={bgGreen}
                            bgHeader={hatGreen}
                            title={'Призрачные галактики'}
                            desc={'CryptoCaps'}
                            pacmanIcon={greenPacman}
                            personIcon={greenPerson}
                            medalIcon={greenMedal}
                            img={dailyImgMiddle}
                            colorShadow={"drop-shadow(0px 0px 9.64935px #81BD60)"}
                            textColor={"#171717"}
                            green={true}
                            pacmanText={"2"}
                            personText={"5K"}
                            medalText={"4XP"}
                        />
                    </div>
                    <div>
                        <SmallQuestCard
                            idPic={"rightPic small daily"}
                            idBg={"rightBg small daily"}
                            idHead={"rightHead small daily"}
                            idPacman={"rightPacman small daily"}
                            idPerson={"rightPerson small daily"}
                            idMedal={"rightMedal small daily"}
                            bgCard={bgPurple}
                            bgHeader={hatPurple}
                            title={'Призрачные галактики'}
                            desc={'Contented'}
                            pacmanIcon={purplePacman}
                            personIcon={pruplePerson}
                            medalIcon={puprleMedal}
                            img={dailyImgRight}
                            colorShadow={"drop-shadow(0px 0px 9.64935px #8531E9)"}
                            pacmanText={"3"}
                            personText={"2K"}
                            medalText={"7XP"}
                        />
                    </div>
                </div>
            </div>
            <div className={style.weekly}>
                <div className={style.header}>
                    <h3>Еженедельные</h3>
                    <div className={style.btn}>
                        <TransparentBtn 
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
                <div className={style.weekly_cards}>
                    <div>
                        <SmallQuestCard
                            idPic={"leftPic small weekly"}
                            idBg={"leftBg small weekly"}
                            idHead={"leftHead small weekly"}
                            idPacman={"leftPacman small weekly"}
                            idPerson={"leftPerson small weekly"}
                            idMedal={"leftMedal small weekly"}
                            bgCard={bgPurple}
                            bgHeader={hatPurple}
                            title={'Криптозоопарк'}
                            desc={'Mirror'}
                            pacmanIcon={purplePacman}
                            personIcon={pruplePerson}
                            medalIcon={puprleMedal}
                            img={weeklyImgLeft}
                            colorShadow={"drop-shadow(0px 0px 9.64935px #8531E9)"}
                            pacmanText={"4"}
                            personText={"3K"}
                            medalText={"5XP"}
                        />
                    </div>
                    <div className={style.card}>
                        <SmallQuestCard
                            idPic={"middlePic small weekly"}
                            idBg={"middleBg small weekly"}
                            idHead={"middleHead small weekly"}
                            idPacman={"middlePacman small weekly"}
                            idPerson={"middlePerson small weekly"}
                            idMedal={"middleMedal small weekly"}
                            bgCard={bgGreen}
                            bgHeader={hatGreen}
                            title={'Космическая одиссея'}
                            desc={'CryptoCaps'}
                            pacmanIcon={greenPacman}
                            personIcon={greenPerson}
                            medalIcon={greenMedal}
                            img={weeklyImgMiddle}
                            colorShadow={"drop-shadow(0px 0px 9.64935px #81BD60)"}
                            textColor={"#171717"}
                            green={true}
                            pacmanText={"4"}
                            personText={"6K"}
                            medalText={"10XP"}
                            rightSpace={1}
                        />
                    </div>
                    <div>
                        <SmallQuestCard
                            idPic={"rightPic small weekly"}
                            idBg={"rightBg small weekly"}
                            idHead={"rightHead small weekly"}
                            idPacman={"rightPacman small weekly"}
                            idPerson={"rightPerson small weekly"}
                            idMedal={"rightMedal small weekly"}
                            bgCard={bgGreen}
                            bgHeader={hatGreen}
                            title={'Музей NFT'}
                            desc={'CryptoCaps'}
                            pacmanIcon={greenPacman}
                            personIcon={greenPerson}
                            medalIcon={greenMedal}
                            img={weeklyImgRight}
                            colorShadow={"drop-shadow(0px 0px 9.64935px #81BD60)"}
                            pacmanText={"3"}
                            personText={"6K"}
                            medalText={"8XP"}
                            textColor={"#171717"}
                            green={true}
                        />
                    </div>
                </div>
            </div>
            <div className={style.monthly}>
                <div className={style.header}>
                    <h3>Ежемесячные</h3>
                    <div className={style.btn}>
                        <TransparentBtn 
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
                <div className={style.monthly_cards}>
                    <div>
                        <SmallQuestCard
                            idPic={"middlePic small monthly"}
                            idBg={"middleBg small monthly"}
                            idHead={"middleHead small monthly"}
                            idPacman={"middlePacman small monthly"}
                            idPerson={"middlePerson small monthly"}
                            idMedal={"middleMedal small monthly"}
                            bgCard={bgGreen}
                            bgHeader={hatGreen}
                            title={'Битва на блокчейне'}
                            desc={'CryptoCaps'}
                            pacmanIcon={greenPacman}
                            personIcon={greenPerson}
                            medalIcon={greenMedal}
                            img={monthlyImgLeft}
                            colorShadow={"drop-shadow(0px 0px 9.64935px #81BD60)"}
                            textColor={"#171717"}
                            green={true}
                            pacmanText={"2"}
                            personText={"8K"}
                            medalText={"8XP"}
                        />
                    </div>
                    <div className={style.card}>
                        <SmallQuestCard
                            idPic={"leftPic small monthly"}
                            idBg={"leftBg small monthly"}
                            idHead={"leftHead small monthly"}
                            idPacman={"leftPacman small monthly"}
                            idPerson={"leftPerson small monthly"}
                            idMedal={"leftMedal small monthly"}
                            bgCard={bgPurple}
                            bgHeader={hatPurple}
                            title={'Чудеса Web3'}
                            desc={'PancakeSwap'}
                            pacmanIcon={purplePacman}
                            personIcon={pruplePerson}
                            medalIcon={puprleMedal}
                            img={monthlyImgMiddle}
                            colorShadow={"drop-shadow(0px 0px 9.64935px #8531E9)"}
                            pacmanText={"3"}
                            personText={"4K"}
                            medalText={"7XP"}
                        />
                    </div>
                    <div>
                        <SmallQuestCard
                            idPic={"rightPic small monthly"}
                            idBg={"rightBg small monthly"}
                            idHead={"rightHead small monthly"}
                            idPacman={"rightPacman small monthly"}
                            idPerson={"rightPerson small monthly"}
                            idMedal={"rightMedal small monthly"}
                            bgCard={bgPurple}
                            bgHeader={hatPurple}
                            title={'Погоня за NFT'}
                            desc={'Mirror'}
                            pacmanIcon={purplePacman}
                            personIcon={pruplePerson}
                            medalIcon={puprleMedal}
                            img={monthlyImgRight}
                            colorShadow={"drop-shadow(0px 0px 9.64935px #8531E9)"}
                            pacmanText={"3"}
                            personText={"4K"}
                            medalText={"6XP"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeQuests