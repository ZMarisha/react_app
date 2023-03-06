import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findFriendsThunk, getCurrentFriendsThunk, getCurrentPage, addFriend, removeFriend } from '../../redux/findFriendsReducer.js';
import FindFriends from "./FindFriends.jsx";

export const FindFriendsContainer = () => {

    const dispatch = useDispatch();
    const totalUsers = useSelector(state => state.findFriends.totalUsers);
    const pageSize = useSelector(state => state.findFriends.pageSize);
    const currentPage = useSelector(state => state.findFriends.currentPage);
    const users = useSelector(state => state.findFriends.users);
    const isPreloader = useSelector(state => state.findFriends.preloader);
    const isError = useSelector(state => state.findFriends.error);

    let countPages = Math.ceil(totalUsers / pageSize)
        let pages = [];
        for(let i = 1; i <= countPages; i++) {
            pages.push(i)
        }

    useEffect(() => {
        dispatch(findFriendsThunk({currentPage, pageSize}))
    }, [dispatch])

    const getUsers = (currPage) => {
        dispatch(getCurrentFriendsThunk({currPage, pageSize}));
        dispatch(getCurrentPage(currPage));
    }

    const addCurrentUser = useCallback((user) => {
        dispatch(addFriend(user))
    }, [dispatch]);

    const removeCurrentUser = useCallback((user) => {
        dispatch(removeFriend(user))
    }, [dispatch])

    return (
        <FindFriends isError={isError} isPreloader={isPreloader} pages={pages} pageSize={pageSize} users={users} getUsers={getUsers} addCurrentUser={addCurrentUser} removeCurrentUser={removeCurrentUser} totalUsers={totalUsers} currentPage={currentPage}/>
    )
}

export default FindFriendsContainer;