import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPhotos from './MyPhotos/MyPhotos';
import AboutMeContainer from './AboutMeContainer/AboutMeContainer';



const Profile = () => {

    return (
        <div>
            <AboutMeContainer />
            <MyPhotos />
            <MyPosts />
        </div>
    )
}

export default Profile;