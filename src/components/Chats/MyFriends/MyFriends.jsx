import React, { useState} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import d from './MyFriends.module.css';
import { NavLink } from 'react-router-dom';
import { Button, Dialog } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useTheme } from '@emotion/react';



const MyFriends = () => {

    const [dialogs, setDialogs] = useState([
        {id: 1, name: 'Anna', src: 'https://klike.net/uploads/posts/2019-03/1551511851_21.jpg'},
        {id: 2, name: 'Valeria', src: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
        {id: 3, name: 'Nikita', src: 'https://klike.net/uploads/posts/2019-03/1551515501_13.jpg'},
        {id: 4, name: 'Anton', src: 'https://klike.net/uploads/posts/2019-03/1551511900_34.jpg'},
        {id: 5, name: 'BigBoss', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511819_33.jpg'},
        {id: 6, name: 'Crazy', src: 'https://klike.net/uploads/posts/2019-03/medium/1551511818_27.jpg'},
    ])
    
    const [friend, setFriend] = useState({id: 7, name: 'Bars', src: 'https://klike.net/uploads/posts/2019-03/1551511774_9.jpg'})
    const theme = useTheme();

    const addFriends = (e)=> {
    e.preventDefault();
    
    setDialogs(prev => ([...prev, friend]));
    }

    const deleteFriend = (el) => {
        setDialogs(dialogs.filter(obj => obj.id !== el))
    }


    return (
        <div>
            <h1 className={d.headering}>My friends</h1>
            <div className={d.navBar}>
            {dialogs.map((el, index) => [
                <div key={index} className={d.border} style={{border: theme.palette.primary.border}} >
                    <NavLink to={`${el.id}`} className={d.link}>
                        <ListItem>
                            <ListItemAvatar>
                                 <Avatar src={el.src} />
                            </ListItemAvatar>
                            <ListItemText primary={el.name} sx={{color: '#212121'}} />
                            <DeleteForeverIcon onClick={() => deleteFriend(el.id)} sx={{ marginLeft: '20px', color: '#212121' }} 
                            type='submit' />
                        </ListItem>
                     </NavLink>
                </div>
            ])}
             <Button variant='contained' size='large' sx={{ fontWeight: '600', minWidth: '25px', fontSize: '16px', height: '50px', marginTop: '30px'}} 
                type='submit' onClick={addFriends}>+</Button>
            </div>
        </div>
    )
}

export default MyFriends;