import d from './Form.module.css'
import Dialogs from "./Dialogs/Dialogs";
import { useEffect } from 'react';

const Form = ({message, setMessage, setMessageList, messageList, addDate, addTime}) => {

  const ROBOT = 'Hi! I am Robot. I got your message!';
    
  let changText = (e) => {
    setMessage(prev => ({...prev, text: e.target.value}))
  }
    
  let changAuthor = (e) => {
    setMessage(prev => ({...prev, author: e.target.value}));
  }
    
  let {text, author} = message;
    
  let postDate = addDate()
  let postTime = addTime()

  let addPost = (e) => {
    e.preventDefault();
    if (message.text.length > 0) {
      setMessageList(prev => ([...prev, {text, author, time: postTime, date: postDate}]));
    }
    setMessage({
      text: '',
      author: ''
    })
  }

   

  useEffect(() => {
    if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'ROBOT') {
      setTimeout(() => setMessageList(prev => ([...prev, {author: 'ROBOT', text: ROBOT, date: postDate, time: postTime}])), 1500)
      }
    }, [setMessageList, messageList, postDate, postTime])
    
  return (
    <div>
      <h1>Dialogs</h1>
      <form className={d.form} onSubmit={addPost} >
        <textarea onChange={changText} value={message.text} placeholder='input your message...'/>
        <input onChange={changAuthor} value={message.author} placeholder='author' maxLength={18}/>
        <div className={d.btnSend}>
          <button className={d.btn} type='submit'>Send</button>
        </div>
      </form>
      {messageList.map((el, index) => [<Dialogs text={el.text} author={el.author} date={el.date} time={el.time} key={index} />])}
    </div>
  )
}

export default Form;
