import React from "react";
import style from './Nav-bar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.items}>
                <li className={style.item}>

                    <NavLink to='/profile'>Profile</NavLink>

                </li>
                <li className={style.item}>

                    <NavLink to='/dialogs'>Messages</NavLink>

                </li>
                <li className={style.item}>

                    <NavLink to='/news'>News</NavLink>

                </li>
                <li className={style.item}>

                    <NavLink to='/music'>Music</NavLink>

                </li>
                <li className={style.item}>

                    <NavLink to='/settings'>Settings</NavLink>

                </li>
            </ul>
        </nav>
    )
}


export default NavBar;