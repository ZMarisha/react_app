import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import d from './MyFriends.module.css';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';




const MyFriends = ({addFriends, deleteFriend, theme, dialogs}) => {

    return (
        <div className={d.parent} style={{border: theme.palette.primary.border}}>
            <h1 className={d.headering}>My friends</h1>
            <div className={d.navBar}>
            {dialogs.map((el, index) => [
                <div key={index} className={d.border} style={{border: theme.palette.primary.border}} >
                    <NavLink to={`${el.id}`} className={({isActive}) => isActive ? d.active : d.link}>
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
            </div>
            <div className={d.btn}>
            <Button onClick={addFriends} variant='contained' size='large' sx={{ fontWeight: '600', minWidth: '25px', 
            fontSize: '16px', height: '50px', marginTop: '30px', borderRadius: '50%'}} 
                type='submit' >+</Button>
            </div>
            
        </div>
    )
}

export default MyFriends;