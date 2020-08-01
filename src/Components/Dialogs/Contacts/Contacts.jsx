import React from "react";
import style from './Contacts.module.css'
import {NavLink} from "react-router-dom";


const Contact = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialog + ' ' + style.active}>

            <NavLink to={path}>{props.name}</NavLink>

        </div>
    )
}


export default Contact;