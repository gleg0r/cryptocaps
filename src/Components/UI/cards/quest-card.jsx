import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import style from "./quest-card.module.scss"

function QuestCard({ title, desc, img, bg, headerBg, colorShadow, idPic, idBg, idHead, idPacman, idPerson, idMedal, textColor, pacmanIcon, personIcon ,medalIcon, green }) {
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
            <img id={idBg} className={style.background} src={bg} alt="" />
            <div className={style.header}>
                <img id={idHead} className={style.header_bg} src={headerBg} alt="" />
                <p style={{color: textColor}} className={style.header_title}>Новое</p>
            </div>
            <div className={style.container}>
                <div className={style.main}>
                    <img id={idPic} className={style.img} src={img} alt="" />
                    <h4 className={style.main_title}>{title}</h4>
                    <p className={style.main_desc}>{desc}</p>
                </div>
                <div className={style.footer}>
                    <div className={style.footer_count}>
                        <div  className={style.footer_pacman}>
                            <div ref={pacmanBorder} id={idPacman} className={style.border_pacman}></div>
                            <img ref={pacmanImg} src={pacmanIcon} alt="" />
                            <p ref={pacmanColor}>3</p>
                        </div>
                        <div className={style.footer_person}>
                            <div ref={personBorder} id={idPerson} className={style.border_person}></div>
                            <img src={personIcon} alt="" />
                            <p ref={personColor}>5K</p>
                        </div>
                    </div>
                    <div className={style.footer_medal}>
                        <div ref={medalBorder} onLoad={checkGreen} id={idMedal}  className={style.border_medal}></div>
                        <img src={medalIcon} alt="" />
                        <p ref={medalColor}>5XP</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestCard