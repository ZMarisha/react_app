import { useTheme } from '@emotion/react';
import d from './Profile.module.css'
import Checkbox from './Checkbox/Checkbox';
import { useSelector } from 'react-redux';

const Profile = () => {

    const myAvatarka = useSelector(state => state.profile.myProfile.avatarka);

    const theme = useTheme();
    return (
        <div>
            <h1>My Profile</h1>
            <div className={d.profile} style={{border: theme.palette.primary.border}}>
                <img src={myAvatarka} alt='myAvatar'/>
            </div>
            <Checkbox />
        </div>
    )
}

export default Profile;