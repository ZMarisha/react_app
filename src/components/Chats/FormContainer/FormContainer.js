import React, { useEffect } from "react";
import Form from "./Form/Form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addDate, addTime} from '../../../otherFunctions/otherFunctions';
import { fetchMessages, addText, getAllPostsThunk, addRobot } from "../../../redux/chatsReducer";
import { addNewPost, getAllPosts } from "../../../firebase/crud";


const FormContainer = () => {


  const { chatId } = useParams();
  const ROBOT = useSelector(state => state.chats.robot);
  const messageList = useSelector(state => state.chats.messageList);
  
  let inputText = useSelector(state => state.chats.value)
  const dispatch = useDispatch();

    
  let changeText = (e) => {
    dispatch(addText(e.target.value))
  }
    
  let postDate = addDate();
  let postTime = addTime();
  
  useEffect(()=>{
    dispatch(getAllPostsThunk())
  },[dispatch])

  const getPostHandler = async() => {
    let data = await getAllPosts();
    dispatch(fetchMessages(data));
  }

  let addPost = (e) => {
    e.preventDefault();
    if (inputText.length > 0) {
      let data = {
        id: chatId, text: inputText, author: '', time: postTime, date: postDate
      };
      addNewPost(data);
      getPostHandler();
    }
    answerRobot();
  };

  const answerRobot = () => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'ROBOT') {
        setTimeout(() => dispatch(addRobot({id: chatId, author: 'ROBOT', text: ROBOT, date: postDate, time: postTime})
        ),1500)
    }
  };



  return (
    <Form addPost={addPost} changeText={changeText} messageList={messageList} inputText={inputText}/>
  )
}

export default FormContainer;