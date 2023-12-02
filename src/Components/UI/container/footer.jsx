import React from "react";
import style from "./styles/footer.module.scss";
import logo from "../img/logo.svg"
import { NavLink } from "react-router-dom";
import discord from "../img/discord.svg"
import telegram from "../img/telegram.svg"
import inst from "../img/inst.svg"
import facebook from "../img/facebook.svg"
import twitter from "../img/twitter.svg"

function Footer() {
    return(
        <footer>
            <div className={style.header}>
                <div className={style.logo}>
                    <img className={style.logo_img} src={logo} alt="" />
                </div>
                <div className={style.start}>
                    <ul className={style.start_list}>
                        <li style={{fontWeight: 700, fontSize: 24}}>
                            <NavLink to="/">
                                Начать
                            </NavLink> 
                        </li>
                        <li>                            
                            <NavLink to="/">
                                Зарегистрироваться
                            </NavLink> 
                        </li>
                        <li> 
                            <NavLink to="/">
                                На главную
                            </NavLink> 
                        </li>
                        <li>
                            <NavLink to="/">
                                Для партнёров
                            </NavLink>  
                        </li>
                    </ul>
                </div>
                <div className={style.feedback}>
                    <ul className={style.feedback_list}>
                        <li style={{fontWeight: 500, fontSize: 24}}>
                            <NavLink to="/">
                                Техническая поддержка
                            </NavLink>  
                            
                        </li>
                        <li>
                            <NavLink to="/">
                                Обратная связь
                            </NavLink>  
                            
                        </li>
                    </ul>
                </div>
                <div className={style.socials}>
                    <ul className={style.socials_list}>
                        <li>
                            <a href="https://discord.com/">
                                <img src={discord} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.com/">
                                <img src={telegram} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.com/">
                                <img src={inst} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.com/">
                                <img src={facebook} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.com/">
                                <img src={twitter} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={style.copyrights}>
                <p>© 2023 Авторские права защищены</p>
            </div>
        </footer>
    )
}

export default Footer