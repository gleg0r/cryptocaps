import React from "react";
import style from "./green-button.module.scss"

function GreenBtn({ text, height, width}) {
    return (
        <div>
            <button style={{height: height, width: width}} className={style.btn}>{text}</button>
        </div>
    )
}

export default GreenBtn