import React, { useEffect, useRef } from "react";
import Form from "./Form/Form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addDate, addTime} from '../../../otherFunctions/otherFunctions';
import { addRobotThunk } from "../../../redux/chatsReducer";
import { addNewPost, getAllPosts } from "../../../firebase/crud";

const FormContainer = () => {

const ROBOT = 'Hi! I am Robot. I got your message!';

  const { chatId } = useParams();
  const messageList = useSelector(state => state.chats.messageList);
  console.log(messageList)
  
  let inputText = useSelector(state => state.chats.value)
  const dispatch = useDispatch();
  const textareaRef = useRef('');
    
  let changeText = (e) => {
    dispatch({type: 'ADD_TEXT', inputText: e.target.value})
  }
    
  let postDate = addDate();
  let postTime = addTime();

  const getPostHandler = async() => {
    let data = await getAllPosts();
    data.map(el => dispatch({type: 'ADD_MESSAGE', message: {id: el.id, text: el.text, author: el.author, time: el.time, date: el.date}}))
  }

  let addPost = (e) => {
    e.preventDefault();
    if (inputText.length > 0) {
      let data = {
        id: chatId, text: inputText, author: '', time: postTime, date: postDate
      };
      //dispatch({type: 'ADD_MESSAGE', message: {id: chatId, text: inputText, author: '', time: postTime, date: postDate}});
      addNewPost(data);
      getPostHandler();
    }
  };


  useEffect(() => {
    dispatch(addRobotThunk(messageList, chatId, postDate, postTime, ROBOT));
  }, [dispatch, messageList, chatId, postDate, postTime, ROBOT]);


  return (
    <Form addPost={addPost} changeText={changeText} textareaRef={textareaRef} messageList={messageList} inputText={inputText}/>
  )
}

export default FormContainer;