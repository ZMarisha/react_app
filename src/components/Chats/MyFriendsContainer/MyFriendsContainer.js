import React, { useCallback } from "react";
import MyFriends from "./MyFriends/MyFriends";
import { useTheme } from '@emotion/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFriends, addFriend, deleteThisFriend, loadingInProgress } from "../../../redux/chatsReducer";

const friends = [
    {id: 1, name: 'Anna', src: 'https://vibir.ru/wp-content/uploads/2019/10/tematicheskie-avatarki.jpg'},
    {id: 2, name: 'Valeria', src: 'https://abrakadabra.fun/uploads/posts/2022-03/1647809364_1-abrakadabra-fun-p-milie-avatarki-na-vatsap-2.jpg'},
    {id: 3, name: 'Nikita', src: 'https://vraki.net/sites/default/files/mood/avatarka.jpg'},
    {id: 4, name: 'Anton', src: 'https://sun9-45.userapi.com/impf/c849024/v849024737/1d33bb/fUONnVHT67E.jpg?size=600x473&quality=96&sign=92c7654843b49a6e65953a31e71476ba&type=album'},
    {id: 5, name: 'BigBoss', src: 'https://demotivation.ru/wp-content/uploads/2020/11/s1200-2-9.jpg'},
    {id: 6, name: 'Crazy', src: 'https://bipbap.ru/wp-content/uploads/2021/07/9-1.jpeg'},
]

const MyFriendsContainer = () => {
    
    const dispatch = useDispatch();
    const theme = useTheme();
    let myFriends = useFriends();
    const isError = useSelector(state => state.chats.error);
    const isPreloader = useSelector(state => state.chats.preloader);
    


    useEffect(() => {
        dispatch(loadingInProgress(true));
        setTimeout(() => {
            dispatch(getAllFriends(friends));
            dispatch(loadingInProgress(false));
        }, 300)
    }, [dispatch]);

    // useEffect(()=>{
    //     dispatch(getAllFriendsThunk())
    //   },[dispatch])

    // useEffect(() => {
    //     setTimeout(() => dispatch({type: 'NEW_FRIEND', friend: {id: 7, name: 'Bars', src: 'https://econet.ru/uploads/pictures/456175/content_photo_1.jpg'}}), 1000)
    // }, [dispatch]);


    const addFriends = (e)=> {
    e.preventDefault();
    dispatch(addFriend({id: 7, name: 'Bars', src: 'https://econet.ru/uploads/pictures/456175/content_photo_1.jpg'}));
    };

    const deleteFriend = useCallback(
        (el) => {
            let filterFriends = myFriends.myFriend.filter(obj => obj.id !== el);
            dispatch(deleteThisFriend(filterFriends));
    }, [dispatch, myFriends]);


    return (
        <MyFriends isPreloader={isPreloader} isError={isError} addFriends={addFriends} deleteFriend={deleteFriend} theme={theme} dialogs={myFriends.myFriend}/>
    )
}

export default MyFriendsContainer;
export let selectorFriends = (state) => state.chats;
const useFriends = () => useSelector(selectorFriends);
