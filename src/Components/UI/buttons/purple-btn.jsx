import React from "react";
import style from "./purple-btn.module.scss"

function PurpleBtn({ text }) {
    return(
        <div>
            <button className={style.start_btn}>{ text }</button>
        </div>

    )
}

export default PurpleBtn