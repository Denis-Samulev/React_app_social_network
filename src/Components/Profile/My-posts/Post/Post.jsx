import React from "react";
import style from './Post.module.css'


const Post = (props) => {

    return (
        <div className={style.post}>

            <div className={style.postImg}></div>


            <div className={style.postText}>

                {props.postText}

            </div>


            <div>

                Like: {props.likeCounter}

            </div>
        </div>
    )
}


export default Post;