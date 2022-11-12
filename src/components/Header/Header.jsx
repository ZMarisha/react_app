import React from 'react';
import { useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import d from './Header.module.css';
import { useTheme } from '@emotion/react';

const Header = () => {

  const myAvatarka = useSelector(state => state.profile.myProfile.avatarka);
  const theme = useTheme();

    return (
      <header className={d.header} style={{borderBottom: theme.palette.primary.borderBottom}}>
        <h2 className={d.text}>Welcome, Marina!</h2>
        <Avatar sx={{ width: 70, height: 70 }} alt='myAvatar' src={myAvatarka} />
      </header>
    )
}

export default Header;