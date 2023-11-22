import React from "react";
import logo from "./logo.svg"
import { NavLink } from "react-router-dom";
import style from "./header.module.scss";

function Header() {
    return(
        <div 
            className={style.navigation}
        >
            <nav className={style.navigation__nav}>
                <div 
                    className={style.navigation__logo}
                >   
                    <NavLink className={style.navigation__link} to="/">
                        <img src={logo}/>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Header;