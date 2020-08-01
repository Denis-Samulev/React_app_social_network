import React from "react";
import style from './My-posts.module.css'
import Post from "./Post/Post";


let postData = [
    {id: 1, postText: 'It is my first post', likeCounter: '10'},
    {id: 2, postText: 'It is my two post', likeCounter: '5'},
]


let postElements =
    postData.map((p) => <Post  key={p.id} postText={p.postText} likeCounter={p.likeCounter} />)


const MyPosts = () => {

    return (
        <div className={style.myPosts}>
            <strong>My posts</strong>
            <textarea></textarea>
            <button>Add post</button>

            { postElements }


            {/*<Post id={ postData[0].id } postText={ postData[0].postText } likeCounter={ postData[0].likeCounter }/>*/}
            {/*<Post id={ postData[1].id } postText={ postData[1].postText } likeCounter={ postData[1].likeCounter }/>*/}

        </div>
    )
}


export default MyPosts;
