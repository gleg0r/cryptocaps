import React from "react";
import logo from "./logo.svg"
import { NavLink } from "react-router-dom";
import style from "./header.module.scss";
import DropDown from "./dropdown";
import SignIn from "./btn";

function Header() {

    return(
        <div 
            className={style.navigation}
        >
            <nav className={style.navigation__nav}>
                <div 
                    className={style.navigation__logo}
                >   
                    <NavLink to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                </div>
                <ul className={style.navigation__links}>
                    <li>
                        <NavLink    className={({isActive}) => (isActive? style.active__link : style.navigation__link)} to="/quests">
                            Квесты
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive? style.active__link : style.navigation__link)} to="/news">
                            Новости
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive? style.active__link : style.navigation__link)} to="/cards">
                            Фишки
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive? style.active__link : style.navigation__link)} to="/rating">
                            Рейтинг
                        </NavLink>
                    </li>
                </ul>
                <div className={style.navigation__actions}>
                    <div className={style.navigation__dropdown}>
                        <DropDown />   
                    </div>
                    <div className={style.navigation__btn}>
                        <SignIn />  
                    </div>
                </div>
                
                
            </nav>
        </div>
    );
}

export default Header;