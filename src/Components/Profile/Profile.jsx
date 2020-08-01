import React from "react";
import style from './Profile.module.css'
import UserProfile from "./User-profile/User-profile";
import MyPosts from "./My-posts/My-posts";


const Profile = () => {

    return(
        <div className={style.profile}>

            <UserProfile />
            <MyPosts />

        </div>
    )
}


export default Profile;