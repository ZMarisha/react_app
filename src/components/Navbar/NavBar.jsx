import React from 'react';
import d from './NavBar.module.css'

import { NavLink } from 'react-router-dom';
import { useTheme } from '@emotion/react';


const NavBar = () => {

    const setActive = ({isActive}) => isActive ? d.active: d.item
    const theme = useTheme()
//     const [dialogs, setDialogs] = useState([
//     {id: 1, name: 'Anna', src: 'https://klike.net/uploads/posts/2019-03/1551511851_21.jpg'},
//     {id: 2, name: 'Valeria', src: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
//     {id: 3, name: 'Nikita', src: 'https://klike.net/uploads/posts/2019-03/1551515501_13.jpg'},
// ])

    return (
      <nav className={d.navBar} style={{background: theme.palette.primary.main}}>
        <div className={d.block}>
          <NavLink className = {d.item} to='/'>Home</NavLink>
        </div>
        <div className={d.block}>
          <NavLink className = {setActive} to='/profile'>Profile</NavLink>
        </div>
        <div className={d.block}>
          <NavLink className = {setActive} to='/chats'>Chats</NavLink>
        </div>
        <div className={d.settingNavBar}>
          <NavLink className = {setActive} to='/settings'>Settings</NavLink>
        </div>
      </nav>
    )
}

export default NavBar;