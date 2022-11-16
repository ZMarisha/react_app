import React from "react";
import MyFriends from "./MyFriends/MyFriends";
import { useTheme } from '@emotion/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const friends = [
    {id: 1, name: 'Anna', src: 'https://klike.net/uploads/posts/2019-03/1551511851_21.jpg'},
    {id: 2, name: 'Valeria', src: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
    {id: 3, name: 'Nikita', src: 'https://klike.net/uploads/posts/2019-03/1551515501_13.jpg'},
    {id: 4, name: 'Anton', src: 'https://klike.net/uploads/posts/2019-03/1551511900_34.jpg'},
    {id: 5, name: 'BigBoss', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511819_33.jpg'},
    {id: 6, name: 'Crazy', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511818_27.jpg'},
]

const MyFriendsContainer = () => {
    const dialogs = useSelector(state => state.chats.myFriend);
    const newFriend = useSelector(state => state.chats.myNewFriend);
    const dispatch = useDispatch();
    //console.log(newFriend)

    const theme = useTheme();

    useEffect(() => {
        setTimeout(() => dispatch({type: 'FRIENDS', data: friends}), 1000)
    }, [dispatch])
    // console.log(dialogs);

    useEffect(() => {
        setTimeout(() => dispatch({type: 'NEW_FRIEND', friend: {id: 7, name: 'Bars', src: 'https://klike.net/uploads/posts/2019-03/1551511774_9.jpg'}}), 1000)
    }, [dispatch])

    const addFriends = (e)=> {
    e.preventDefault();
    dispatch({type: 'ADD_FRIEND', user: newFriend});
    }

    const deleteFriend = (el) => {
        let filterFriends = dialogs.filter(obj => obj.id !== el);
        dispatch({type: 'DELETE_FRIEND', deletedFriend: filterFriends})
    }

    return (
        <MyFriends addFriends={addFriends} deleteFriend={deleteFriend} theme={theme} dialogs={dialogs}/>
    )
}

export default MyFriendsContainer;