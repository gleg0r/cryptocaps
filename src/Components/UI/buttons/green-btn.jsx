import React from "react";
import style from "./green-button.module.scss"

function GreenBtn({ text, height}) {
    return (
        <div>
            <button style={{height: height}} className={style.btn}>{text}</button>
        </div>
    )
}

export default GreenBtn