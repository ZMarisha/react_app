import './App.css';
import React, {useState}from 'react';
import Form from './components/Form/Form';



const App = () => {

  const [messageList, setMessageList] = useState([])
  const [message, setMessage] = useState({
    text: '',
    author: '',
    date: addDate(),
    time: addTime()
  })

  function addDate() {
    let date = new Date();
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    
    return `${year}.${month}.${day}`
  }

  function addTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`
  }


  return (
    <div className='container parent'>
      <Form message={message} 
            setMessage={setMessage} 
            setMessageList={setMessageList} 
            messageList={messageList} 
            addDate={addDate} 
            addTime={addTime} 
      />
    </div>
  )
}

export default App;
