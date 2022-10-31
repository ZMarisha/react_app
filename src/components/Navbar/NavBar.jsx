import React, {useState} from 'react';
import d from './NavBar.module.css'
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { useTheme } from '@emotion/react';


const NavBar = () => {

    const theme = useTheme()
    const [dialogs, setDialogs] = useState([
    {id: 1, name: 'Anna', src: 'https://klike.net/uploads/posts/2019-03/1551511851_21.jpg'},
    {id: 2, name: 'Valeria', src: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
    {id: 3, name: 'Nikita', src: 'https://klike.net/uploads/posts/2019-03/1551515501_13.jpg'},
])

    return (
        <div className={d.navBar} style={{background: theme.palette.primary.main}}>
          {dialogs.map((el, index) => [
            <ListItem key={index}>
              <ListItemAvatar>
                <Avatar src={el.src} />
              </ListItemAvatar>
              <ListItemText primary={el.name} style={{color: theme.palette.primary.text}} />
            </ListItem>])}
        </div>
    )
}

export default NavBar;