import { useTheme } from '@emotion/react';
import { Avatar } from '@mui/material';
import d from './Header.module.css'

const Header = () => {
    const theme = useTheme()
    return (
      <header className={d.header} style={{background: theme.palette.primary.main}}>
        <Avatar sx={{ width: 70, height: 70 }} alt='myAvatar' src='https://klike.net/uploads/posts/2019-03/1551511862_19.jpg' />
      </header>
    )
}

export default Header;