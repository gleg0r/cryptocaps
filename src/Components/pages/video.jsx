import React from "react";
import { useNavigate } from "react-router-dom";
import VideoPage from "../UI/container/video";
import style from "./style.module.scss";


function Video() {
    let navigate = useNavigate();
    document.body.style.overflow = 'hidden';
    function linkToHome() {
        navigate("/home")
    }

    return (
        <div className={style.Video} onClick={linkToHome}>
            <VideoPage/>
        </div>
    )
}

export default Video