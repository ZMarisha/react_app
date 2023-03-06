import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from '@mui/material';
import d from './Header.module.css';
import { useTheme } from '@emotion/react';
import { useAuth } from '../../hook/useAuth';
import CustomLink from '../CustomLink/CustomLink';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/registerReducer';

const Header = () => {

  const dispatch = useDispatch();
  const userName = useSelector(state => state.register.user.email);
  const myAvatarka = useSelector(state => state.profile.myProfile.avatarka);
  const theme = useTheme();
  const isAuth = useAuth().isAuth;
  const navigate = useNavigate();
  
  const logout = () => { 
    const deleteUser = {
      email: null,
      id: null,
      token: null
    }
    dispatch(logoutUser(deleteUser));
    navigate('/login');
  }

    return (
      <header className={d.header} style={{borderBottom: theme.palette.primary.borderBottom}}>
        <h2 className={d.text}>Welcome, {userName}!</h2>
        <div className={d.login}>
          <div style={{border: theme.palette.primary.border2}} className={d.btnLog}>
            {!isAuth ? <CustomLink to='/login'>Log in</CustomLink> : <button className={d.logout} onClick={logout} type='submit'>Log out</button>}
          </div>
          <Avatar sx={{ width: 70, height: 70, marginLeft: '20px' }} alt='myAvatar' src={myAvatarka} />
        </div> 
      </header>
    )
}

export default Header;