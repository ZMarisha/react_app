import Form from './Form/Form.jsx';
import MyFriends from './MyFriends/MyFriends.jsx';
import d from './Chats.module.css'


const Chats = ({message, setMessage, setMessageList, messageList, addDate, addTime}) => {


  return (
    <div className={d.dialogs}>
      <MyFriends />
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

export default Chats;