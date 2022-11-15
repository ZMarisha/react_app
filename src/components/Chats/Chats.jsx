import React from 'react';
import d from './Chats.module.css'
import FormContainer from './FormContainer/FormContainer.js';
import MyFriendsContainer from './MyFriendsContainer/MyFriendsContainer';


const Chats = () => {

  return (
    <div className={d.dialogs}>
      <MyFriendsContainer />
      <FormContainer />
    </div>
    
  )
}

export default Chats;