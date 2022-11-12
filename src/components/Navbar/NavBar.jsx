import React from 'react';
import d from './NavBar.module.css';
import { useTheme } from '@emotion/react';
import CustomLink from '../CustomLink/CustomLink';


const NavBar = () => {

  const theme = useTheme()

    return (
      <nav className={d.navBar} style={{background: theme.palette.primary.main}}>
        <div className={d.block}>
          <CustomLink to='/'>Home</CustomLink>
        </div>
        <div className={d.block}>
          <CustomLink to='/profile'>Profile</CustomLink>
        </div>
        <div className={d.block}>
          <CustomLink to='/chats'>Chats</CustomLink>
        </div>
        <div className={d.block}>
          <CustomLink to='/settings'>Settings</CustomLink>
        </div>
      </nav>
    )
}

export default NavBar;