import React from "react";
import GreenBtn from "../../buttons/green-btn";
import style from "../styles/download-block.module.scss";
import qr from "../../img/qr-code.png"
import shadow from "../../img/shadow.png"

function DownloadBlock() {
    return(
        <div className={style.download}>
            <div className={style.text}>
                <h2 className={style.title}>Загружай мобильное<br />
                    приложение<br />
                    и начинай играть!
                </h2>
                <GreenBtn
                    width={330}
                    height={68}
                    text={'Скачать приложение'}
                />
            </div>
            <div className={style.code}>
                <img src={qr} alt="" />
                <p>
                    Наведи камеру на QR-код,<br />
                    чтобы скачать
                </p>
                <img className={style.shadow} src={shadow} alt="" />
            </div>
        </div>
    )
}

export default DownloadBlock;