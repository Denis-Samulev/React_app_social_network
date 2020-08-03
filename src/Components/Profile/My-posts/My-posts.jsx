import React from "react";
import style from './My-posts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postElements =
        props.state.map((p) => <Post key={p.id} postText={p.postText} likeCounter={p.likeCounter}/>)


    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }


    return (
        <div className={style.myPosts}>

            <div>
                <strong>My posts</strong>
            </div>

            <div>
                <textarea ref={ newPostElement }></textarea>
            </div>

            <div>
                <button onClick={ addPost }>Add post</button>
            </div>

            {postElements}


            {/*<Post id={ posts[0].id } postText={ posts[0].postText } likeCounter={ posts[0].likeCounter }/>*/}
            {/*<Post id={ posts[1].id } postText={ posts[1].postText } likeCounter={ posts[1].likeCounter }/>*/}

        </div>
    )
}


export default MyPosts;
