import React, { useEffect, useRef } from "react";
import Form from "./Form/Form";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addDate, addTime} from '../../../otherFunctions/otherFunctions';
import { addRobotThunk } from "../../../redux/chatsReducer";

const FormContainer = () => {

const ROBOT = 'Hi! I am Robot. I got your message!';

  const { chatId } = useParams();
  const messageList = useSelector(state => state.chats.messageList);
  
  let inputText = useSelector(state => state.chats.value)
  const dispatch = useDispatch();
  const textareaRef = useRef('');
    
  let changeText = (e) => {
    dispatch({type: 'ADD_TEXT', inputText: e.target.value})
  }
    
  let postDate = addDate();
  let postTime = addTime();

  let addPost = (e) => {
    e.preventDefault();
    if (inputText.length > 0) {
      dispatch({type: 'ADD_MESSAGE', message: {id: chatId, text: inputText, author: '', time: postTime, date: postDate}});
    }
  };

  useEffect(() => {
    dispatch(addRobotThunk(messageList, chatId, postDate, postTime, ROBOT));
  }, [dispatch, messageList, chatId, postDate, postTime, ROBOT]);

   
  // useEffect(() => {

  //   if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'ROBOT') {
  //     setTimeout(() => dispatch({type: 'ADD_ROBOT', robot: {id: chatId, author: 'ROBOT', text: ROBOT, date: postDate, time: postTime}}), 1500)
  //     }
  //   }, [dispatch, messageList, postDate, postTime, chatId]);

  return (
    <Form addPost={addPost} changeText={changeText} textareaRef={textareaRef} messageList={messageList} inputText={inputText}/>
  )
}

export default FormContainer;