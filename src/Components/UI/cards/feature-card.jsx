import React from "react";
import style from "./feature-card.module.scss"

function FeatureCard({ title, src, desc, color, tTop, iTop, dTop}) {
    return(
        <div style={{background: color}} className={style.card}>
            <h4 style={{marginTop: tTop}} className={style.title}>{title}</h4>
            <img style={{marginTop: iTop}} className={style.img} src={src} alt="" />
            <p style={{marginTop: dTop}} className={style.desc}>{desc}</p>
        </div>
    )
}

export default FeatureCard