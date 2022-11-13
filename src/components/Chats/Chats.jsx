import Form from './Form/Form.jsx';
import MyFriends from './MyFriends/MyFriends.jsx';
import d from './Chats.module.css'


const Chats = () => {

  return (
    <div className={d.dialogs}>
      <MyFriends />
      <Form />
    </div>
    
  )
}

export default Chats;