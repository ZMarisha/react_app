import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import d from './MyFriends.module.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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

const MyFriends = () => {

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
        <div className={d.parent} style={{border: theme.palette.primary.border}}>
            <h1 className={d.headering}>My friends</h1>
            <div className={d.navBar}>
            {dialogs.map((el, index) => [
                <div key={index} className={d.border} style={{border: theme.palette.primary.border}} >
                    <Link to={`${el.id}`} className={d.link}>
                        <ListItem>
                            <ListItemAvatar>
                                 <Avatar src={el.src} />
                            </ListItemAvatar>
                            <ListItemText primary={el.name} sx={{color: '#212121'}} />
                            <DeleteForeverIcon onClick={() => deleteFriend(el.id)} sx={{ marginLeft: '20px', color: '#212121' }} 
                            type='submit' />
                        </ListItem>
                     </Link>
                </div>
            ])}
            </div>
            <div className={d.btn}>
            <Button onClick={addFriends} variant='contained' size='large' sx={{ fontWeight: '600', minWidth: '25px', fontSize: '16px', height: '50px', marginTop: '30px', borderRadius: '50%'}} 
                type='submit' >+</Button>
            </div>
            
        </div>
    )
}

export default MyFriends;