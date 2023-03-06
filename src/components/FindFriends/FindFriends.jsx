import React from "react";
import d from './FindFriends.module.css';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import Error from "../Error/Error";
import Preloader from "../Preloader/Preloader";

const FindFriends = (props) => {

    
    return (
        <div className={d.userBlock}>
            <div className={d.error}>{ props.isError ? <Error /> : null}</div>
            <div>{props.isPreloader ? <Preloader /> : null}</div>
                <><h1>Users</h1>
                <div className={d.pagination}>
                    {props.pages.map((el, i) => <p onClick={() => props.getUsers(el)} className={props.currentPage === el ? d.selectedPage : d.notActive}  key={i}>{el}</p>)}
                </div>
                <div>
                    {props.users.map(el => <ListItem key={el.id} sx={{justifyContent: 'space-between'}}>
                        <ListItemAvatar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <Avatar src={!el.photos.large ? 'https://klike.net/uploads/posts/2022-08/1660198250_1.jpg' : el.photos.large} alt='' sx={{height: 80, width: 80, marginRight: 10}}/>
                            <div>
                                <ListItemText primary={el.name} />
                                <div style={{opacity: 0.45}}>{!el.status ? 'Everybody hi': el.status}</div>
                            </div>
                        </ListItemAvatar>
                        {el.followed ? <Button onClick={() => props.removeCurrentUser(el)} variant='contained' size='large' sx={{ fontWeight: '600', fontSize: 10}} type='submit'>Remove from friend</Button> : <Button onClick={() => props.addCurrentUser(el)} variant='contained' size='large' sx={{ fontWeight: '600', fontSize: 10}} type='submit'>Add as friend</Button>}
                    </ListItem>)}
                </div></>
            
        </div>
    )
}

export default FindFriends;