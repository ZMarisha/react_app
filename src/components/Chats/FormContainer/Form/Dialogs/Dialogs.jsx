import React from 'react';
import { useTheme } from '@emotion/react';
import { useParams } from 'react-router-dom';
import d from './Dialogs.module.css';
import Preloader from '../../../../Preloader/Preloader';
import { useSelector } from 'react-redux';
import Error from '../../../../Error/Error';



const Dialogs = ({messageList}) => {

  const { chatId } = useParams();
  //console.log(chatId);
  const isPreloader = useSelector(state => state.newsPage.preloader);
  const isError = useSelector(state => state.newsPage.error)

  let message1 = messageList.filter(el => chatId === el.id);
  
  const theme = useTheme();


  return (
    <div className={d.posts}>
      <div className={d.error}>{ isError ? <Error /> : null}</div>
    <div className={d.preloader}>{isPreloader ? <Preloader /> : null}</div>
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
     
    </div>
  )
}

export default Dialogs;