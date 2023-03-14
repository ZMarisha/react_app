import React from "react";
import d from './MyPost.module.css'

const MyPost = ({myPosts, id}) => {


    return (

        <ul className={d.post}>
            {myPosts.length > 0 ? myPosts.map((item, index) => item.id === id ? <li key={index}>{item.post}</li>: null) : null}
        </ul>
    )
};

export default MyPost;