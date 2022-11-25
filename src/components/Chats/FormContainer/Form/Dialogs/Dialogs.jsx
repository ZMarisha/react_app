import React from 'react';
import { useTheme } from '@emotion/react';
import { useParams } from 'react-router-dom';
import d from './Dialogs.module.css';



const Dialogs = ({messageList}) => {

  const { chatId } = useParams();
  console.log(chatId)

   let message1 = messageList.filter(el => chatId === el.id);
  
  const theme = useTheme();


  return (
    <>
  {message1.map((el, i) => <div key={i} className={d.dialogs} style={{border: theme.palette.primary.border}}>
      <p className={d.text}>{el.text}</p>
      <div className={d.blockAuthor}>
        <div>
          <p><span className={d.mailer}>Author: </span>{el.author ? el.author : 'anonymous'}</p>
          <p><span className={d.mailer}>Date: </span>{el.date}</p>
          <p><span className={d.mailer}>Time: </span>{el.time}</p>
        </div>
      </div>
    </div>)}
     
    </>
  )
}

export default Dialogs;