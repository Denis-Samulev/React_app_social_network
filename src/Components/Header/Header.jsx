import React from "react";
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png" alt="logo"/>
        </header>
    )
}


export default Header;