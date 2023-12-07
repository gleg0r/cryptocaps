import React from "react";
import video from "../video/trailler1_1.mp4"
import style from "./styles/video.module.scss"

function VideoPage() {
    return (
        <video className={style.video} autoPlay muted>
            <source src={video}/>
        </video>
    )
}
export default VideoPage