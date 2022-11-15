import Dialogs from "../Form/Dialogs/Dialogs";
import React from 'react';
import { Button } from '@mui/material';
import d from './Form.module.css'


  const Form = ({addPost, changeText, textareaRef, messageList, inputText}) => {
  
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
