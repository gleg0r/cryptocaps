import React from "react";
import style from "./transparent-btn.module.scss"

function TransparentBtn({text, width, height, size, weight, lHeight, padding, radius }) {
    return(
        <div>
            <button style={{width: width, height: height, fontSize: size, fontWeight: weight, lineHeight: lHeight, padding: padding, borderRadius: radius}} className={style.download_btn}>{text}</button>
        </div>

    )
}

export default TransparentBtn