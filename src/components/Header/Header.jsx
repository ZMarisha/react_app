import { useTheme } from '@emotion/react';
import { Avatar } from '@mui/material';
import d from './Header.module.css'

const Header = ({myProfile}) => {
    const theme = useTheme()
    return (
      <header className={d.header} style={{background: theme.palette.primary.main}}>
        <Avatar sx={{ width: 70, height: 70 }} alt='myAvatar' src={myProfile} />
      </header>
    )
}

export default Header;