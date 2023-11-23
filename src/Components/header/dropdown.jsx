import React from "react";
import { useState } from "react";
import style from "./dropdown.module.scss";

function DropDown() {
    const [lang, setLang] = useState('Рус')
    const appearDropDown = () => {
        const dropdown = document.getElementById("dropdown")
        dropdown.style.display = "block";
    }

    const changeLang = (e) => {
        setLang(e)
        const dropdown = document.getElementById("dropdown")
        dropdown.style.display = "none";
    }

    return(
        <div className={style.DropDown}>
            <p id="selected-lang" className={style.DropDown__selected} onClick={appearDropDown}>{lang}</p>
            <ul id="dropdown" className={style.DropDown__list}>
                <li className={style.DropDown__item}
                    style={{borderRadius: "2px 2px 0px 0px"}}
                    onClick={() => changeLang('Рус')}
                >
                    Рус
                </li>
                <li className={style.DropDown__item}
                     style={{borderRadius: "0px 0px 2px 2px"}}
                     onClick={() => changeLang('En')}
                >
                    En
                </li>
            </ul>
            <svg className={style.DropDown__arrow} xmlns="http://www.w3.org/2000/svg" width="12" height="6" viewBox="0 0 12 6" fill="none">
                <path d="M6 6L0.803848 0L11.1962 0L6 6Z" fill="#FDFAFF"/>
            </svg>  
        </div>
    )
}
//style={{backgroundColor: "#282828"}}
export default DropDown