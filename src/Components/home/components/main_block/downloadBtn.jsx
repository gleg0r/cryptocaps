import React from "react";
import style from "./download.module.scss"

function DownloadBtn() {
    return(
        <div>
            <button className={style.download_btn}>Скачать приложение</button>
        </div>

    )
}

export default DownloadBtn