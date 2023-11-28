import React from "react";
import style from "./cap.module.scss"

function CapCard({ header, percent, cap, theme, count, spacing, mtop, mright, size}) {
    return (
        <div className={style.cap_card}>
            <h4 style={{marginTop: mtop, marginRight:mright}} className={style.title}>{header}</h4>
            <div className={style.desc}>
                <p className={style.percent}>{percent}</p>
                <p className={style.chance}>Шанс на победу</p>
            </div>
            <img style={{marginTop: spacing, marginBottom:  spacing}} className={style.img} src={cap} alt="" />
            <div style={{padding: size}}className={style.text}>
                <p className={style.text_theme}>{theme}</p>
                <p className={style.text_count}>{count}</p>
            </div>
            
        </div>
    )
}

export default CapCard