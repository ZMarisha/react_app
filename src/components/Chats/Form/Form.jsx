import Dialogs from "./Dialogs/Dialogs";
import React, { useEffect, useRef } from 'react';
import { Button } from '@mui/material';
import d from './Form.module.css'

const Form = ({message, setMessage, setMessageList, messageList, addDate, addTime}) => {

  const ROBOT = 'Hi! I am Robot. I got your message!';
  const {text, author} = message;
  const textareaRef = useRef(null);
    
  let changeText = (e) => {
    setMessage(prev => ({...prev, text: e.target.value}))
  }
    
  let postDate = addDate()
  let postTime = addTime()


  let addPost = (e) => {
    e.preventDefault();
    if (message.text.length > 0) {
      setMessageList(prev => ([...prev, {text, author, time: postTime, date: postDate}]));
    }
    setMessage({
      text: '',
    })
  }

  useEffect(() => {
    textareaRef.current.focus()
  })

  useEffect(() => {

    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'ROBOT') {
      setTimeout(() => setMessageList(prev => ([...prev, {author: 'ROBOT', text: ROBOT, date: postDate, time: postTime}])), 1500)
      }
    }, [setMessageList, messageList, postDate, postTime])

    
  return (
    <div className={d.main}>
      <div>{messageList.map((el, index) => [<Dialogs text={el.text} 
                                                      author={el.author} 
                                                      date={el.date} 
                                                      time={el.time} 
                                                      key={index} />])}
      </div>
      <form className={d.form} onSubmit={addPost}>
        <textarea ref={textareaRef} onChange={changeText} value={message.text} placeholder='input your message...' />
        <div className={d.btnSend}>
          <Button variant='contained' size='large' sx={{ fontWeight: '600', width: '120px', marginTop: '50px' }} type='submit'>SEND</Button>
        </div>
      </form>
    </div>
  )
}

export default Form;
