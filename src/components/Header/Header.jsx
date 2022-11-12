import { useTheme } from '@emotion/react';
import { Avatar } from '@mui/material';
import d from './Header.module.css'

const Header = ({myProfile}) => {
    const theme = useTheme()
    return (
      <header className={d.header}>
        <h2 className={d.text}>Welcome, Marina!</h2>
        <Avatar sx={{ width: 70, height: 70 }} alt='myAvatar' src={myProfile} />
      </header>
    )
}

export default Header;