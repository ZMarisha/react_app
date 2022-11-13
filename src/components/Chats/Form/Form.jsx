import Dialogs from "./Dialogs/Dialogs";
import React, { useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import d from './Form.module.css'
import { useDispatch, useSelector } from "react-redux";
import {addDate, addTime} from '../../../redux/chatsReducer.js'

const ROBOT = 'Hi! I am Robot. I got your message!';

const Form = () => {

  const { chatId } = useParams();
  const messageList = useSelector(state => state.chats.messageList);
  //let message = useSelector(state => state.chats.message);
  let inputText = useSelector(state => state.chats.value)
  const dispatch = useDispatch();
  // const [message, setMessage] = useState([{
  //   id: 0,
  //   text: '',
  //   author: '',
  //   date: addDate(),
  //   time: addTime()
  // }]);

  //console.log(message)
  // const { author } = message;
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

    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'ROBOT') {
      setTimeout(() => dispatch({type: 'ADD_ROBOT', robot: {id: chatId, author: 'ROBOT', text: ROBOT, date: postDate, time: postTime}}), 1500)
      }
    }, [dispatch, messageList, postDate, postTime, chatId]);

  useEffect(() => {
    textareaRef.current.focus()
  });

    
  return (
    <div className={d.main}>
      <Dialogs messageList={messageList}/>
      <form className={d.form} onSubmit={addPost}>
        <textarea ref={textareaRef} onChange={changeText} value={inputText} placeholder='input your message...' />
        <div className={d.btnSend}>
          <Button variant='contained' size='large' sx={{ fontWeight: '600', width: '120px', marginTop: '20px' }} type='submit'>SEND</Button>
        </div>
      </form>
    </div>
  )
}

export default Form;
