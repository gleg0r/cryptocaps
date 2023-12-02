import React from "react";
import logo from "../img/logo.svg"
import { NavLink } from "react-router-dom";
import style from "./styles/header.module.scss";
import DropDown from "../dropdown/dropdown";
import GreenBtn from "../buttons/green-btn";

function Header() {

    return(
        <header 
            className={style.navigation}
        >
            <nav className={style.navigation__nav}>
                <div 
                    className={style.navigation__logo}
                >   
                    <NavLink to="/home">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <ul className={style.navigation__links}>
                    <li>
                        <NavLink    className={style.navigation__link} to="/quests">
                            Квесты
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={style.navigation__link} to="/news">
                            Новости
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={style.navigation__link} to="/cards">
                            Фишки
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={style.navigation__link} to="/rating">
                            Рейтинг
                        </NavLink>
                    </li>
                </ul>
                <div className={style.navigation__actions}>
                    <div className={style.navigation__dropdown}>
                        <DropDown />   
                    </div>
                    <div className={style.navigation__btn}>
                        <GreenBtn height={60} text ={'Войти'}/>  
                    </div>
                </div>
                
                
            </nav>
        </header>
    );
}

export default Header;