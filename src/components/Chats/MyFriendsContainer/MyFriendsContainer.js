import React from "react";
import MyFriends from "./MyFriends/MyFriends";
import { useTheme } from '@emotion/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const friends = [
    {id: 1, name: 'Anna', src: 'https://vibir.ru/wp-content/uploads/2019/10/tematicheskie-avatarki.jpg'},
    {id: 2, name: 'Valeria', src: 'https://abrakadabra.fun/uploads/posts/2022-03/1647809364_1-abrakadabra-fun-p-milie-avatarki-na-vatsap-2.jpg'},
    {id: 3, name: 'Nikita', src: 'https://vraki.net/sites/default/files/mood/avatarka.jpg'},
    {id: 4, name: 'Anton', src: 'https://sun9-45.userapi.com/impf/c849024/v849024737/1d33bb/fUONnVHT67E.jpg?size=600x473&quality=96&sign=92c7654843b49a6e65953a31e71476ba&type=album'},
    {id: 5, name: 'BigBoss', src: 'https://demotivation.ru/wp-content/uploads/2020/11/s1200-2-9.jpg'},
    {id: 6, name: 'Crazy', src: 'https://bipbap.ru/wp-content/uploads/2021/07/9-1.jpeg'},
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
        setTimeout(() => dispatch({type: 'NEW_FRIEND', friend: {id: 7, name: 'Bars', src: 'https://econet.ru/uploads/pictures/456175/content_photo_1.jpg'}}), 1000)
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