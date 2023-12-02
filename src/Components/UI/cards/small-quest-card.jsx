import React from "react";
import { useRef, useState, useEffect } from "react";
import style from "./small-quest-card.module.scss";

function SmallQuestCard({ bgCard, bgHeader, title, desc, img, colorShadow, idPic, idBg, idHead, idPacman, idPerson, idMedal, textColor, pacmanIcon, personIcon ,medalIcon, green, rightSpace, medalText, personText, pacmanText}) {
    const [hover, setHover] = useState(false)
    function shadowAppear() {
        const bgCard = document.getElementById(idBg)
        const bgHeader = document.getElementById(idHead)
        const picture = document.getElementById(idPic)
        const pacman = document.getElementById(idPacman)
        const person = document.getElementById(idPerson)
        const medal = document.getElementById(idMedal)
        if(hover === false) {

            bgCard.style.filter = colorShadow
            bgHeader.style.filter = colorShadow
            picture.style.filter = colorShadow
            pacman.style.filter = colorShadow
            person.style.filter = colorShadow
            medal.style.filter = colorShadow
            setHover(true)
        } else {
            bgCard.style.filter = "none"
            bgHeader.style.filter = "none"
            picture.style.filter = "none"
            pacman.style.filter = "none"
            person.style.filter = "none"
            medal.style.filter = "none"
            setHover(false)
        }
    }
    const medalBorder = useRef(null)
    const personBorder = useRef(null)
    const pacmanBorder = useRef(null)
    const medalColor = useRef(null)
    const personColor  = useRef(null)
    const pacmanColor = useRef(null)
    const pacmanImg = useRef(null)
    const [checkGreen, setGreen] = useState(green)

    useEffect(() => {
        if(checkGreen === true) {
            medalBorder.current.style.borderColor = "#AAF97E";
            personBorder.current.style.borderColor = "#AAF97E";
            pacmanBorder.current.style.borderColor = "#AAF97E";
            medalColor.current.style.color = "#AAF97E";
            personColor.current.style.color = "#AAF97E";
            pacmanColor.current.style.color = "#AAF97E";
            pacmanImg.current.style.width = "20";
            pacmanImg.current.style.height = "30";
            
        }
    })

    return(
        <div className={style.card} onMouseEnter={shadowAppear} onMouseLeave={shadowAppear}>
            <img id={idBg} className={style.card_bg} src={bgCard} alt="" />
            <div className={style.header}>
                <img id={idHead} src={bgHeader} alt="" />
                <h3 style={{color: textColor}}>Новое</h3>
            </div>
            <div className={style.main}>
                <div className={style.text}>
                    <h3 className={style.text_title}>{title}</h3>
                    <p className={style.text_desc}>{desc}</p>
                </div>
                <div className={style.count}>
                    <div  className={style.count_pacman}>
                        <div ref={pacmanBorder} id={idPacman} className={style.border_pacman}></div>
                        <img ref={pacmanImg} src={pacmanIcon} alt="" />
                        <p ref={pacmanColor}>{pacmanText}</p>
                    </div>
                    <div className={style.count_person}>
                        <div ref={personBorder} id={idPerson} className={style.border_person}></div>
                        <img src={personIcon} alt="" />
                        <p ref={personColor}>{personText}</p>
                    </div>
                </div>
                <div className={style.count_medal}>
                        <div ref={medalBorder} onLoad={checkGreen} id={idMedal}  className={style.border_medal}></div>
                        <img style={{marginRight: rightSpace}} src={medalIcon} alt="" />
                        <p ref={medalColor}>{medalText}</p>
                </div>

            </div>
                <div className={style.img}>
                    <img id={idPic} src={img} alt="" />
                </div>
        </div>
    )
}

export default SmallQuestCard