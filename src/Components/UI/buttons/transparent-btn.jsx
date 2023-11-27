import React from "react";
import style from "./transparent-btn.module.scss"

function TransparentBtn({text}) {
    return(
        <div>
            <button className={style.download_btn}>{text}</button>
        </div>

    )
}

export default TransparentBtn