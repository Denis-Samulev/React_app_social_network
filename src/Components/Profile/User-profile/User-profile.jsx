import React from "react";
import style from './User-profile.module.css'


const UserProfile = () => {
    return (
        <div className={style.profile}>

            <div className={style.coverImg}></div>

            <div className={style.avatarImg}></div>

            <div className={style.descr}>
                <div>Denis S.</div>
                <div>Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit. <br/>Quidem, quos!</div>
            </div>

        </div>
    )
}


export default UserProfile;