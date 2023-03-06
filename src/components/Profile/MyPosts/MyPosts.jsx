import React from "react";
import { Button } from '@mui/material';
import d from './MyPosts.module.css';
import { setValue, fetchMyPosts, getAllMyPostsThunk } from "../../../redux/profileReducer";
import { useDispatch, useSelector } from "react-redux";
import MyPost from "./MyPost/MyPost";
import { addMyPost, getAllMyPosts } from "../../../firebase/crud";
import { useEffect } from "react";

const MyPosts = () => {

    const dispatch = useDispatch();
    const inputText = useSelector(state => state.profile.value);
    const id = useSelector(state => state.register.user.id);
    const myPosts = useSelector(state => state.profile.posts);
    console.log(myPosts);

    useEffect(()=>{
        dispatch(getAllMyPostsThunk())
    },[dispatch])

    const getValue = (e) => {
        const currentValue = e.target.value
        dispatch(setValue(currentValue))
    };

    const getPosts = async() => {
        let data = await getAllMyPosts();
        dispatch(fetchMyPosts(data));
      }

    const addPost = (e) => {
        e.preventDefault();
    if (inputText.length > 0) {
        const post = {
            id: id,
            post: inputText,
        };
        addMyPost(post);
        getPosts();
        } 
    }

    return (
        <>
            <h2 className={d.posts}>My posts</h2>
            <form className={d.form} onSubmit={addPost}>
              <textarea onChange={getValue} placeholder='your post...' />
              <Button variant='contained' size='large' sx={{ fontWeight: '600', width: '120px', marginTop: '20px' }} type='submit'>Publish</Button>
            </form>
            <MyPost myPosts={myPosts} id={id}/>
        </>
    )
};

export default MyPosts;